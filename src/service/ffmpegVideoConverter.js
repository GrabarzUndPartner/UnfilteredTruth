
// eslint-disable-next-line import/no-webpack-loader-syntax
import Worker from 'worker-loader!./worker.js';
import { fromEvent, Subject } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import parseProgress from '@ffmpeg/ffmpeg/src/utils/parseProgress';
import { getBufferOfFile, getBlobUrlOfBuffer } from '@/utils/file';
import { createSineBuffer } from '@/utils/sine';
import { getVideoLength } from '@/utils/video';

function getObservers () {
  const ready = new Subject();
  const start = new Subject();
  const done = new Subject();
  const stdout = new Subject();

  const worker = new Worker();
  const messages = fromEvent(worker, 'message').pipe(map(e => e.data));
  messages.pipe(filter(data => data.type === 'ready')).subscribe((e) => {
    ready.next(worker);
  });
  messages.pipe(filter(data => data.type === 'stdout')).subscribe(({ data }) => {
    parseProgress(data, ({ ratio }) => { stdout.next(ratio); });
  });
  messages.pipe(filter(data => data.type === 'start')).subscribe(({ data }) => start.next(data));
  messages.pipe(filter(data => data.type === 'done')).subscribe(({ data }) => {
    worker.terminate();
    done.next(getBlobUrlOfBuffer(data[0].data));
  });

  return { ready, start, done, stdout };
}

function loadFiles (file) {
  return Promise.all([
    getBufferOfFile(file).then((data) => {
      return {
        name: file.name,
        data
      };
    }),
    getVideoLength(file).then((duration) => {
      return {
        name: `${file.name}.wav`,
        data: createSineBuffer(duration)
      };
    })
  ]);
}

export async function disguiseFile (file) {
  const observers = getObservers();
  const files = await loadFiles(file);
  observers.ready.subscribe((worker) => {
    worker.postMessage({
      type: 'command',
      arguments: [
        '-i', file.name,
        '-i', `${file.name}.wav`,
        '-strict', '-2',
        '-ac', '2',
        '-preset', 'ultrafast',
        '-map_metadata:s:v', '0:s:v',
        '-map_metadata:s:a', '0:s:a',
        '-filter_complex', '[0:v]setpts=0.98*PTS,scale=iw/2:ih/2,showinfo[v];[0:a]volume=1[a0];[1:a]volume=1.75[a1];[a0]atempo=1.02[a00];[a00][a1]amix=inputs=2:duration=first:dropout_transition=2[a]',
        '-map', '[v]',
        '-map', '[a]',
        'output.mp4'
      ],
      files
    });
  });
  return observers;
}

