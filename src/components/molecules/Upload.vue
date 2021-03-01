<template>
  <div
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
      <span class="molecule-upload__text">{{ text }}</span>
      <svg-icon-upload />
    </div>
    <transition>
      <info-box
        v-if="error"
        class="molecule-upload__error-message"
        style-type="upload-error"
        v-bind="errorMessages[error]"
        @click.native="onClickInfoBox"
      />
    </transition>
  </div>
</template>

<script>
import File from '@/classes/File';
import SvgIconUpload from '@/assets/svg/icons/upload.svg?vue-template';
import InfoBox from '../atoms/InfoBox';

const ERROR_UNSUPPORTED_BROWSER = Symbol('errorBrowserUnsupported');
const ERROR_FILE_SIZE = Symbol('errorFileSize');
const ERROR_VIDEO_LENGTH = Symbol('errorFileSize');
const ERROR_FILE_FORMAT = Symbol('errorFileFormat');

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
            text: 'We are sorry. Videos are currently limited to 60 seconds.',
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
      error: null,
      highlight: false
    };
  },

  methods: {
    onClickInfoBox () {
      this.error = null;
      this.$refs.input.value = '';
    },
    onChange ({ target: { files } }) {
      Array.from(files).map(file => new File(file)).map(async (file) => {
        if (await file.hasValidMimeType()) {
          if (await file.hasValidLength()) {
            if (file.hasValidSize()) {
              this.$emit('files-change', file);
            } else {
              this.error = ERROR_FILE_SIZE;
            }
          } else {
            this.error = ERROR_VIDEO_LENGTH;
          }
        } else {
          this.error = ERROR_FILE_FORMAT;
        }
      });
    },

    hover (value) {
      this.highlight = value;
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
</style>
