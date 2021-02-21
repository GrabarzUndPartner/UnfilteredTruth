export function getVideoLength (file) {
  return new Promise((resolve) => {
    const video = global.document.createElement('video');
    video.preload = 'metadata';
    video.src = URL.createObjectURL(file);
    video.onloadedmetadata = (e) => {
      console.log(video, e)
      resolve(video.duration);
    };
  });
}

export function getVideoDimension (file) {
  return new Promise((resolve) => {
    const video = global.document.createElement('video');
    video.preload = 'metadata';
    video.src = URL.createObjectURL(file);
    video.onloadedmetadata = () => {
      resolve({x: video.videoWidth, y: video.videoHeight});
    };
  });
}
