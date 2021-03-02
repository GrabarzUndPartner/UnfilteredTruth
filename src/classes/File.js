import FileType from 'file-type/browser';

const VALID_MIMETYPES = [
  'video/quicktime',
  'video/mp4'
];
const MAX_FILE_SIZE = 188743680;

export default class File {
  constructor (data, duration = null) {
    this.data = data;
    this.name = data.name;
    this.duration = duration;
  }

  hasValidSize () {
    return this.data.size < MAX_FILE_SIZE;
  }

  async hasValidMimeType () {
    const mime = await this.getMimeType();
    return VALID_MIMETYPES.includes(mime);
  }

  async getMimeType () {
    const buffer = new Uint8Array(await this.getBuffer());
    return (await FileType.fromBuffer(buffer)).mime;
  }

  async getObjectUrl () {
    return URL.createObjectURL(await this.getBlob());
  }

  async getBlob () {
    return new Blob([
      new Uint8Array(await this.getBuffer())
    ], this.getMimeType());
  }

  getBuffer () {
    return new Promise((resolve) => {
      const reader = new FileReader();
      // eslint-disable-next-line scanjs-rules/call_addEventListener
      reader.addEventListener('load', function () {
        resolve(reader.result);
      }, false);
      reader.readAsArrayBuffer(this.data);
    });
  }
}
