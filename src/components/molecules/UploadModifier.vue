
<template>
  <div class="molecule-upload-modifier" :class="styleClasses">
    <atom-ball-background />
    <lost-container direction="column">
      <div class="upload-modifier__container">
        <div>
          <div class="upload-modifier__container__inner">
            <!-- upload -->
            <molecule-upload v-if="!stats.upload" class="upload-modifier__upload" :max-length="120" @files-change="onFilesChange" />

            <!-- preparing -->
            <transition name="fade" mode="out-in">
              <div v-if="message && !stats.progress" class="upload-modifier__message">
                <transition name="fade" mode="out-in">
                  <atom-info-box :key="String(stats.info)" v-bind="message" />
                </transition>
              </div>

              <!-- progress -->
              <atom-info-box v-if="stats.progress && !stats.blob" class="upload-modifier__progress" style-type="upload-modifier" :foot="info">
                <atom-progress :progress="stats.progress" />
              </atom-info-box>
            </transition>

            <!-- result -->
            <transition name="fade" mode="out-in">
              <molecule-video-analyze
                v-if="stats.blob"
                class="upload-modifier__preview"
                :stats="stats"
              />
            </transition>
          </div>
        </div>
      </div>
      <transition name="fade" mode="out-in">
        <div v-if="stats.blob" class="upload-modifier__complete">
          <atom-link-button :url="stats.blob" :download="stats.upload.name" :label="saveButton" />
          <atom-text-button :label="resetButton" @click="onClickRetry" />
        </div>
      </transition>
    </lost-container>
  </div>
</template>

<script>

import MoleculeUpload, {
  ERROR_UNSUPPORTED_BROWSER,
  ERROR_FILE_SIZE,
  ERROR_VIDEO_LENGTH,
  ERROR_FILE_FORMAT
} from '@/components/molecules/Upload';
import MoleculeVideoAnalyze from '@/components/molecules/VideoAnalyze';
import AtomBallBackground from '@/components/atoms/BallBackground';
import AtomInfoBox from '@/components/atoms/InfoBox';
import AtomProgress from '@/components/atoms/Progress';
import FFMPEGWorker, {
  INITIALIZE,
  LOADING,
  CONVERSION_START,
  CONVERSION_COMPLETE,
  ERROR
} from '@/classes/FFMPEGWorker';

import LostContainer from '../layouts/LostContainer';

import AtomLinkButton from '../atoms/LinkButton';
import AtomTextButton from '../atoms/TextButton';

