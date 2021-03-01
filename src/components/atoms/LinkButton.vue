<template>
  <link-to
    v-font="$getFont('Roboto', 700)"
    :url="url"
    :target="target"
    :download="download"
    :title="label"
    class="atom-link-button"
    v-on="$listeners"
  />
</template>

<script>
import LinkTo from './LinkTo.vue';
export default {
  components: { LinkTo },
  props: {
    label: {
      type: String,
      default: 'Button Label'
    },
    url: {
      type: [
        // Type Object for Route Objects { path: '/page' }
        String, Object
      ],
      default: '#'
    },
    target: {
      type: String,
      default: null
    },
    download: {
      type: String,
      default: null
    }
  }
};
</script>

<style lang="postcss">
.atom-link-button {
  width: 100%;
  max-width: calc(210 / 320 * 100vw);
  padding: calc(10 / 320 * 100vw);
  font-size: calc(14 / 320 * 100vw);
  line-height: calc(21 / 14 * 1em);
  color: var(--color-tertiary);
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  background: var(--color-secondary);
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
      color: var(--color-primary);
      background: var(--color-tertiary);
    }
  }

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      color: var(--color-primary);
      background: var(--color-tertiary);
    }
  }

}
</style>
