<template>
  <div class="atom-progress">
    <div v-font="$getFont('Alfa Slab One')">
      <svg :viewBox="viewBox">
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
      <span>{{ percentage }}%</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    radius: {
      type: Number,
      default: 70
    },
    progress: {
      type: Number,
      default: 0
    },
    stroke: {
      type: Number,
      default: 6
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
    },

    percentage () {
      return Math.round(this.progress);
    }
  }
};
</script>

<style lang="postcss" scoped>
.atom-progress {
  position: relative;
  background-color: black;

  & > div {
    height: 100%;
  }

  & svg {
    position: absolute;
    top: 50%;
    left: 50%;
    width: calc(160 / 320 * 100vw);
    height: inherit;
    height: calc(160 / 320 * 100vw);
    transform: translate(-50%, -50%);

    @media (--xs) {
      width: 160px;
      height: 160px;
    }

    @media (--md) {
      width: 200px;
      height: 200px;
    }
  }

  & circle {
    stroke: var(--color-primary);
    transition: stroke-dashoffset 0.35s;
    transform: rotate(-90deg);
    transform-origin: 50% 50%;
  }

  & span {
    position: absolute;
    top: 50%;
    left: 50%;
    font-size: calc(22 / 320 * 100vw);
    color: var(--color-tertiary);
    transform: translate(-50%, -50%);

    @media (--xs) {
      font-size: 22px;
    }

    @media (--sm) {
      font-size: 32px;
    }

  }
}

</style>
