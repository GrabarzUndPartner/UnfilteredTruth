<template>
  <div class="ball-background">
    <span v-for="(item, index) in items" :key="index"><span :class="`ball-${index + 1}`"><span /></span></span>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default () {
        return Array(4).fill({});
      }
    }
  }
};
</script>

<style lang="postcss" scoped>
.ball-background {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;

  & > span {
    position: absolute;
    top: 50%;
    left: 50%;
    width: calc(80 / 320 * 100vw);
    height: calc(80 / 320 * 100vw);
    margin-top: calc(-40 / 320 * 100vw);
    margin-left: calc(-40 / 320 * 100vw);

    @media (--xs) {
      width: 80px;
      height: 80px;
      margin-top: -40px;
      margin-left: -40px;
    }

    @media (--sm) {
      width: 120px;
      height: 120px;
      margin-top: -60px;
      margin-left: -60px;
    }

    @media (--md) {
      width: 160px;
      height: 160px;
      margin-top: -80px;
      margin-left: -80px;

    }

    @media (--lg) {
      width: 200px;
      height: 200px;
      margin-top: -100px;
      margin-left: -100px;

    }

    & > span {
      position: relative;
      display: block;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      transition: transform 0.2s ease-in;
      will-change: tranform, filter;

      & > span {
        position: relative;
        display: block;
        width: 100%;
        height: 100%;

        /* animation: rotate 10s linear;
        animation-iteration-count: infinite; */

        &::before,
        &::after {
          position: absolute;
          top: 0;
          left: 0;
          display: block;
          width: 100%;
          height: 100%;
          content: "";
          background: red;
          border-radius: 50%;
        }

        &::before {
          top: 20px;
          left: 20px;
          background: yellow;
          filter: blur(5px);
        }
      }

    }
  }

  & .ball-1 {
    & span {
      &::after {
        background: var(--color-primary);
      }

      &::before {
        top: 20px;
        left: -20px;
        background: var(--color-primary);
      }

    }

    transform: translate(120%, -120%) scale(1.2);

    @media (--xs) {
      transform: translate(180%, -180%) scale(1.2);
    }

    @media (--sm) {
      transform: translate(220%, -118%) scale(0.5);
    }

    @media (--md) {
      transform: translate(175%, -118%) scale(0.5);
    }

  }

  & .ball-2 {
    & span {
      &::after {
        background: var(--color-primary);
      }

      &::before {
        top: 20px;
        left: 20px;
        background: var(--color-primary);
      }

    }

    transform: translate(-270%, 240%) scale(2);

    @media (--sm) {
      transform: translate(-350%, 180%) scale(1.25);
    }
  }

  & .ball-3 {
    & span {
      &::after {
        background: var(--color-primary);
      }

      &::before {
        top: 20px;
        left: -20px;
        background: var(--color-primary);
      }
    }

    transform: translate(250%, 332%) scale(2);

    @media (--sm) {
      transform: translate(350%, 60%) scale(1.25);
    }
  }

  & .ball-4 {
    & span {
      &::after {
        background: var(--color-secondary);
      }

      &::before {
        top: -20px;
        left: 20px;
        background: var(--color-secondary);
      }

    }

    display: none;

    @media (--sm) {
      display: block;
      transform: translate(-310%, 370%) scale(0.65);
    }
  }

}

/* @keyframes rotate {
  0% {
    transform: rotateZ(0);
  }

  100% {
    transform: rotateZ(360deg);
  }
} */

</style>
