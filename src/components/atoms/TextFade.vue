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
      default: null
    },
    text: {
      type: String,
      default: null
    }
  },
  data () {
    return {
      delay: 0.2,
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
  },
  methods: {
    getCharStyle (index) {
      return {
        'transition-duration': `${this.duration}s`,
        'transition-delay': `${this.delay + index * (this.duration / 2) + 0.35}s`
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
  font-size: 22px;
  color: white;

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
