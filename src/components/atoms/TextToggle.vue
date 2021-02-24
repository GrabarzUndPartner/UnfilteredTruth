<template>
  <transition name="fade" mode="out-in">
    <span :key="text">{{ text }}</span>
  </transition>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: null
    }
  }
};
</script>

<style lang="postcss" scoped>
span {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  color: white;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.35s;
}

.fade-enter,
.fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
