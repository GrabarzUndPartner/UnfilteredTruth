<template>
  <div v-font="$getFont('Alfa Slab One')" class="atoms-text-ticker">
    <div>
      <span>&nbsp;{{ content }}</span><span>&nbsp;{{ content }}</span><span>&nbsp;{{ content }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    content: {
      type: String,
      default: 'Ticker Text Ticker Text Ticker Text Ticker Text Ticker Text'
    }
  }
};
</script>

<style lang="postcss" scoped>
.atoms-text-ticker {
  width: 100%;
  overflow: hidden;
  will-change: transform;

  & > div {
    width: max-content;
    font-size: 0;
    white-space: nowrap;
    animation-name: tickerAnimation;
    animation-duration: 16s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    will-change: transform;
  }

  & span {
    display: inline-block;
    font-size: calc(22 / 320 * 100vw);
    white-space: nowrap;

    @media (--xs) {
      font-size: 22px;
    }

    @media (--sm) {
      font-size: 32px;
    }
  }

}

@keyframes tickerAnimation {
  0% {
    transform: translateX(0%);
  }

  100% {
    transform: translateX(calc(-100% / 3));
  }
}

</style>
