
<template>
  <div class="molecule-upload-modifier" :class="styleClasses">
    <lost-container direction="column">
      <div class="upload-modifier__container">
        <div>
          <div class="upload-modifier__container__inner">
            <molecule-upload v-if="!stats.upload" class="upload-modifier__upload" @files-change="onFilesChange" />

            <transition name="fade" mode="out-in">
              <div v-if="message && !stats.progress" class="upload-modifier__message">
                <transition name="fade" mode="out-in">
                  <info-box :key="String(stats.info)" v-bind="message" />
                </transition>
              </div>

              <info-box v-if="stats.progress" class="upload-modifier__progress" style-type="upload-modifier" :foot="info">
                <atom-progress :progress="stats.progress" />
              </info-box>
            </transition>

            <molecule-video-analyze
              v-if="stats.blob"
              class="upload-modifier__preview"
              :source="stats.upload"
              :destination="stats.blob"
            />
          </div>
        </div>
      </div>
      <div v-if="stats.blob" class="upload-modifier__complete">
        <atom-link-button :url="stats.blob" :download="stats.upload.name" label="Save to disk" />
        <atom-text-button label="Start Over" @click="onClickRetry" />
      </div>
    </lost-container>
  </div>
</template>

<script>/* eslint-disable vue/no-unused-components */
import MoleculeUpload from '@/components/molecules/Upload';
import MoleculeVideoAnalyze from '@/components/molecules/VideoAnalyze';
import AtomInfoBox from '@/components/atoms/InfoBox';
import AtomProgress from '@/components/atoms/Progress';
import AtomRichText from '@/components/atoms/RichText';
// eslint-disable-next-line no-unused-vars
import { CONVERSION_COMPLETE, CONVERSION_START, disguiseFile, INITIALIZE, LOADING } from '@/service/ffmpegVideoConverter';
import LostContainer from '../layouts/LostContainer';
// import { disguiseFile } from '@/service/ffmpeg';

import AtomLinkButton from '../atoms/LinkButton';
import AtomTextButton from '../atoms/TextButton';
import InfoBox from '../atoms/InfoBox';

export default {
  components: {
    LostContainer,
    MoleculeVideoAnalyze,
    MoleculeUpload,
    AtomProgress,
    AtomInfoBox,
    AtomLinkButton,
    AtomTextButton,
    AtomRichText,
    InfoBox
  },

  props: {
    info: {
      type: String,
      default: 'Do not leave your browser or close this tab'
    },
    id: {
      type: String,
      default: null
    }
  },

  data () {
    return {
      stats: this.resetStats(),
      statsMessages: {
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
      },
      showInfo: false
    };
  },

  computed: {
    styleClasses () {
      return {
        'js--state-initialize': this.stats && this.stats.info === INITIALIZE,
        'js--state-loading': this.stats && this.stats.info === LOADING,
        'js--state-conversion-start': this.stats && this.stats.info === CONVERSION_START,
        'js--state-conversion-complete': this.stats && this.stats.info === CONVERSION_COMPLETE
      };
    },
    message () {
      return this.stats.info && Object.assign({
        foot: this.info
      }, this.statsMessages[this.stats.info]);
    }
  },

  watch: {
    'stats.info' (info) {
      this.onStateChange(info);
    }
  },

  methods: {

    onStateChange (state) {
      switch (state) {
        case INITIALIZE:
          this.showInfo = true;
          break;
        case CONVERSION_COMPLETE:
          this.showInfo = false;
          break;
      }
      this.$emit('state', state);
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
        upload: null
      };
    },

    async onFilesChange (file) {
      const stats = this.stats = this.resetStats();
      stats.upload = await file.getObjectUrl();
      const updateStats = await this.observeConversion(await disguiseFile(file), stats);
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

  & .upload-modifier__container__inner,
  & .upload-modifier__container > div,
  & .upload-modifier__upload,
  & .upload-modifier__message,
  & .upload-modifier__progress {
    overflow: hidden;
    border-radius: calc(20 / 320 * 100vw);

    @media (--xs) {
      border-radius: 20px;
    }
  }

  & .upload-modifier__container__inner {
    color: var(--color-tertiary);
    background-color: var(--color-secondary);

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

    @media (--sm) {
      lost-offset: 2/12;
      lost-column: 8/12;
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
        background: var(--color-secondary);

        & > div {
          position: relative;
          height: 100%;
        }
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
    width: 100%;
    height: 100%;
    transform: translateY(-100%);
    object-fit: cover;
  }

  & .upload-modifier__complete {
    display: flex;
    flex-direction: column;
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
