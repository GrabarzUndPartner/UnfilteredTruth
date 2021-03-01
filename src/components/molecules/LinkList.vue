<template>
  <ul
    v-font="$getFont('Roboto', 700, 'normal', {selector: 'a, button'})"
    class="molecule-link-list"
  >
    <slot>
      <li
        v-for="(item) in list"
        :key="item.title"
      >
        <atom-link-to v-bind="item" :url="getUrl(item)">
          {{ item.title }}
        </atom-link-to>
      </li>
    </slot>
  </ul>
</template>

<script>
import AtomLinkTo from '@/components/atoms/LinkTo';

export default {
  components: {
    AtomLinkTo
  },
  props: {
    list: {
      type: Array,
      default () {
        return [];
      }
    }
  },
  methods: {
    getUrl (item) {
      if ('$i18n' in this) {
        // use when nuxtI18n exists
        return this.localePath(item.url);
      } else {
        return item.url;
      }
    }
  }
};
</script>

<style lang="postcss">
.molecule-link-list {
  display: flex;
  padding: 0;
  margin: 0;
  list-style: none;

  & li {
    flex: 0 0 50%;
    text-align: center;
  }

  & a,
  & button {
    padding: 0;
    font-size: calc(12 / 320 * 100vw);
    color: var(--color-primary);
    text-decoration: none;
    cursor: pointer;
    background: none;
    border: none;
    appearance: none;
    transition: filter 0.2s linear;

    @media (--xs) {
      font-size: 12px;
    }

    @media (--sm) {
      font-size: 18px;
    }

    @media (hover: none) {
      &:active {
        filter: blur(3px);
      }
    }

    @media (hover: hover) and (pointer: fine) {
      &:hover {
        filter: blur(3px);
      }
    }
  }

}
</style>
