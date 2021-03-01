<template>
  <div v-font="$getFont('Alfa Slab One')" class="atom-animated-text">
    <span class="animated-text__primary"><span>{{ primary }}</span></span>
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
    }
  }
};
</script>

<style lang="postcss" scoped>
.atom-animated-text {
  position: relative;
  color: var(--color-primary);

  & span {
    line-height: 1;
  }

  @media (--xs-max) {
    & span {
      display: block;
    }

    &::before {
      display: block;
      padding-top: calc(3 / 4 * 100%);
      content: "";
    }

    & > * {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
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

    & span {
      transform: translateY(75%);
    }
  }

  @media (--sm) {
    text-align: center;

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
    filter: blur(2px);
  }

  100% {
    filter: blur(0.1px);
  }
}
</style>
