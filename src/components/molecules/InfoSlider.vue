<template>
  <div class="molecule-info-slider">
    <transition name="fade" mode="out-in">
      <info-box :key="index" v-bind="item" style-type="info-slider" />
    </transition>
  </div>
</template>

<script>
import InfoBox from '@/components/atoms/InfoBox';

export default {
  components: { InfoBox },

  props: {
    items: {
      type: Array,
      default () {
        return [
          {
            headline: 'Headline 1',
            text: 'Text 1 Text 1 Text 1'
          },
          {
            headline: 'Headline 2',
            text: 'Text 2 Text 2 Text 2'
          }
        ];
      }
    }
  },

  data () {
    return {
      index: 0
    };
  },

  computed: {
    item () {
      return this.items[Number(this.index) % this.items.length];
    }
  },

  mounted () {
    // eslint-disable-next-line scanjs-rules/call_setInterval
    global.setInterval(() => {
      this.index++;
    }, 5000);
  }
};
</script>

<style lang="postcss" scoped>

.molecule-info-slider {
  background: var(--color-secondary);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
