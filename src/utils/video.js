export function getVideoLength (objectUrl) {
  return new Promise((resolve) => {
    const video = global.document.createElement('video');
    video.preload = 'metadata';
    video.src = objectUrl;
    video.onloadedmetadata = (e) => {
      resolve(video.duration);
    };
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
