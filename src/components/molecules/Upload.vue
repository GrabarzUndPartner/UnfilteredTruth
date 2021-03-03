<template>
  <label
    v-font="$getFont('Alfa Slab One')"
    class="molecule-upload"
    :class="{highlight}"
    @dragenter="hover(true)"
    @dragover="hover(true)"
    @dragleave="hover(false)"
    @drop="hover(false)"
  >
    <input ref="input" type="file" @change="onChange">
    <div>
      <transition name="fade" mode="out-in">
        <span v-if="infoText" v-font="$getFont('Roboto', 700, 'italic')" class="molecule-upload__info" v-html="infoText" />
      </transition>
      <span class="molecule-upload__text">{{ text }}</span>
      <svg-icon-upload />
    </div>
    <transition name="fade" mode="out-in">
      <info-box
        v-if="error"
        class="molecule-upload__error-message"
        style-type="upload-error"
        v-bind="errorMessage"
        @click.native="onClickInfoBox"
      />
    </transition>
    <video
      v-for="(file, index) in files"
      :key="index"
      :src="getObjectUrl(file)"
      width="0"
      height="0"
      autoplay
      muted
      @error="onError"
      @loadedmetadata="({target}) => onLoad(target, file)"
    />
  </label>
</template>

<script>
import File from '@/classes/File';
import SvgIconUpload from '@/assets/svg/icons/upload.svg?vue-template';
import InfoBox from '../atoms/InfoBox';

export const ERROR_UNSUPPORTED_BROWSER = Symbol('errorBrowserUnsupported');
export const ERROR_FILE_SIZE = Symbol('errorFileSize');
export const ERROR_VIDEO_LENGTH = Symbol('errorFileSize');
export const ERROR_FILE_FORMAT = Symbol('errorFileFormat');

export default {
  components: {
    SvgIconUpload,
    InfoBox
  },

  props: {
    text: {
      type: String,
      default: 'Drop video or tap here.'
    },
    maxLengthText: {
      type: String,
      default: 'Max. video length: %length% seconds.'
    },
    androidExperimentalText: {
      type: String,
      default: 'Support for Android is currently experimental.'
    },
    errorMessages: {
      type: Object,
      default () {
        return {
          [ERROR_UNSUPPORTED_BROWSER]: {
            headline: 'Browser not supported.',
            text: 'This tool currently supports ?Chrome, Edge, Firefox, Safari (on desktop) ?Safari (iOS) or Google Chrome (Android)'
          },
          [ERROR_FILE_SIZE]: {
            headline: 'File to large',
            text: 'File Size is to large…',
            foot: 'Try again'
          },
          [ERROR_VIDEO_LENGTH]: {
            headline: 'Video too long.',
            text: 'Sorry. Video uploads are currently limited to %length% seconds.',
            foot: 'Try again'
          },
          [ERROR_FILE_FORMAT]: {
            headline: 'Wrong video format.',
            text: 'We are currently only able to convert MP4 or mov files.',
            foot: 'Try again'
          }
        };
      }
    }
  },

  data () {
    return {
      infoText: null,
      files: [],
      error: null,
      highlight: false,
      maxLength: 120
    };
  },

  computed: {
    errorMessage () {
      return Object.assign(this.errorMessages[this.error], {
        text: this.errorMessages[this.error].text.replace('%length%', this.getMaxLength())
      });
    }
  },

  mounted () {
    if (!this.$isBrowserSupported()) {
      this.error = ERROR_UNSUPPORTED_BROWSER;
    }

    const text = [
      this.maxLengthText.replace('%length%', this.getMaxLength())
    ];
    if (this.$isDeviceAndroid()) {
      text.push(this.androidExperimentalText);
    }
    this.infoText = text.join('<br>');
  },

  methods: {

    getMaxLength () {
      if (this.$isDeviceAndroid() || this.$isDeviceIos()) {
        return 60;
      } else {
        return 120;
      }
    },

    getObjectUrl (file) {
      return global.URL.createObjectURL(file);
    },

    onChange ({ target: { files } }) {
      this.files = files;
    },

    async onLoad (target, uploadedFile) {
      const file = new File(uploadedFile, target.duration);
      if (await file.hasValidMimeType()) {
        if (target.duration <= this.getMaxLength()) {
          this.$emit('files-change', { file, target });
        } else {
          this.error = ERROR_VIDEO_LENGTH;
        }
      } else {
        this.error = ERROR_FILE_FORMAT;
      }
    },

    onError (e) {
      this.error = ERROR_FILE_FORMAT;
    },

    hover (value) {
      this.highlight = value;
    },

    onClickInfoBox () {
      if (this.error !== ERROR_UNSUPPORTED_BROWSER) {
        this.error = null;
        this.$refs.input.value = '';
      }
    }
  }
};
</script>

<style lang="postcss" scoped>

.molecule-upload {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 200px;
  background-color: var(--color-secondary);

  & > div {
    text-align: center;
  }

  & .molecule-upload__info {
    position: absolute;
    top: calc(10 / 320 * 100vw);
    left: 0;
    width: 100%;
    font-size: calc(12 / 320 * 100vw);
    text-align: center;
    pointer-events: none;

    @media (--xs) {
      top: 10px;
      font-size: 12px;
    }

    @media (--sm) {
      top: 20px;
      font-size: 18px;
    }
  }

  & .molecule-upload__text {
    margin-top: calc((50 + 16) / 320 * 100vw);
    margin-bottom: calc(16 / 320 * 100vw);
    font-size: calc(22 / 320 * 100vw);
    color: var(--color-tertiary);
    text-align: center;
    text-transform: uppercase;

    @media (--xs) {
      margin-top: calc(50px + 16px);
      margin-bottom: 16px;
      font-size: 22px;
    }

    @media (--sm) {
      padding: 0 15%;
      margin-top: calc(70px + 22px);
      margin-bottom: 22px;
      font-size: 32px;
    }
  }

  & .molecule-upload__error-message {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  & svg {
    width: calc(29 / 320 * 100vw);
    height: calc(50 / 320 * 100vw);
    fill: var(--color-primary);

    @media (--xs) {
      width: 29px;
      height: 50px;
    }

    @media (--sm) {
      width: 41px;
      height: 70px;
    }
  }

  & input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
    opacity: 0;
  }

  & span {
    display: block;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
