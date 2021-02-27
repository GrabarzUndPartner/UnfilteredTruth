// eslint-disable-next-line import/no-webpack-loader-syntax
import Worker from 'worker-loader!./worker.js';
import { fromEvent, Subject, ReplaySubject } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import parseProgress from '@ffmpeg/ffmpeg/src/utils/parseProgress';
import Sine from '@/classes/Sine';
import Transferable from '@/classes/Transferable';

function createObservers () {
  const ready = new ReplaySubject(1);
  const start = new Subject();
  const done = new Subject();
  const info = new ReplaySubject(1);
  const progress = new Subject();
  const error = new ReplaySubject(1);
  return { ready, start, done, info, progress, error };
}

function prepare () {
  const observers = createObservers();
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
    observers.start.next(data);
    observers.info.next('start conversion');
  });
  return observers;
}

function loadFiles (file) {
  return Promise.all([
    file.getBuffer().then(async (data) => {
      return { name: file.name, type: await file.getMimeType(), data };
    }),
    { name: 'sine.wav', type: 'audio/wav', data: new Sine(file.duration).getBuffer() }
  ]);
}

export function disguiseFile (file) {
  const observers = prepare();
  observers.ready.subscribe((worker) => {
    observers.info.next('load file');
    run(worker, file, observers);
  });
  return observers;
}

async function run (worker, file, observers) {
  const files = await loadFiles(file);
  const transferable = new Transferable(worker);
  transferable.publish(files);
  transferable.subscribe(([
    file
  ]) => {
    transferable.destroy();
    observers.done.next(URL.createObjectURL(new Blob([
      file.data
    ], { type: 'video/mp4' })));
  });
}
