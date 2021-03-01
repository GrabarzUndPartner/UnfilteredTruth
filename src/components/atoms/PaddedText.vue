<template>
  <div v-font="$getFont('Roboto', 400, 'italic')" class="atom-padded-text">
    <span>
      <slot>{{ content }}</slot>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    content: {
      type: String,
      default: 'Padded Text'
    }
  }
};
</script>

<style lang="postcss" scoped>
.atom-padded-text {
  font-size: 0;
  line-height: 1.4;
  text-align: center;

  & > span {
    display: inline;
    padding: 0;
    padding-right: 0;
    padding-left: 0;
    font-size: calc(22 / 320 * 100vw);
    color: var(--color-tertiary);
    white-space: pre-wrap;
    background: var(--color-secondary);
    box-shadow:
      calc(10 / 320 * 100vw) 0 0 var(--color-secondary),
      calc(-10 / 320 * 100vw) 0 0 var(--color-secondary);
    box-decoration-break: clone;

    @media (--xs) {
      font-size: 22px;
      box-shadow:
        calc(10 / 22 * 1em) 0 0 var(--color-secondary),
        calc(-10 / 22 * 1em) 0 0 var(--color-secondary);
    }

    @media (--sm) {
      font-size: 32px;

    }
  }

}
</style>
