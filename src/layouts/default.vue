<template>
  <div class="layout">
    <grid />
    <main>
      <nuxt />
    </main>
    <page-footer />
    <page-text-layer name="disclaimer" :content="disclaimerContent" />
    <page-text-layer name="privacyPromise" :content="privacyPromiseContent" />
  </div>
</template>

<script>

import Grid from '@/components/utils/Grid';
import layerControl from '@/service/layerControl';

const DATA_ATTR_PREVENT_SCROLLING = 'data-prevent-scrolling';

export default {
  speedkitComponents: {
    PageFooter: () => import('@/components/page/Footer'),
    PageTextLayer: () => import('@/components/page/TextLayer')
  },
  components: {
    Grid
  },

  data () {
    return {
      layerControl,
      disclaimerContent: '<h2>Disclaimer</h2><p>This tool changes your video as carefully as possible. The audio information is hidden in an infrasound frequency, then the pitch is changed a little so it is less easily recognised by automated upload filters. However, it cannot be 100 per cent guaranteed that the processed video will not be blocked by upload filters and the platform&rsquo;s filtering software might learn to recognise any such modifications.</p><h3>How it processes your video</h3><p>Social media upload filters compare your content against a database of copyrighted media for similar patterns. By modifying the waveform, we change the audio patterns with minimal impact on the sound you hear.</p><h3>Please consider before uploading</h3><p>Even if you hide copyrighted material, it remains copyrighted. Please be aware of applicable legislation and the relevant social media platform&rsquo;s terms of use and only modify content that is not violating or infringing applicable law and/or any third-party rights .</p><p>This tool is made to share video documents that you have created yourself. You must not, and may not, use this tool to modify, use or distribute copyrighted media under infringement of third-party rights or for any other illegal purposes whatsoever.</p>',
      privacyPromiseContent: '<h2>Privacy promise</h2><h3>No trackers,&nbsp;no cookies.</h3><p>We don&rsquo;t want you to disclose more information than needed. ?Consequently, this page doesn&rsquo;t track your use or behaviour.</p><h3>Video data is processed in you browser</h3><p>Your video documentation should be confident as long as possible. No video data is sent to external servers. Everything is processed on your computer.</p><h3>Check the code, it&rsquo;s open source</h3><p>You don&rsquo;t have to trust the code. You can control it. The source code for this tool is published under MIT License. Visit github for more details.</p><h3>Feel free to improve</h3><p>This tool is a first quick take on the problem. Do you have a better, more reliable solution? We are happy if you improve and submit the code.&nbsp;</p><p>&nbsp;</p>'
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

