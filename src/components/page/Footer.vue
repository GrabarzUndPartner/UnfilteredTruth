<template>
  <layout-lost-container
    class="page-footer"
    tag="footer"
  >
    <nav>
      <link-list
        :list="navigation"
      />
    </nav>
  </layout-lost-container>
</template>

<script>
import LayoutLostContainer from '@/components/layouts/LostContainer';
import LinkList from '@/components/molecules/LinkList';

export default {
  components: {
    LayoutLostContainer,
    LinkList
  },
  props: {
    navigation: {
      type: Array,
      default () {
        return [
          {
            layer: 'disclaimer',
            title: 'Disclaimer'
          },
          {
            layer: 'imprint',
            title: 'Imprint'
          }
        ];
      }
    }
  }
};
</script>

<style lang="postcss">
.page-footer {
  padding: 0;
  padding-bottom: calc(40 / 375 * 100%);
  margin: 0;

  @media (--xs) {
    padding: 20px 0;
  }

  @media (--md) {
    padding-top: 25px;
    padding-bottom: 100px;
  }

  background: var(--color-light-grey);

  & nav {
    lost-column: 10/12;
    lost-offset: 1/12;

    @media (--xs) {
      lost-column: 6/12;
      lost-offset: 3/12;
    }
  }

}
</style>
