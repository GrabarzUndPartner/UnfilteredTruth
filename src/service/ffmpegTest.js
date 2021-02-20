
// eslint-disable-next-line import/no-webpack-loader-syntax
import Worker from 'worker-loader!./worker.js';
import { fromEvent, Subject } from 'rxjs';

export const start = new Subject();
export const done = new Subject();
export const stdout = new Subject();

let worker, isWorkerLoaded;
export function disguise (file) {
  initWorker();
  createSineWave();
  return Promise.resolve();
}

function initWorker () {
  worker = new Worker();
  const messages = fromEvent(worker, 'message').map(e => e.data);
  messages.filter(data => data.type === 'ready').subscribe((e) => {
    worker.postMessage({
      type: 'command',
      arguments: [
        '-help'
      ]
    });
  });
  messages.filter(data => data.type === 'stdout').subscribe(({ message }) => stdout.next(message));
  messages.filter(data => data.type === 'start').subscribe(({ message }) => start.next(message));
  messages.filter(data => data.type === 'done').subscribe(({ message }) => done.next(message));
}

function createSineWave () {
  const REAL_TIME_FREQUENCY = 440;
  const ANGULAR_FREQUENCY = REAL_TIME_FREQUENCY * 2 * Math.PI;

  const audioContext = new AudioContext();
  const myBuffer = audioContext.createBuffer(1, 88200, 44100);
  const myArray = myBuffer.getChannelData(0);
  for (let sampleNumber = 0; sampleNumber < 88200; sampleNumber++) {
    myArray[sampleNumber] = generateSample(sampleNumber);
  }

  function generateSample (sampleNumber) {
    const sampleTime = sampleNumber / 44100;
    const sampleAngle = sampleTime * ANGULAR_FREQUENCY;
    return Math.sin(sampleAngle);
  }

  console.log('BUFFER', myBuffer);
}
