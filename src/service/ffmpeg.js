import { Subject } from 'rxjs';
import { createSineBuffer } from '@/utils/sine';
import { getVideoLength } from '@/utils/video';
import { getBlobUrlOfBuffer } from '@/utils/file';

async function getObservers () {
  const ready = new Subject();
  const start = new Subject();
  const done = new Subject();
  const stdout = new Subject();

  const { createFFmpeg } = await import('@ffmpeg/ffmpeg');
  const ffmpeg = createFFmpeg({
    corePath: '/ffmpeg/ffmpeg-core.js',
    log: true
  });
  ffmpeg.load().then(() => { ready.next(ffmpeg); });
  ffmpeg.setProgress(({ ratio }) => { stdout.next(ratio); });
  return { ready, start, done, stdout };
}

async function loadFile (ffmpeg, file, stats) {
  const { fetchFile } = await import('@ffmpeg/ffmpeg');
  ffmpeg.FS('writeFile', file.name, await fetchFile(file));
  ffmpeg.FS('writeFile', `${file.name}.wav`, await getVideoLength(file).then((duration) => createSineBuffer(duration)))
}

export async function disguiseFile (file) {
  const observers = await getObservers();
  observers.ready.subscribe(async (ffmpeg) => {
    await loadFile(ffmpeg, file);
    await ffmpeg.run(
      '-i', file.name,
      '-i', `${file.name}.wav`,
      '-ac', '2',
      '-preset', 'ultrafast',
      '-map_metadata:s:v', '0:s:v',
      '-map_metadata:s:a', '0:s:a',
      '-filter_complex', '[0:v]setpts=0.98*PTS,scale=iw/2:ih/2,showinfo[v];[0:a]volume=1[a0];[1:a]volume=1.75[a1];[a0]atempo=1.02[a00];[a00][a1]amix=inputs=2:duration=first:dropout_transition=2[a]',
      '-map', '[v]',
      '-map', '[a]',
      'output.mp4'
    );
    observers.done.next(getBlobUrlOfBuffer(ffmpeg.FS('readFile', 'output.mp4').buffer))
  })
  return observers;
}
