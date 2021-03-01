<template>
  <div class="molecule-audio-check">
    <span class="audio-check__close" @click="onClickClose">
      <svg-icon-close />
    </span>
    <rich-text class="audio-check__content" style-type="audio-check">
      <h3>{{ headline }}</h3>
      <p>{{ before }}</p>
      <wavesurfer :video="stats.video" />
      <p>{{ after }}</p>
      <wavesurfer :video="createVideoElement(stats.blob)" />
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

  methods: {
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
