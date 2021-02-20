async function getInstance (stats) {
  stats.info = 'initialize';
  const { createFFmpeg } = await import('@ffmpeg/ffmpeg');
  const ffmpeg = createFFmpeg({
    corePath: '/ffmpeg/ffmpeg-core.js',
    log: true
  });
  await ffmpeg.load();
  ffmpeg.setProgress(({ ratio }) => {
    stats.progress = Number((ratio * 100.0).toFixed(2));
  });
  return ffmpeg;
}

async function loadFile (file, stats) {
  const ffmpeg = await getInstance(stats);
  const { fetchFile } = await import('@ffmpeg/ffmpeg');
  ffmpeg.FS('writeFile', file.name, await fetchFile(file));
  return ffmpeg;
}

function getBlobUrl (ffmpeg, { name }, stats) {
  return URL.createObjectURL(new Blob([
    ffmpeg.FS('readFile', 'output.mp4').buffer
  ], { type: 'video/mp4' }));
}

export async function disguiseFile (file, stats) {
  const ffmpeg = await loadFile(file, stats);
  stats.info = 'start transcoding';
  await ffmpeg.run(
    '-i', file.name,
    '-f', 'lavfi',
    '-i', 'sine=frequency=1:duration=600:sample_rate=48000',
    '-ac', '2',
    '-preset', 'ultrafast',
    '-filter_complex', '[0:v]setpts=0.98*PTS[v];[0:a]volume=1[a0];[1:a]volume=20[a1];[a0]atempo=1.02[a00];[a00][a1]amix=inputs=2:duration=first:dropout_transition=2[a]',
    '-map', '[v]',
    '-map', '[a]',
    'output.mp4'
  );
  stats.info = 'finished transcoding';
  stats.blob = getBlobUrl(ffmpeg, file, stats);
  return stats;
}
