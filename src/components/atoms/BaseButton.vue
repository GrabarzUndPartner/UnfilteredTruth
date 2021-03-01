<template>
  <button v-font="$getFont('Roboto', 700)" class="atom-base-button" v-on="$listeners">
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
.atom-base-button {
  width: 100%;
  max-width: calc(210 / 320 * 100vw);
  padding: calc(10 / 320 * 100vw);
  font-size: calc(14 / 320 * 100vw);
  line-height: calc(21 / 14 * 1em);
  color: var(--color-primary);
  cursor: pointer;
  background: var(--color-tertiary);
  border: solid var(--color-secondary) 1px;
  outline: none;
  transition: background 0.2s linear, color 0.2s linear;
  appearance: none;

  @media (--xs) {
    max-width: 210px;
    padding: 10px;
    font-size: 14px;
  }

  @media (--sm) {
    padding: 13px;
    font-size: 18px;
  }

  @media (hover: none) {
    &:active {
      color: var(--color-tertiary);
      background: var(--color-primary);
    }
  }

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      color: var(--color-tertiary);
      background: var(--color-primary);
    }
  }

}
</style>
