export function getBufferOfFile (file) {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.addEventListener('load', function () {
      console.log(reader.result);
      resolve(new Uint8Array(reader.result));
    }, false);

    reader.readAsArrayBuffer(file);
  });
}

export function getBlobUrlOfBuffer (buffer) {
  return window.URL.createObjectURL(new Blob([
    buffer
  ], { type: 'video/mp4' }));
}
