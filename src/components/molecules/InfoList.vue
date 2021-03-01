<template>
  <div class="molecule-info-list">
    <info-box v-for="(item, index) in items" :key="index" v-bind="item" />
  </div>
</template>

<script>
import InfoBox from '@/components/atoms/InfoBox';
export default {
  components: {
    InfoBox
  },
  props: {
    items: {
      type: Array,
      default () {
        return [
          {
            headline: 'Headline 1',
            text: 'Text 1 Text 1 Text 1'
          },
          {
            headline: 'Headline 2',
            text: 'Text 2 Text 2 Text 2'
          }
        ];
      }
    }
  }
};
</script>

<style lang="postcss" scoped>
.molecule-info-list {
  & > div {
    margin: calc(30 / 320 * 100vw) 0;

    &:first-child {
      margin-top: 0;
    }

    &:last-child {
      margin-bottom: 0;
    }

    @media (--xs) {
      margin: 30px 0;
    }

    @media (--sm) {
      margin: 30px 0;
    }
  }
}
</style>
