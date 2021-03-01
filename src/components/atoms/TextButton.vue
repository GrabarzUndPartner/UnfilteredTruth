<template>
  <button v-font="$getFont('Roboto', 700)" class="atom-text-button" v-on="$listeners">
    {{ label }}
  </button>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: 'Button Label'
    }
  }
};
</script>

<style lang="postcss">
.atom-text-button {
  padding: calc(10 / 320 * 100vw);
  font-size: calc(14 / 320 * 100vw);
  line-height: calc(21 / 14 * 1em);
  color: var(--color-primary);
  text-align: center;
  cursor: pointer;
  background: transparent;
  border: none;
  outline: none;
  transition: color 0.2s linear;
  appearance: none;

  @media (--xs) {
    padding: 10px;
    font-size: 14px;
  }

  @media (--sm) {
    padding: 13px;
    font-size: 18px;
  }

}
</style>
