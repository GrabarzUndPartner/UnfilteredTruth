import FileType from 'file-type/browser';
import { getVideoLength } from '@/utils/video';

const VALID_MIMETYPES = [
  'video/quicktime',
  'video/mp4'
];
const MAX_FILE_SIZE = {
  mobile: 188743680,
  desktop: 188743680
};

export default class File {
  constructor (data) {
    this.data = data;
    this.name = data.name;
  }

  hasValidSize () {
    if (isMobileDevice()) {
      return this.data.size < MAX_FILE_SIZE.mobile;
    } else {
      return this.data.size < MAX_FILE_SIZE.desktop;
    }
  }

  async hasValidMimeType () {
    const mime = await this.getMimeType();
    return VALID_MIMETYPES.includes(mime);
  }

  async hasValidLength () {
    if (await this.hasValidMimeType()) {
      return await getVideoLength(await this.getObjectUrl()) < 60;
    } else {
      return false;
    }
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
      reader.addEventListener('load', function () {
        resolve(reader.result);
      }, false);
      reader.readAsArrayBuffer(this.data);
    });
  }
}

function isMobileDevice () {
  return (typeof window.orientation !== 'undefined') || (navigator.userAgent.includes('IEMobile'));
};
