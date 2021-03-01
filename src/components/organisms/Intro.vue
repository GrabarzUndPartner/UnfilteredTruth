<template>
  <lost-container tag="h1" class="organisms-intro" direction="column">
    <animated-text class="intro__headline" v-bind="headline" />
    <padded-text class="intro__subline" :content="subline" />
  </lost-container>
</template>

<script>
import LostContainer from '../layouts/LostContainer';
import AnimatedText from '../atoms/AnimatedText';
import PaddedText from '../atoms/PaddedText';

export default {
  components: { LostContainer, AnimatedText, PaddedText },
  props: {
    headline: {
      type: Object,
      default () {
        return {
          primary: '#Unfiltered',
          secondary: 'Truth'
        };
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
.organisms-intro {
  & .intro__headline {
    lost-column: 10/12;
    lost-offset: 1/12;
    margin-top: calc(90 / 320 * 100vw);
    margin-bottom: calc(44 / 320 * 100vw);

    @media (--xs) {
      margin-top: 90px;
      margin-bottom: 44px;
    }

    @media (--sm) {
      lost-column: 12/12;
      lost-offset: 0/12;
      margin-top: 90px;
      margin-bottom: 32px;
    }

    @media (--md) {
      lost-column: 12/12;
      lost-offset: 0/12;
      margin-top: 90px;
      margin-bottom: 32px;
    }

  }

  & .intro__subline {
    lost-column: 8.5/12;
    lost-offset: 1.75/12;

    @media (--xs) {
      lost-column: 5/12;
      lost-offset: 3.5/12;
    }

    @media (--sm) {
      lost-column: 5.5/12;
      lost-offset: 3.25/12;
    }

    @media (--md) {
      lost-column: 4/12;
      lost-offset: 4/12;
    }

    @media (--lg) {
      lost-column: 3.5/12;
      lost-offset: 4.25/12;
    }
  }
}
</style>
