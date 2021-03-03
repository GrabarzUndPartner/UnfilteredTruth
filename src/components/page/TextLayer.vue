<template>
  <layer class="organism-text-layer" v-bind="$attrs">
    <github-corner />
    <rich-text :style-type="center ? 'text-layer-center' : 'text-layer'" :content="content" class="text-layer__content" />
  </layer>
</template>

<script>
import Layer from '@/components/layouts/Layer';
import RichText from '@/components/atoms/RichText';
import GithubCorner from '@/components/atoms/GithubCorner';
export default {
  components: {
    Layer,
    RichText,
    GithubCorner
  },
  props: {
    center: {
      type: Boolean,
      default: false
    },
    content: {
      type: String,
      default () {
        return '<p>Lorem Ipsum…</p>';
      }
    }
  }
};
</script>

<style lang="postcss" scoped>
.organism-text-layer {
  & .text-layer__content {
    padding-top: calc(15 / 320 * 100vw);
    padding-bottom: calc(40 / 320 * 100vw);
    word-break: break-word;
    lost-column: 10/12;
    lost-offset: 1/12;

    @media (--xs) {
      padding-top: 70px;
      padding-bottom: 40px;
    }

    @media (--sm) {
      padding-top: 60px;
      padding-bottom: 100px;
      lost-column: 8/12;
      lost-offset: 2/12;
    }
  }
}
</style>
