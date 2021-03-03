<template>
  <div class="layout">
    <grid />
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

      // eslint-disable-next-line no-secrets/no-secrets
      imprintContent: '<h2>Imprint</h2><p><strong>Name and Address</strong><br /><br />Grabarz &amp; Partner Werbeagentur GmbH<br />Schaartor 1 // 20459  Hamburg<br /><br />Phone: +49 40 376 41 -  0<br />Fax: +49 40 376 41 - 400</p><p>info@grabarzundpartner.de</p><p><strong>Management directors</strong><br /><br />Daniel Dolezyk, Felix Fenz, Julica Hauke, Ralf Heuel, Stefanie  Kuhnhen-Stein, Dirk Lanio, Reinhard Patzschke</p><p><strong>Registred Office</strong><br /><br />Hamburg</p><p><strong>Registrar of companies</strong><br /><br />Hamburg, HRB 52097</p><p><strong>VAT registration number</strong><br /><br />DE 154231979</p><p><strong>Liable according to &sect;55 subparagraph 2 RSTV</strong><br /><br />Ralf Heuel</p><h3>Exclusion of liability.</h3><h4>1. Content.</h4><p>Grabarz &amp; Partner Werbeagentur GmbH does not guarantee the timeliness, accuracy completeness or quality of the  information provided on its website. Any liability of Grabarz &amp; Partner Werbeagentur GmbH in respect of material  and immaterial damage caused by the use or non-use of the information offered or by inaccurate or incomplete  information shall be excluded provided that there is no culpable intent or gross negligence on the part of Grabarz  &amp; Partner Werbeagentur GmbH.</p><h4>2. Referrals and links.</h4><p>Grabarz &amp; Partner Werbeagentur GmbH provides direct or indirect references (hyperlinks) to third-party websites.  Any liability of Grabarz &amp; Partner Werbeagentur GmbH for the content on such third-party websites shall be  excluded unless it is proven that Grabarz &amp; Partner Werbeagentur GmbH has had prior knowledge of such content or  it was technically possible and reasonable for Grabarz &amp; Partner Werbeagentur GmbH to prevent access to such  illegal content.</p><p>Grabarz &amp; Partner Werbeagentur GmbH expressly states that the linked websites had no noticeable illegal content  at the time of referencing them. However, Grabarz &amp; Partner Werbeagentur GmbH has no influence whatsoever on the  current or future content or design of the linked websites and takes no responsibility therefore, for any alterations  to such content or design that were made after the links to those websites were set up. Liability for the use or  non-use of any information provided on these websites shall be restricted to the authors of such content. Grabarz  &amp; Partner Werbeagentur GmbH is not responsible for the content, availability, correctness or accuracy of the  linked sites or links referenced therein. This statement applies to all links and referrals that appear within the  company&rsquo;s own internet offering.</p>',
      // eslint-disable-next-line no-secrets/no-secrets
      privacyContent: '<h2>Privacy.</h2><h3>Information regarding data protection</h3><p>The safety and the protection of your data are important to us, Grabarz &amp; Partner Werbeagentur GmbH, Schaartor 1,  20459 Hamburg (hereinafter referred to as &ldquo;<strong>G&amp;P</strong>&rdquo; or  &ldquo;<strong>we</strong>&rdquo;). Therefore, we operate our websites in accordance with the applicable legal  regulations regarding the protection of personal data and data security, in particular the provisions of the General  Data Protection Regulation (EU) 2016/679 (GDPR), the German Federal Data Protection Act (BDSG) and the Telemedia Act  (TMG).</p><p>In this context, we would like to inform you about which data we collect, process and use during the use of our  website, for which purpose and the legal basis on which this is carried out in each case and with whom we may share  it.</p><h3>Scope, responsible position</h3><p>This information regarding data protection applies to the web presence accessible at the domain</p><ul>  <li>unfilteredtruth.cc</li></ul><p>(&ldquo;<strong>website</strong>&rdquo;).</p><p>Responsible as per the General Data Protection Regulation (GDPR) and other national data protection laws and other  data protection regulations is</p><p>Grabarz &amp; Partner Werbeagentur GmbH<br />Schaartor 1 <br />20459 Hamburg<br />Amtsgericht Hamburg, HRB  52097<br />datenschutzbeauftragter@grabarzundpartner.de</p><h3>General information regarding data processing</h3><p>We process your personal data only to the extent necessary for the provision of our offering. In addition, we only  process personal data if you provide us with this data, for example in the context of a registration, by filling out  forms, sending e-mails and inquiries or through other services.</p><p>We will only use the personal data which you have provided for the purposes of contract fulfilment and processing  your requests. The processing and use of your personal data for other purposes, such as consulting, advertising and  market research, only occurs if you have previously agreed to the corresponding use or we are required or entitled to  process the data because of a statutory provision.</p><p>You may withdraw your consent regarding the use of your personal data for the future at any time by sending an e-mail  to the e-mail address specified at the end of this data protection notice.</p><h3>Provision of the website and creation of log files</h3><p>When the website is used for informational purposes only (i.e. without registration), we only collect the personal  data that your browser transfers to our server. When you access the website, we collect the following data which is  technically necessary in order to enable you to visit the website and to ensure the stability and security (the legal  basis is article 6, paragraph 1, sentence 1 of the General Data Protection Regulation):</p><ul>  <li>Websites from which you accessed our website</li>  <li>Date and time of the access</li>  <li>Name of the Internet access provider</li>  <li>Browser type/version and language</li>  <li>The operating system used</li>  <li>Access status/HTTP status code</li>  <li>The quantity of data transferred</li>  <li>Device (PC, tablet PC or smartphone)</li>  <li>Our pages visited including visit time</li>  <li>The last website you visited</li></ul><p>This data is analysed for statistical purposes only. There is no person-based analysis. The temporary storage of your  IP address is necessary to enable your terminal device to access the website. This requires the IP address of the user  to be saved for the duration of the session.</p><h3>Use of the UnfilteredTruth-Tool.</h3><p>Apart from the data that is automatically transferred by your browser software when visiting our website in  accordance with the previous section (Provision of the website and creation of log files), we do not collect or  otherwise process any personal data of any kind whatsoever in connection with your use of the Unfiltered Tool provided  on the website.</p><h3>Data security</h3><p>We utilise appropriate technical and organisational measures to ensure that the data collected within the scope of  the use of the services provided by us is protected against loss, incorrect changes or unauthorised access by third  parties. Our security precautions are continually being revised and improved accordingly in keeping with technological  advances.</p><h3>Your rights</h3><p>To the extent that we process your personal data, you are regarded as an effective person as defined by The GDPR, and  are entitled to the following rights:</p><p><u>Right of access</u></p><p>You can request confirmation from us as to whether we process personal data related to you.</p><p>If this is the case, you can request information from us about the following:</p><p>(a) The purposes for which the personal data is processed;</p><p>(b) The categories of personal data which are processed;</p><p>(c) The recipients or categories of recipients to whom your personal data has been disclosed or will be disclosed;</p><p>(d) The planned duration of the storage of your personal data or, if this specific information is not available, the  criteria for determining the storage duration;</p><p>(e) The existence of a right to correction or deletion of personal data relating to you, the right to limitation of  processing by the responsible body or the right to refuse this processing;</p><p>(f) The existence of a right of complaint to a supervisory authority;</p><p>(g) All available information about the origin of the data if personal information is not provided by yourself but  rather by third parties.</p><p>You have the right to demand information as to whether or not your personal data is transferred to a third country or  an international organisation. In this context, you have the right to request the appropriate guarantees in accordance  with article 46 GDPR with regard to the transmission.</p><p><u>Right to correction</u></p><p>You have the right to correct and/or complete information if your personal data processed by us is incorrect or  incomplete. If this is the case, we will make the correction immediately.</p><p><u>Right to limitation of processing</u></p><p>Under the following conditions, you are entitled to request a restriction of the processing of your personal data:</p><p>(a) if you contest the correctness of your personal data for a period of time that allows us to verify the  correctness;</p><p>(b) the processing is unlawful and you reject the deletion of your personal data and, instead, demand the restriction  of the use of the personal data;</p><p>(c) we no longer require your personal data for the purposes of the processing, yet you still require this data in  order to assert, exercise or defend against legal claims, or</p><p>(d) if you have submitted an objection to the processing in accordance with article 21, paragraph 1 of the GDPR and  it has not yet been decided whether our legitimate reasons as the body responsible outweigh your reasons as the  affected person.</p><p>If the processing of your personal data has been restricted, this &ndash; with the exception of its storage &ndash;  may only be processed with your consent or for the assertion, exercise or defence of legal claims, or to protect the  rights of another natural or legal person or for reasons of substantial public interests of the Union or a Member  State can be processed.</p><p>If the restriction of processing itself has been restricted as a consequence of the above-mentioned requirements, we  will inform you before the restriction is lifted.</p><p><u>Right to deletion</u></p><p>Mandatory deletion</p><p>You are entitled to request that we delete your personal data immediately provided that one of the following reasons  applies:</p><p>(a) Your personal data is no longer necessary for the purposes for which it was collected or processed in any other  way.</p><p>(b) If the processing was based on article 6, paragraph 1 of the GDPR, and you withdraw your consent and there is no  further legal basis for the processing.</p><p>(c) You object to the processing in accordance with article 21, paragraph 1 of the GDPR and there are no superseding,  legitimate reasons for the processing, or you object to the use of your personal data for advertising purposes in  accordance with article 21, paragraph 2 of the GDPR.</p><p>(d) Your personal data has been processed unlawfully.</p><p>(e) The deletion of your personal data is required to fulfil a legal obligation.</p><p>Exceptions</p><p>The right of deletion does not apply provided that the processing is required</p><p>(a) in order to exercise the right to freedom of expression and information;</p><p>(b) in order to fulfil a legal obligation or for the performance of a task carried out in the public&rsquo;s  interest;</p><p>(c) for the assertion, exercise or defence of legal claims.</p><p><u>Right to file a complaint with a supervisory authority</u></p><p>Regardless of other legal remedies, you have the right to file a complaint with a responsible supervisory authority  if you are of the opinion that the processing of your personal data violates the GDPR.</p><h3>Withdrawal of consent</h3><p>To the extent that the processing of personal data is based on your consent in accordance with article 6, paragraph 1  of the GDPR, you may withdraw your consent at any time effective for the future by sending an e-mail to <a    href="mailto:datenschutzbeauftragter@grabarzundpartner.de">datenschutzbeauftragter@grabarzundpartner.de</a>.</p><h3>Contact/Information</h3><p>You can send all inquiries, explanations and questions relating to the usage of the data to our Privacy Officer via  e-mail to</p><p><a    href="mailto:datenschutzbeauftragter@grabarzundpartner.de">datenschutzbeauftragter@grabarzundpartner.de</a><br />or  by regular mail to<br />Grabarz &amp; Partner Werbeagentur GmbH,<br />Schaartor 1, 20459 Hamburg</p>',
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

