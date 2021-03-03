<template>
  <div class="molecule-audio-check">
    <span class="audio-check__close" @click="onClickClose">
      <svg-icon-close />
    </span>
    <rich-text class="audio-check__content" style-type="audio-check">
      <h2>{{ headline }}</h2>
      <div v-if="!$isDeviceIos()" class="audio-check__content__before">
        <p>{{ before }}</p>
        <wavesurfer :video="stats.video" :height="waveHeight" />
      </div>
      <div class="audio-check__content__after">
        <p>{{ after }}</p>
        <wavesurfer :video="createVideoElement(stats.blob)" :height="waveHeight" />
      </div>
    </rich-text>
  </div>
</template>

<script>
import Wavesurfer from '@/components/molecules/Wavesurfer';
import SvgIconClose from '@/assets/svg/icons/close.svg?vue-template';
import RichText from '../atoms/RichText.vue';

export default {
  components: { Wavesurfer, SvgIconClose, RichText },
  props: {
    headline: {
      type: String,
      default: 'Advanced Audio Check'
    },
    before: {
      type: String,
      default: 'Before conversion'
    },
    after: {
      type: String,
      default: 'After conversion'
    },
    stats: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      waveHeight: 100
    };
  },
  mounted () {
    this.waveHeight = this.getWaveHeight();
  },

  methods: {
    // eslint-disable-next-line complexity
    getWaveHeight () {
      if (this.$isDeviceIos()) {
        if (global.matchMedia('(min-width: 992px)').matches) {
          return 200;
        } else if (global.matchMedia('(min-width: 768px)').matches) {
          return 220;
        } else if (global.matchMedia('(min-width: 576px)').matches) {
          return 200;
        } else {
          return (120 / 320 * window.innerWidth);
        }
      } else if (global.matchMedia('(min-width: 1200px)').matches) {
        return 120;
      } else if (global.matchMedia('(min-width: 992px)').matches) {
        return 70;
      } else if (global.matchMedia('(min-width: 768px)').matches) {
        return 80;
      } else if (global.matchMedia('(min-width: 576px)').matches) {
        return 80;
      } else {
        return (40 / 320 * window.innerWidth);
      }
    },
    onClickClose (e) {
      this.$emit('close', e);
    },
    createVideoElement (blob) {
      const video = global.document.createElement('video');
      video.src = blob;
      return video;
    }
  }
};

</script>

<style lang="postcss">
.molecule-audio-check {
  color: var(--color-primary);
  background: var(--color-tertiary);

  & .audio-check__content__after {
    margin-top: calc(20 / 320 * 100vw);

    @media (--xs) {
      margin-top: 20px;
    }

    @media (--sm) {
      margin-top: 20px;
    }

    @media (--md) {
      margin-top: 20px;
    }
  }

  & .audio-check__content__before + .audio-check__content__after {
    margin-top: 0;
  }

  & .audio-check__content {
    padding: 0 calc(15 / 320 * 100vw);
    padding-top: calc(55 / 320 * 100vw);

    @media (--xs) {
      padding: 15px;
      padding-top: 63px;
    }

    @media (--sm) {
      padding: 30px;
      padding-top: 80px;
    }

    @media (--md) {
      padding: 30px;
      padding-top: 90px;
    }

    @media (--lg) {
      padding-top: 110px;
    }
  }

  & .audio-check__close {
    position: absolute;
    top: calc(11 / 320 * 100vw);
    right: calc(13 / 320 * 100vw);
    width: calc(18 / 320 * 100vw);
    height: calc(18 / 320 * 100vw);
    padding: calc(10 / 320 * 100vw);
    cursor: pointer;
    fill: var(--color-primary);

    @media (--xs) {
      top: 11px;
      right: 13px;
      width: 18px;
      height: 18px;
      padding: 10px;
    }

    @media (--sm) {
      top: 18px;
      right: 23px;
      width: 30px;
      height: 30px;
      padding: 15px;
    }

    @media (--md) {
      top: -1px;
      right: 5px;
      width: 40px;
      height: 40px;
      padding: 30px;
    }
  }
}
</style>
