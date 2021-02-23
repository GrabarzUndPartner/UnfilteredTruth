// eslint-disable-next-line import/no-webpack-loader-syntax
import Worker from 'worker-loader!./worker.js';
import { fromEvent, Subject, ReplaySubject } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import parseProgress from '@ffmpeg/ffmpeg/src/utils/parseProgress';
import File from '@/classes/File';
import Sine from '@/classes/Sine';
import { getVideoLength } from '@/utils/video';

function createOberservers () {
  const ready = new ReplaySubject(1);
  const start = new Subject();
  const done = new Subject();
  const info = new ReplaySubject();
  const progress = new Subject();
  const error = new ReplaySubject(1);
  return { ready, start, done, info, progress, error };
}

function prepare () {
  const observers = createOberservers();

  observers.info.next('initialize');
  const worker = new Worker();
  const messages = fromEvent(worker, 'message').pipe(map(e => e.data));
  messages.pipe(filter(data => data.type === 'ready')).subscribe((e) => {
    observers.ready.next(worker);
  });
  messages.pipe(filter(data => data.type === 'stdout')).subscribe(({ data }) => {
    parseProgress(data, ({ ratio }) => { observers.progress.next(ratio); });
  });
  messages.pipe(filter(data => data.type === 'start')).subscribe(({ data }) => {
    observers.info.next('start conversion');
  });
  messages.pipe(filter(data => data.type === 'done')).subscribe(async ({ data }) => {
    worker.terminate();
    observers.info.next('finished conversion');
    observers.done.next(await new File(new Blob([
      data[0].data
    ])).getObjectUrl());
  });
  return observers;
}

async function loadFiles (file) {
  return Promise.all([
    file.getBuffer().then((data) => {
      return { name: file.name, data };
    }),
    getVideoLength(await file.getObjectUrl()).then((duration) => {
      return { name: `${file.name}.wav`, data: new Sine(duration).getBuffer() };
    })
  ]);
}

export async function disguiseFile (file) {
  const observers = prepare();

  if (await file.hasValidMimeType()) {
    if (await file.hasValidLength()) {
      if (file.hasValidSize()) {
        observers.ready.subscribe((worker) => {
          observers.info.next('load file');
          run(worker, file);
        });
      } else {
        observers.error.next('file is too big');
      }
    } else {
      observers.error.next('your video is too long');
    }
  } else {
    observers.error.next('wrong file format');
  }
  return observers;
}

async function run (worker, file) {
  const files = await loadFiles(file);
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
}
