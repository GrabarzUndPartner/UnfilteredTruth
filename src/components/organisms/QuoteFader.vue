<template>
  <transition name="fade" mode="out-in">
    <div :key="state">
      <h3>{{ message.headline }}</h3>
      <p>{{ message.text }}</p>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default () {
        return [];
      }
    }
  },

  data () {
    return {
      state: 0
    };
  },

  computed: {
    message () {
      return this.list[Number(this.state) % this.list.length];
    }
  },

  mounted () {
    setInterval(() => {
      this.state++;
    }, 5000);
  }
};
</script>

<style lang="postcss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
