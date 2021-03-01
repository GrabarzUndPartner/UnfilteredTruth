<template>
  <div class="atom-video-analyze" :class="styleClasses">
    <video
      ref="video"
      :src="stats.blob"
      :controls="controls"
      playsinline
      v-on="$listeners"
      @play="onPlay"
    />
    <span class="video-analyze__play-button" @click="onClick">
      <svg-icon-upload />
    </span>

    <span class="video-analyze__audio-check-button" @click="onClickAudioCheck">
      <svg-icon-audio-check />
    </span>
    <transition name="layer-toggle">
      <molecule-audio-check
        v-if="showAudioCheck"
        class="video-analyze__audio-check"
        :stats="stats"
        @close="showAudioCheck = false"
      />
    </transition>
  </div>
</template>

<script>

import SvgIconUpload from '@/assets/svg/icons/play.svg?vue-template';
import SvgIconAudioCheck from '@/assets/svg/icons/audio-check.svg?vue-template';
import MoleculeAudioCheck from '@/components/molecules/AudioCheck';

export default {
  components: { SvgIconUpload, SvgIconAudioCheck, MoleculeAudioCheck },
  props: {

    stats: {
      type: Object,
      required: true
    }

  },
  data () {
    return {
      playing: false,
      showAudioCheck: false,

      audioCheck: {
        headline: 'Advanced Audio Check',
        before: 'Before conversion',
        after: 'After conversion'
      }
    };
  },
  computed: {
    controls () {
      return this.playing;
    },
    styleClasses () {
      return {
        'js--playing': this.playing,
        'js--show-audio-check': this.showAudioCheck
      };
    }
  },
  methods: {
    onClick () {
      this.$refs.video.play();
    },
    onClickAudioCheck () {
      this.showAudioCheck = true;
    },
    onPlay () {
      this.playing = true;
    }
  }
};
</script>

<style lang="postcss">
.atom-video-analyze {
  & video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    outline: none;
    transition: opacity 0.3s linear;
  }

  & .video-analyze__audio-check-button {
    position: absolute;
    top: 0;
    right: 0;
    width: calc(21 / 320 * 100vw);
    height: calc(17 / 22 * ((21 / 320 * 100vw)));
    padding: calc(10 / 320 * 100vw);
    cursor: pointer;
    fill: var(--color-tertiary);

    @media (--xs) {
      width: 21px;
      height: calc(17 / 22 * 21px);
      padding: 10px;
    }

    @media (--sm) {
      width: 45px;
      height: calc(17 / 22 * 45px);
      padding: 20px;
    }

  }

  & .video-analyze__play-button,
  & video {
    overflow: hidden;
    border-radius: calc(20 / 320 * 100vw);

    @media (--xs) {
      border-radius: 20px;
    }
  }

  &.js--show-audio-check {
    & video {
      opacity: 0;
    }
  }

  & .video-analyze__audio-check {
    position: absolute;
    top: -12px;
    left: -12px;

    /* display: none; */
    width: calc(100% + 24px);
    height: calc(100% + 24px);
  }

  & .video-analyze__play-button {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
    background: rgb(0 0 0 / 30%);

    & > * {
      position: absolute;
      top: 50%;
      left: 50%;
      width: calc(31 / 320 * 100vw);
      height: calc((63 / 50) * (31 / 320 * 100vw));
      fill: var(--color-tertiary);
      transform: translate(-50%, -50%);

      @media (--xs) {
        width: 31px;
        height: calc(63 / 50 * 31px);
      }

      @media (--sm) {
        width: 48px;
        height: calc(63 / 50 * 48px);
      }
    }
  }

  &.js--playing {
    & .video-analyze__play-button {
      opacity: 0;
    }
  }

}

.layer-toggle-enter-active,
.layer-toggle-leave-active {
  transition: transform 0.15s ease-out, opacity 0.15s linear;
}

.layer-toggle-enter,
.layer-toggle-leave-to {
  opacity: 0;
  transition: transform 0.15s ease-in, opacity 0.15s linear;
  transform: scale(0.6);
}
</style>
