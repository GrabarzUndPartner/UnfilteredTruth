<template>
  <transition name="fade" mode="out-in">
    <component :is="tag" :key="text" class="atom-text-fade" :class="{'js--running': running}">
      <span v-for="(char, index) in chars" :key="index" :style="getCharStyle(index)">{{ char }}</span>
    </component>
  </transition>
</template>

<script>
export default {
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    text: {
      type: String,
      default: 'Text Fade'
    }
  },
  data () {
    return {
      delay: 0.5,
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
    global.requestAnimationFrame(() => {
      this.running = true;
    });
  },
  methods: {
    getCharStyle (index) {
      return {
        'transition-duration': `${this.duration}s`,
        'transition-delay': `${(this.delay + index * (this.duration / 2) + 0.35).toFixed(2)}s`
      };
    }
  }
};
</script>

<style lang="postcss" scoped>
.atom-text-fade {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-size: calc(22 / 320 * 100vw);

  @media (--xs) {
    font-size: 22px;
  }

  & > span {
    filter: blur(2px);
  }

  &.js--running {
    & > span {
      filter: blur(0);
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
