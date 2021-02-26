import Transferable from '@/classes/Transferable';
global.importScripts('/videoconverter/ffmpeg-all-codecs.js');

const now = Date.now;
const transferable = new Transferable(self);

function print (text) {
  postMessage({
    type: 'stdout',
    data: text
  });
}

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
      '-filter_complex', '[0:v]setpts=0.98*PTS,scale=iw/2:ih/2,showinfo[v];[0:a]volume=1[a0];[1:a]volume=1.75[a1];[a0]atempo=1.02[a00];[a00][a1]amix=inputs=2:duration=first:dropout_transition=2[a]',
      '-map', '[v]',
      '-map', '[a]',
      'output.mp4'
    ],
    // TOTAL_MEMORY: message.TOTAL_MEMORY || false
    // Can play around with this option - must be a power of 2
    TOTAL_MEMORY: 268435456
  };

  postMessage({
    type: 'start',
    data: Module.arguments.join(' ')
  });

  postMessage({
    type: 'stdout',
    data: 'Received command: ' +
        Module.arguments.join(' ') +
        ((Module.TOTAL_MEMORY) ? '.  Processing with ' + Module.TOTAL_MEMORY + ' bits.' : '')
  });

  const time = now();
  const result = global.ffmpeg_run(Module);
  transferable.publish(result);

  const totalTime = now() - time;
  postMessage({
    type: 'stdout',
    data: 'Finished processing (took ' + totalTime + 'ms)'
  });
});

postMessage({
  type: 'ready'
});

function getAudioFileName (files) {
  return files.find(file => file.mimeType.startsWith('audio')).name;
}

function getVideoFileName (files) {
  return files.find(file => file.mimeType.startsWith('video')).name;
}
