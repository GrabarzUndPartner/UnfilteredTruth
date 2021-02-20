<template>
  <svg
    :viewBox="viewBox"
  >
    <circle
      stroke="white"
      fill="transparent"
      :stroke-dasharray="circumference + ' ' + circumference"
      :style="{ strokeDashoffset }"
      :stroke-width="stroke"
      :r="normalizedRadius"
      :cx="radius"
      :cy="radius"
    />
  </svg>
</template>

<script>
export default {
  props: {
    radius: {
      type: Number,
      default: 1
    },
    progress: {
      type: Number,
      default: 0
    },
    stroke: {
      type: Number,
      default: 1
    }
  },

  data () {
    const normalizedRadius = this.radius - this.stroke * 2;
    const circumference = normalizedRadius * 2 * Math.PI;
    return { normalizedRadius, circumference };
  },

  computed: {
    viewBox () {
      return `0 0 ${this.radius * 2} ${this.radius * 2}`;
    },
    strokeDashoffset () {
      return this.circumference - this.progress / 100 * this.circumference;
    }
  }
};
</script>

<style lang="postcss" scoped>
svg {
  background-color: black;
}

circle {
  transition: stroke-dashoffset 0.35s;
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
}
</style>
