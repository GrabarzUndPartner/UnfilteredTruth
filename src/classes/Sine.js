const toWav = require('audiobuffer-to-wav');

export default class Sine {
  constructor (duration, frequency = 1, hz = 48000) {
    this.duration = duration;
    this.frequency = frequency;
    this.hz = hz;
  }

  getBuffer () {
    const angularFrequency = this.frequency * 2 * Math.PI;
    const audioBuffer = (new (global.AudioContext || global.webkitAudioContext)()).createBuffer(1, this.hz * this.duration, this.hz);
    const float32Array = audioBuffer.getChannelData(0);

    for (let sampleNumber = 0; sampleNumber < audioBuffer.length; sampleNumber++) {
      float32Array[Number(sampleNumber)] = generateSample(sampleNumber, this.hz, angularFrequency);
    }

    return toWav(audioBuffer);
  }
}

function generateSample (sampleNumber, hz, angularFrequency) {
  const sampleTime = sampleNumber / hz;
  const sampleAngle = sampleTime * angularFrequency;
  return Math.sin(sampleAngle);
}
