const toWav = require('audiobuffer-to-wav');

export function createSineBuffer (duration, frequency = 1, hz = 48000) {
  const angularFrequency = frequency * 2 * Math.PI;
  const audioBuffer = (new (global.AudioContext || global.webkitAudioContext)()).createBuffer(1, hz * duration, hz);
  const float32Array = audioBuffer.getChannelData(0);

  for (let sampleNumber = 0; sampleNumber < audioBuffer.length; sampleNumber++) {
    float32Array[Number(sampleNumber)] = generateSample(sampleNumber, hz, angularFrequency);
  }

  return new Uint8Array(toWav(audioBuffer));
}

function generateSample (sampleNumber, hz, angularFrequency) {
  const sampleTime = sampleNumber / hz;
  const sampleAngle = sampleTime * angularFrequency;
  return Math.sin(sampleAngle);
}
