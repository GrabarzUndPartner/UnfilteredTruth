// eslint-disable-next-line import/no-webpack-loader-syntax
import Worker from 'worker-loader!./worker.js';
import { fromEvent, Subject, ReplaySubject } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import parseProgress from '@ffmpeg/ffmpeg/src/utils/parseProgress';
import File from '@/classes/File';
import Sine from '@/classes/Sine';
import Transferable from '@/classes/Transferable';
import { getVideoLength } from '@/utils/video';

function createOberservers () {
  const ready = new ReplaySubject(1);
  const start = new Subject();
  const done = new Subject();
  const info = new ReplaySubject(1);
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
    observers.start.next(data);
    observers.info.next('start conversion');
  });
  return observers;
}

async function loadFiles (file) {
  return Promise.all([
    file.getBuffer().then(async (data) => {
      return { name: file.name, type: await file.getMimeType(), data };
    }),
    getVideoLength(await file.getObjectUrl()).then((duration) => {
      return { name: 'sine.wav', type: 'audio/wav', data: new Sine(duration).getBuffer() };
    })
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
  transferable.subscribe(async (e) => {
    transferable.destroy();
    observers.done.next(await new File(new Blob([
      e[0].data
    ])).getObjectUrl());
  });
}
