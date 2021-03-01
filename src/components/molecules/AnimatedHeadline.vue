<template>
  <h1 class="animated-headline">
    <animated-text />
    <subline class="animated-headline__subline" :content="subline" />
  </h1>
</template>

<script>
import AnimatedText from '../atoms/AnimatedText.vue';
import Subline from '../atoms/Subline.vue';
export default {
  components: { Subline, AnimatedText },
  props: {
    headline: {
      type: Array,
      default () {
        return ['#Unfiltered', 'Truth'];
      }
    },
    subline: {
      type: String,
      default: 'A basic tool to protect a basic right.'
    }
  }
};
</script>

<style lang="postcss" scoped>
.animated-headline {
  margin: 0;

  & .animated-headline__subline {
    /* emptyy */
  }
}
</style>
