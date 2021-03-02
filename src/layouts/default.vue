<template>
  <div class="layout">
    <grid />
    <main>
      <nuxt />
    </main>
    <page-footer v-bind="footer" />
    <page-text-layer name="imprint" :content="imprintContent" />
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

      footer: {
        navigation: [
          {
            layer: 'disclaimer',
            title: 'Disclaimer'
          },
          {
            layer: 'imprint',
            title: 'Imprint'
          }
        ]
      },

      // eslint-disable-next-line no-secrets/no-secrets
      imprintContent: '<h2>Imprint</h2><p><strong>Name and Address</strong></p><p>Grabarz &amp; Partner Werbeagentur GmbH<br />Schaartor 1 // 20459 Hamburg<br /><br />Phone: +49 40 376 41 - 0<br />Fax: +49 40 376 41 - 400</p><p>info@grabarzundpartner.de</p><p><strong>Management directors<br /></strong>Daniel Dolezyk, Felix Fenz, Julica Hauke, Ralf Heuel, Stefanie Kuhnhen-Stein, Dirk Lanio, Reinhard Patzschke</p><p><strong>Registred Office <br /></strong>Hamburg</p><p><strong>Registrar of companies<br /></strong>Hamburg, HRB 52097</p><p><strong>VAT registration number <br /></strong>DE 154231979</p><p><strong>Liable according to &sect;55 subparagraph 2 RSTV<br /></strong>Ralf Heuel</p><h3>Exclusion of liability.</h3><h4>1. Content.</h4><p>Grabarz &amp; Partner Werbeagentur GmbH does not guarantee the timeliness, accuracy completeness or quality of the information provided on its website. Any liability of Grabarz &amp; Partner Werbeagentur GmbH in respect of material and immaterial damage caused by the use or non-use of the information offered or by inaccurate or incomplete information shall be excluded provided that there is no culpable intent or gross negligence on the part of Grabarz &amp; Partner Werbeagentur GmbH.</p><h4>2. Referrals and links.</h4><p>Grabarz &amp; Partner Werbeagentur GmbH provides direct or indirect references (hyperlinks) to third-party websites. Any liability of Grabarz &amp; Partner Werbeagentur GmbH for the content on such third-party websites shall be excluded unless it is proven that Grabarz &amp; Partner Werbeagentur GmbH has had prior knowledge of such content or it was technically possible and reasonable for Grabarz &amp; Partner Werbeagentur GmbH to prevent access to such illegal content.</p><p>Grabarz &amp; Partner Werbeagentur GmbH expressly states that the linked websites had no noticeable illegal content at the time of referencing them. However, Grabarz &amp; Partner Werbeagentur GmbH has no influence whatsoever on the current or future content or design of the linked websites and takes no responsibility therefore, for any alterations to such content or design that were made after the links to those websites were set up. Liability for the use or non-use of any information provided on these websites shall be restricted to the authors of such content. Grabarz &amp; Partner Werbeagentur GmbH is not responsible for the content, availability, correctness or accuracy of the linked sites or links referenced therein. This statement applies to all links and referrals that appear within the company&rsquo;s own internet offering.</p>',
      // eslint-disable-next-line no-secrets/no-secrets
      disclaimerContent: '<h2>Disclaimer</h2><p>This tool changes your video as carefully as possible. The audio information is hidden in an infrasound frequency (as outlined by <a href="https://uniontownlabs.org/notebook/2016/09/18/tricking-instagram-with-infrasound/">Todd Jeremy Treece</a>), then the pitch is changed a little so it is less easily recognised by automated upload filters. However, it cannot be 100 per cent guaranteed that the processed video will not be blocked by upload filters and the platform&rsquo;s filtering software might learn to recognise any such modifications.</p><h3>How it processes your video</h3><p>Social media upload filters compare your content against a database of copyrighted media for similar patterns. By modifying the waveform, we change the audio patterns with minimal impact on the sound you hear.</p><h3>Please consider before uploading</h3><p>Even if you hide copyrighted material, it remains copyrighted. Please be aware of applicable legislation and the relevant social media platform&rsquo;s terms of use and only modify content that is not violating or infringing applicable law and/or any third-party rights. This tool is made to share video documents that you have created yourself. You must not, and may not, use this tool to modify, use or distribute copyrighted media under infringement of third-party rights or for any other illegal purposes whatsoever.</p>',
      privacyPromiseContent: '<h2><strong>Privacy promise</strong></h2><h3>No trackers, no cookies</h3><p>We don&rsquo;t want you to disclose more information than necessary. <br />Consequently, this page doesn&rsquo;t track your use or behaviour.</p><h3>Video data is processed in your browser</h3><p>Your video documentation should be confident as long as possible. No video data is sent to external servers. Everything is processed on your computer.</p><h3>Check the code, it&rsquo;s open source</h3><p>You don&rsquo;t have to trust the code. You can control it. The source code for this tool is published under LGPL License. <u>Visit github for more details</u>.</p><h3>Feel free to improve</h3><p>This tool is a first quick take on the problem. Do you have a better, more reliable solution? We are happy if you improve and submit the code.</p>'
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

