export function getVideoLength (objectUrl) {
  return new Promise((resolve) => {
    const video = global.document.createElement('video');
    video.preload = 'metadata';
    video.src = objectUrl;
    // TODO: safari doesnt receive onloadedmetadata
    video.onloadedmetadata = (e) => {
      resolve(video.duration);
    };
    // resolve(10);
  });
}

export function getVideoDimension (objectUrl) {
  return new Promise((resolve) => {
    const video = global.document.createElement('video');
    video.preload = 'metadata';
    video.src = objectUrl;
    video.onloadedmetadata = () => {
      resolve({ x: video.videoWidth, y: video.videoHeight });
    };
  });
}
