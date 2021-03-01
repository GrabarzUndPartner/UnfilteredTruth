import BDC from 'binary-data-chunking';
import { fromEvent, Subject } from 'rxjs';
import { filter, map } from 'rxjs/operators';

export default class Transferable extends Subject {
  constructor (worker) {
    super();
    this.worker = worker;
    const observer = fromEvent(this.worker, 'message').pipe(map(e => e.data));
    observer.pipe(filter(data => data.type === 'metadata')).subscribe(async ({ data }) => {
      this.next(await receiveFiles(data));
    });
    observer.pipe(filter(data => data.type === 'chunk')).subscribe(({ data }) => {
      BDC.submitChunk(data);
    });
  }

  publish (files) {
    const transferableFiles = createTransferableFiles(files);
    publishMetdata(this.worker, transferableFiles);
    publishChunks(this.worker, transferableFiles);
  }

  destroy () {
    this.worker.terminate();
  }
}

function createTransferableFiles (files) {
  return files.map((file) => {
    return new BDC({
      name: file.name,
      mimeType: file.type || 'video/mp4',
      arrayBuffer: file.data,
      chunkSize: 10485760
    });
  });
}

function receiveFiles (metadataList) {
  return Promise.all(metadataList.map((data) => {
    return new Promise((resolve) => {
      const file = new BDC(data);
      file.onCompleted = () => {
        file.getFile((buffer) => {
          // file.clearData();
          resolve({ name: file.name, mimeType: file.mimeType, data: new Uint8Array(buffer) });
          console.log('complete', file);
        });
      };
    });
  }));
}

function publishMetdata (worker, files) {
  console.log('publish meta');
  worker.postMessage({
    type: 'metadata',
    data: files.map(file => file.getMetadata())
  });
}

function publishChunks (worker, files) {
  console.log('publish chunks');
  files.forEach((file) => {
    const to = file.getTransferObject();
    let chunk = to.getChunk();
    while (chunk) {
      worker.postMessage({ type: 'chunk', data: chunk }, [
        chunk
      ]);
      chunk = to.getChunk();
    }
  });
}
