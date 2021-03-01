<template>
  <div class="layout">
    <grid />
    <!-- <page-background /> -->
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
    PageBackground: () => import('@/components/page/Background'),
    PageFooter: () => import('@/components/page/Footer'),
    PageTextLayer: () => import('@/components/page/TextLayer')
  },
  components: {
    Grid
  },

  data () {
    return {
      layerControl,
      disclaimerContent: '<h2>Disclaimer</h2><h3>What this tool does</h3><p>This tool changes your video as carefully as possible. The audio information is hidden in an infrasound frequency, then pitched a little to get less easily recognized by copyright filters.&nbsp;</p><h3>How it processes your video</h3><p>Social media copyright filters compare your content against a database of copyrighted media for similar patterns. By modifying the waveform, we change the audio patterns with minimal impact to the sound you hear.&nbsp;</p><h3>What this tool can&rsquo;t do</h3><p>It cannot guarantee 100% protection against copyright filters. Moreover, the platform&rsquo;s filter might learn to get better at recognizing modifications.</p><h3>Please consider before uploading</h3><p>Even if you hide copyrighted material, it remains copyrighted. Please, be aware of local legislation and the social media platform&rsquo;s terms of use.&nbsp;<br />This tool is made to share video documents you created.&nbsp;<br />It is not allowed to modify copyrighted media for other purposes.</p>',
      privacyPromiseContent: '<h2>Privacy promise</h2><h3>No trackers,&nbsp;no cookies.</h3><p>We don&rsquo;t want you to disclose more information than needed. ?Consequently, this page doesn&rsquo;t track your use or behaviour.</p><h3>Video data is processed in you browser</h3><p>Your video documentation should be confident as long as possible. No video data is sent to external servers. Everything is processed on your computer.</p><h3>Check the code, it&rsquo;s open source</h3><p>You don&rsquo;t have to trust the code. You can control it. The source code for this tool is published under MIT License. Visit github for more details.</p><h3>Feel free to improve</h3><p>This tool is a first quick take on the problem. Do you have a better, more reliable solution? We are happy if you improve and submit the code.&nbsp;</p><p>&nbsp;</p>'
    };
  },

  head () {
    const seo = this.$nuxtI18nSeo();
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
  margin-left: calc(100vw - 100%);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

html[data-prevent-scrolling="true"] {
  & body {
    overflow: hidden;
  }
}

.layout {
  position: relative;
}

main {
  & > div > * {
    margin: calc(40 / 320 * 100vw) 0;

    @media (--xs) {
      margin: 40px 0;
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