export default {
  components: {
    LostContainer,
    MoleculeVideoAnalyze,
    AtomBallBackground,
    MoleculeUpload,
    AtomProgress,
    AtomInfoBox,
    AtomLinkButton,
    AtomTextButton
  },

  props: {
    info: {
      type: String,
      default: 'Do not leave your browser or close this tab'
    },
    id: {
      type: String,
      default: null
    },

    text: {
      type: String,
      default: 'Drop video or tap here.'
    },
    saveButton: {
      type: String,
      default: 'Save to disk'
    },
    resetButton: {
      type: String,
      default: 'Start over'
    },
    errorMessages: {
      type: Object,
      default () {
        return {
          [ERROR_UNSUPPORTED_BROWSER]: {
            headline: 'Browser not supported.',
            text: 'This tool currently supports Google Chrome, Microsoft Edge, Firefox, Safari (on desktop), Safari (iOS) and some versions of Google Chrome (Android)'
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
    },
    statsMessages: {
      type: Object,
      default () {
        return {
          [ERROR]: {
            error: true,
            styleType: null,
            headline: 'Sorry',
            text: 'Your device is not supported.',
            foot: ''
          },
          [INITIALIZE]: {
            fade: true,
            styleType: null,
            headline: 'Initializing',
            text: null
          },
          [LOADING]: {
            fade: true,
            styleType: null,
            headline: 'Loading',
            text: null
          },
          [CONVERSION_START]: {
            styleType: 'upload-modifier-sucess',
            headline: 'Success!',
            text: 'Video conversion started.'
          },
          [CONVERSION_COMPLETE]: {
            fade: true,
            headline: 'Starting',
            text: null
          }
        };
      }
    }
  },

  data () {
    return {
      stats: this.resetStats(),
      showInfo: false
    };
  },

  computed: {
    styleClasses () {
      return {
        'js--state-initialize': this.stats && this.stats.info === INITIALIZE,
        'js--state-loading': this.stats && this.stats.info === LOADING,
        'js--state-conversion-start': this.stats && this.stats.info === CONVERSION_START,
        'js--state-conversion-complete': this.stats && !this.stats.blob && this.stats.info === CONVERSION_COMPLETE,
        'js--state-complete': this.stats.blob
      };
    },
    message () {
      return this.stats.info && Object.assign({
        foot: this.statsMessages[this.stats.info].foot || this.info
      }, this.statsMessages[this.stats.info]);
    }
  },

  watch: {
    'stats.info' (info) {
      this.onChangeInfo(info);
    }
  },

  methods: {

    onChangeInfo (info) {
      switch (info) {
        case INITIALIZE:
          this.showInfo = true;
          break;
        case CONVERSION_COMPLETE:
          this.showInfo = false;
          break;
      }
      this.$emit('info', info);
    },

    onClickRetry () {
      this.stats = this.resetStats();
      this.$emit('reset');
    },

    resetStats (error) {
      return {
        blob: null,
        info: null,
        error,
        progress: 0,
        upload: null,
        video: null
      };
    },

    async onFilesChange ({ file, target }) {
      const stats = this.stats = this.resetStats();
      stats.upload = file;
      stats.video = target;
      const updateStats = await this.observeConversion((new FFMPEGWorker()).run(file), stats);
      this.$emit('ready', { id: this.id, stats: updateStats });
    },

    observeConversion (observers, stats) {
      observers.start.subscribe((e) => { console.log(e); });
      observers.progress.subscribe((progress) => { stats.progress = progress * 100; });
      observers.info.subscribe((info) => { stats.info = info; });
      observers.error.subscribe((error) => {
        this.stats = this.resetStats(error);
      });
      return new Promise((resolve) => {
        observers.done.subscribe((blob) => {
          stats.blob = blob;
          resolve(stats);
        });
      });
    }
  }
};
</script>

<style lang="postcss" scoped>
.molecule-upload-modifier {
  position: relative;

  & .upload-modifier__container > div {
    overflow: hidden;
    border-radius: calc(20 / 320 * 100vw);

    @media (--xs) {
      border-radius: 20px;
    }
  }

  & .upload-modifier__container__inner,
  & .upload-modifier__container__inner::before {
    overflow: hidden;
    border-radius: calc(10 / 320 * 100vw);

    @media (--xs) {
      border-radius: 10px;
    }
  }

  & .upload-modifier__container__inner {
    color: var(--color-tertiary);
    will-change: transform;
  }

  &:not(.js--state-complete) {
    & .upload-modifier__container__inner {
      &::before {
        position: absolute;
        top: 0;
        left: 0;
        display: block;
        width: 100%;
        height: 100%;
        content: "";
        background-color: var(--color-secondary);
      }
    }
  }

  & .upload-modifier__upload,
  & .upload-modifier__message {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  & .upload-modifier__message {
    height: 100%;

    & > div {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
    }
  }

  & .upload-modifier__container {
    lost-offset: 1/12 0 0;
    lost-column: 10/12 0 0;

    @media (--xs) {
      lost-offset: 2/12;
      lost-column: 8/12;
    }

    @media (--sm) {
      lost-offset: 2/12;
      lost-column: 8/12;
    }

    @media (--md) {
      lost-offset: 3/12;
      lost-column: 6/12;
    }

    position: relative;

    &::before {
      display: block;
      padding-top: 100%;
      content: "";
    }

    & > div {
      & > div {
        position: relative;
        height: 100%;
      }

      position: absolute;
      top: 0;
      left: 0;
      box-sizing: border-box;
      width: 100%;
      height: 100%;
      padding: calc(12 / 320 * 100vw);
      background-color: var(--color-tertiary);
      border: 2px solid var(--color-primary);

      @media (--xs) {
        padding: 12px;
      }

    }
  }

  & .upload-modifier__progress {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  & .upload-modifier__preview {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  & .upload-modifier__complete {
    display: flex;
    flex-direction: column;
    align-items: center;
    lost-column: 6/12;
    lost-offset: 3/12;
    margin-top: calc(40 / 320 * 100vw);

    @media (--xs) {
      margin-top: 30px;
    }

    @media (--sm) {
      margin-top: 50px;
    }

    & > * {
      display: block;
      margin: calc(5 / 320 * 100vw) 0;

      @media (--xs) {
        margin: 5px 0;
      }

      @media (--sm) {
        margin: 10px 0;
      }

    }
  }

  & .upload-modifier__info {
    position: absolute;
    right: 0;
    bottom: calc(22 / 320 * 100vw);
    left: 0;
    padding: 0 calc(12 / 320 * 100vw);
    font-size: calc(11 / 320 * 100vw);
    color: var(--color-tertiary);
    text-align: center;

    @media (--xs) {
      bottom: 10px;
      padding: 0 15px;
      font-size: 11px;
    }
  }

}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

</style>
