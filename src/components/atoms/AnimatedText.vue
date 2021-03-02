<template>
  <div v-font="$getFont('Alfa Slab One')" class="atom-animated-text" :class="styleClasses">
    <span class="animated-text__primary"><span v-html="primary" /></span>
    <span class="animated-text__secondary"><span>{{ secondary }}</span></span>
  </div>
</template>

<script>
export default {
  props: {
    primary: {
      type: String,
      default: '#Unfiltered'
    },
    secondary: {
      type: String,
      default: 'Truth'
    },
    styleType: {
      type: String,
      default: null
    }
  },
  computed: {
    styleClasses () {
      return {
        [`animated-text--${this.styleType}`]: this.styleType
      };
    }
  }
};
</script>

<style lang="postcss" scoped>
.atom-animated-text {
  position: relative;
  color: var(--color-primary);
  text-align: center;

  & span {
    line-height: 1;
  }

  @media (--xs-max) {
    & span {
      display: block;
    }
  }

  & .animated-text__primary,
  & .animated-text__secondary {
    animation-duration: 8s;
    animation-delay: 2s;
    animation-iteration-count: infinite;

    /* animation-name: blur;
    animation-duration: 4s;
    animation-delay: 4s;
    animation-iteration-count: infinite; */

    /* animation-direction: alternate; */
    will-change: filter;

  }

  & .animated-text__primary {
    font-size: calc(41 / 414 * 100vw);
    animation-name: blurA;

    @media (--xs) {
      font-size: 41px;
    }
  }

  & .animated-text__secondary {
    font-size: calc(67 / 414 * 100vw);
    animation-name: blurB;

    @media (--xs) {
      font-size: 67px;
    }
  }

  @media (--sm) {
    &.animated-text--intro {
      & .animated-text__primary {
        & > span {
          position: relative;

          & >>> span {
            position: absolute;
            transform: translateX(-100%);
          }
        }
      }
    }
  }

  @media (--sm) {
    & .animated-text__primary,
    & .animated-text__secondary {
      font-size: 71px;
    }

  }

  @media (--md) {
    & .animated-text__primary,
    & .animated-text__secondary {
      font-size: 71px;
    }

  }
}

@keyframes blurA {
  0% {
    filter: blur(0.1px);
  }

  25% {
    filter: blur(2px);
  }

  50% {
    filter: blur(0.1px);
  }

  75% {
    filter: blur(0.1px);
  }

  100% {
    filter: blur(0.1px);
  }
}

@keyframes blurB {
  0% {
    filter: blur(0.1px);
  }

  25% {
    filter: blur(0.1px);
  }

  50% {
    filter: blur(0.1px);
  }

  75% {
    filter: blur(3px);
  }

  100% {
    filter: blur(0.1px);
  }
}
</style>
