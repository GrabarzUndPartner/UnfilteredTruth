<template>
  <div class="page-background">
    <span v-for="(item, index) in items" :key="index"><span :class="`ball-${index + 1}`" /></span>
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
.page-background {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;

  & > span {
    position: absolute;
    top: 50%;
    left: 50%;
    width: calc(80 / 320 * 100vw);
    height: calc(80 / 320 * 100vw);
    transform: translate(-50%, -50%);

    @media (--xs) {
      width: 80px;
      height: 80px;

    }

    @media (--sm) {
      width: 120px;
      height: 120px;
    }

    @media (--md) {
      width: 160px;
      height: 160px;

    }

    @media (--lg) {
      width: 200px;
      height: 200px;

    }

    & > span {
      position: relative;
      display: block;
      width: 100%;
      height: 100%;
      background: var(--color-primary);
      filter: drop-shadow(20px 20px 6px var(--color-primary));
      border-radius: 50%;
      transition: transform 0.2s ease-in;
    }
  }

  & .ball-1 {
    background: var(--color-primary);
    filter: drop-shadow(-20px 20px 6px var(--color-primary));
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
    background: var(--color-primary);
    filter: drop-shadow(20px 20px 6px var(--color-primary));
    transform: translate(-270%, 240%) scale(2);

    @media (--sm) {
      transform: translate(-350%, 180%) scale(1.25);
    }
  }

  & .ball-3 {
    background: var(--color-primary);
    filter: drop-shadow(-20px 20px 6px var(--color-primary));
    transform: translate(250%, 332%) scale(2);

    @media (--sm) {
      transform: translate(350%, 60%) scale(1.25);
    }
  }

  & .ball-4 {
    display: none;
    background: var(--color-secondary);
    filter: drop-shadow(20px -20px 6px var(--color-secondary));

    @media (--sm) {
      display: block;
      transform: translate(-310%, 370%) scale(0.65);
    }
  }

}

</style>
