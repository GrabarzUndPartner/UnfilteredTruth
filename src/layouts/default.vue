<template>
  <div class="layout">
    <main>
      <nuxt />
    </main>
    <page-footer v-bind="footer" />
    <page-text-layer name="imprint" :content="imprintContent" />
    <page-text-layer name="privacy" :content="privacyContent" />
    <page-text-layer name="disclaimer" :content="disclaimerContent" center />
    <page-text-layer name="privacyPromise" :content="privacyPromiseContent" center />
  </div>
</template>

<script>

import layerControl from '@/service/layerControl';
import imprintContent from '@/content/imprint.html';
import privacyContent from '@/content/privacy.html';
import disclaimerContent from '@/content/disclaimer.html';
import privacyPromiseContent from '@/content/privacy-promise.html';

const DATA_ATTR_PREVENT_SCROLLING = 'data-prevent-scrolling';

export default {
  speedkitComponents: {
    PageFooter: () => import('@/components/page/Footer'),
    PageTextLayer: () => import('@/components/page/TextLayer')
  },

  data () {
    return {
      layerControl,

      footer: {
        navigation: [
          {
            layer: 'imprint',
            title: 'Imprint'
          },
          {
            layer: 'privacy',
            title: 'Privacy'
          },
          {
            layer: 'disclaimer',
            title: 'Disclaimer'
          }
        ]
      },

      imprintContent,
      privacyContent,
      disclaimerContent,
      privacyPromiseContent
    };
  },

  head () {
    const seo = (this.$nuxtI18nSeo && this.$nuxtI18nSeo()) || { htmlAttrs: {} };
    seo.htmlAttrs[String(DATA_ATTR_PREVENT_SCROLLING)] = this.preventScrolling;
    return seo;
  },

  computed: {
    preventScrolling () {
      return this.layerControl.layerVisible > 0;
    }
  }

};

</script>

<style lang="postcss">
body {
  margin: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

html[data-prevent-scrolling="true"] {
  & body {
    margin-left: calc(100vw - 100%);
    overflow: hidden;
  }
}

.layout {
  position: relative;
  overflow: hidden;
}

main {
  & > div > * {
    margin: calc(60 / 320 * 100vw) 0;

    @media (--xs) {
      margin: 60px 0;
    }

    &:first-child {
      margin-top: 0;
    }

    /*

    &:last-child {
      margin-bottom: 0;
    } */
  }
}

</style>

