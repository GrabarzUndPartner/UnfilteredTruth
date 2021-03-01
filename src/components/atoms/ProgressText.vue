<template>
  <div class="atom-progress-text">
    <div v-font="$getFont('Alfa Slab One')">
      <transition name="fade" mode="out-in">
        <span :key="text" class="atom-progress-toggle" :class="{'js--running': running}">
          <span v-for="(char, index) in chars" :key="index" :style="`transition-duration: ${duration}s; transition-delay: ${index * (duration / 2) + 0.35}s;`">{{ char }}</span>
        </span>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: null
    }
  },
  data () {
    return {
      duration: 0.2,
      running: false
    };
  },
  computed: {
    chars () {
      return Array.from(this.text || '').map(char => char === ' ' ? '\xA0' : char);
    }
  },
  mounted () {
    this.running = true;
  }
};
</script>

<style lang="postcss" scoped>
.atom-progress-text {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-size: 22px;
  color: white;
  text-transform: uppercase;
  background-color: var(--color-secondary);

  & > span {
    filter: blur(2px);
  }

  &.js--running {
    & > span {
      filter: blur(0.1px);
      transition: filter 0.2s linear;
    }
  }
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
