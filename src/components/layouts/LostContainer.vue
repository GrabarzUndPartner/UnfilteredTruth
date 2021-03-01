<template>
  <component
    :is="tag"
    class="layouts-lost-container"
    :class="styleClasses"
  >
    <div class="lost-flex-container">
      <slot />
    </div>
  </component>
</template>

<script>

export default {
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    direction: {
      type: String,
      default: 'row'
    },

    visible: {
      type: Boolean,
      default () {
        return !!process.browser;
      }
    }
  },

  computed: {
    styleClasses () {
      return { 'lost-container--direction-column': this.direction === 'column' };
    }
  }
};

</script>

<style lang="postcss">
.layouts-lost-container {
  display: block;

  & .lost-flex-container {
    display: flex;

    @media (--xs) {
      lost-center: 540px;
    }

    @media (--sm) {
      lost-center: 720px;
    }

    @media (--md) {
      lost-center: 960px;
    }

    @media (--lg) {
      lost-center: 1140px;
    }
  }

  &.lost-container--direction-column {
    & .lost-flex-container {
      flex-direction: column;
    }
  }

}
</style>
