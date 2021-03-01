<template>
  <div class="page-background">
    <span v-for="(item, index) in items" :key="index"><span :class="`ball-${index}`" /></span>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default () {
        return Array(3).fill({});
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
  overflow: hidden;

  & > span {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 200px;
    height: 200px;
    transform: translate(-50%, -50%);

    & > span {
      position: relative;
      display: block;
      width: 100%;
      height: 100%;
      background: var(--color-primary);
      filter: drop-shadow(20px 20px 6px var(--color-primary));
      border-radius: 50%;
    }
  }

  & .ball-1 {
    transform: translate(150%, -150%) scale(0.5);

  }

  & .ball-2 {
    transform: translate(-200%, 100%) scale(1.25);

  }

}
</style>
