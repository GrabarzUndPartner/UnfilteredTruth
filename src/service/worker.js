import Transferable from '@/classes/Transferable';
self.importScripts(process.env.BASE_PATH + 'videoconverter/ffmpeg-all-codecs.js');

const PITCHING = 0.02;

const transferable = new Transferable(self);
transferable.subscribe((files) => {
  const Module = {
    print,
    printErr: print,
    files,
    arguments: [
      '-i', getVideoFileName(files),
      '-i', getAudioFileName(files),
      '-strict', '-2',
      '-ac', '2',
      '-preset', 'ultrafast',
      '-map_metadata:s:v', '0:s:v',
      '-map_metadata:s:a', '0:s:a',
      '-filter_complex', `[0:v]setpts=${1 - PITCHING}*PTS,scale=iw/2:ih/2,showinfo[v];[0:a]volume=1[a0];[1:a]volume=1.75[a1];[a0]atempo=${1 + PITCHING}[a00];[a00][a1]amix=inputs=2:duration=first:dropout_transition=2[a]`,
      '-map', '[v]',
      '-map', '[a]',
      'output.mp4'
    ],
    // TOTAL_MEMORY: message.TOTAL_MEMORY || false
    // Can play around with this option - must be a power of 2
    TOTAL_MEMORY: 268435456
  };

  sendInfo('start', Module.arguments.join(' '));

  const result = global.ffmpeg_run(Module);
  transferable.publish(result);
});

sendInfo('ready', null);

function sendInfo (type, data) {
  postMessage({ type, data });
}

function print (text) {
  sendInfo('stdout', text);
}

function getAudioFileName (files) {
  return files.find(file => file.mimeType.startsWith('audio')).name;
}

function getVideoFileName (files) {
  return files.find(file => file.mimeType.startsWith('video')).name;
}
