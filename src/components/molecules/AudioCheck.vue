<template>
  <div class="molecule-audio-check">
    <span class="audio-check__close" @click="onClickClose">
      <svg-icon-close />
    </span>
    <rich-text class="audio-check__content" style-type="audio-check">
      <h3>{{ headline }}</h3>
      <p>{{ before }}</p>
      <wavesurfer v-if="source" :src="source" />
      <p>{{ after }}</p>
      <wavesurfer v-if="destination" :src="destination" />
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
    source: {
      type: String,
      required: true
    },
    destination: {
      type: String,
      required: true
    }
  },
  methods: {
    onClickClose (e) {
      this.$emit('close', e);
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
    padding-top: calc(37 / 320 * 100vw);

    @media (--xs) {
      padding: 15px;
      padding-top: 37px;
    }

    @media (--xs) {
      padding: 30px;
      padding-top: 60px;
    }

    @media (--md) {
      padding: 30px;
      padding-top: 90px;
    }
  }

  & .audio-check__close {
    position: absolute;
    top: 0;
    right: 0;
    width: calc(18 / 320 * 100vw);
    height: calc(18 / 320 * 100vw);
    padding: calc(20 / 320 * 100vw);
    fill: var(--color-primary);

    @media (--xs) {
      width: 15px;
      height: 15px;
      padding: 10px;
    }

    @media (--sm) {
      width: 30px;
      height: 30px;
      padding: 15px;
    }

    @media (--md) {
      width: 40px;
      height: 40px;
      padding: 30px;
    }
  }
}
</style>
