!function(e){function t(data){for(var t,o,c=data[0],h=data[1],d=data[2],i=0,y=[];i<c.length;i++)o=c[i],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&y.push(n[o][0]),n[o]=0;for(t in h)Object.prototype.hasOwnProperty.call(h,t)&&(e[t]=h[t]);for(f&&f(data);y.length;)y.shift()();return l.push.apply(l,d||[]),r()}function r(){for(var e,i=0;i<l.length;i++){for(var t=l[i],r=!0,o=1;o<t.length;o++){var h=t[o];0!==n[h]&&(r=!1)}r&&(l.splice(i--,1),e=c(c.s=t[0]))}return e}var o={},n={0:0},l=[];function c(t){if(o[t])return o[t].exports;var r=o[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.e=function(e){var t=[],r=n[e];if(0!==r)if(r)t.push(r[2]);else{var o=new Promise((function(t,o){r=n[e]=[t,o]}));t.push(r[2]=o);var l,script=document.createElement("script");script.charset="utf-8",script.timeout=120,c.nc&&script.setAttribute("nonce",c.nc),script.src=function(e){return c.p+""+({2:"pages/index"}[e]||e)+"."+{2:"f475848f28504eeceb6e",4:"ebb64b707549bcedcc3c",5:"8f52759864756e2d8867",6:"74c17e17c3ee2f1de077",7:"ec4373be9c11d770fd51",8:"2e29dc8f7d4a26eeb1fe",9:"6265d2cf9dabc4d5bce1",10:"e4859fbed35eddee28c5",11:"dc38e7d8fc21cfc73045"}[e]+".js"}(e);var h=new Error;l=function(t){script.onerror=script.onload=null,clearTimeout(d);var r=n[e];if(0!==r){if(r){var o=t&&("load"===t.type?"missing":t.type),l=t&&t.target&&t.target.src;h.message="Loading chunk "+e+" failed.\n("+o+": "+l+")",h.name="ChunkLoadError",h.type=o,h.request=l,r[1](h)}n[e]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:script})}),12e4);script.onerror=script.onload=l,document.head.appendChild(script)}return Promise.all(t)},c.m=e,c.c=o,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)c.d(r,o,function(t){return e[t]}.bind(null,o));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(object,e){return Object.prototype.hasOwnProperty.call(object,e)},c.p="/UnfilteredTruth/_nuxt/",c.oe=function(e){throw console.error(e),e};var h=window.webpackJsonp=window.webpackJsonp||[],d=h.push.bind(h);h.push=t,h=h.slice();for(var i=0;i<h.length;i++)t(h[i]);var f=d;l.push([218,1,3]),r()}({154:function(e,t,r){"use strict";var o=r(35),n=r(45),l=(r(133),r(10),r(20),r(134),r(135),r(136),r(137),r(138),r(139),r(140),r(141),r(142),r(143),r(144),r(145),r(146),r(30),r(19),r(49),function(){function e(){Object(o.a)(this,e),this.layers=new Map,this.layerVisible=0}return Object(n.a)(e,[{key:"show",value:function(e){Array.from(this.layers.values()).forEach((function(e){return e.visible=!1})),this.layers.get(e).visible=!0,this.layerVisible++}},{key:"close",value:function(e){this.layers.get(e).visible=!1,this.layerVisible--}},{key:"add",value:function(e,component){this.layers.set(e,component)}},{key:"remove",value:function(e){this.layers.delete(e)}}]),e}());t.a=new l},191:function(e,t,r){var content=r(258);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(85).default)("86a65876",content,!0,{sourceMap:!1})},192:function(e,t,r){e.exports=r.p+"fonts/alfa-slab-one-v10-latin-regular.5b01f97.woff2"},193:function(e,t,r){e.exports=r.p+"fonts/roboto-v20-latin-regular.176f8f5.woff2"},194:function(e,t,r){e.exports=r.p+"fonts/roboto-v20-latin-italic.d022bc7.woff2"},195:function(e,t,r){e.exports=r.p+"fonts/roboto-v20-latin-700.c18ee39.woff2"},196:function(e,t,r){e.exports=r.p+"fonts/roboto-v20-latin-700italic.7d8125f.woff2"},213:function(e,t,r){"use strict";r(10),r(20),r(30);var o=r(154),n={speedkitComponents:{PageFooter:function(){return r.e(10).then(r.bind(null,488))},PageTextLayer:function(){return r.e(7).then(r.bind(null,485))}},data:function(){return{layerControl:o.a,footer:{navigation:[{layer:"imprint",title:"Imprint"},{layer:"privacy",title:"Privacy"},{layer:"disclaimer",title:"Disclaimer"}]},imprintContent:"<h2>Imprint</h2>\n<p><strong>Name and Address</strong><br /><br />Grabarz &amp; Partner Werbeagentur GmbH<br />Schaartor 1 // 20459\n  Hamburg<br /><br />Phone: +49 40 376 41 - 0<br />Fax: +49 40 376 41 - 400</p>\n<p>info@grabarzundpartner.de</p>\n<p><strong>Management directors</strong><br /><br />Daniel Dolezyk, Felix Fenz, Julica Hauke, Ralf Heuel, Stefanie\n  Kuhnhen-Stein, Dirk Lanio, Reinhard Patzschke</p>\n<p><strong>Registred Office</strong><br /><br />Hamburg</p>\n<p><strong>Registrar of companies</strong><br /><br />Hamburg, HRB 52097</p>\n<p><strong>VAT registration number</strong><br /><br />DE 154231979</p>\n<p><strong>Liable according to &sect;55 subparagraph 2 RSTV</strong><br /><br />Ralf Heuel</p>\n<h3>Exclusion of liability.</h3>\n<h4>1. Content.</h4>\n<p>Grabarz &amp; Partner Werbeagentur GmbH does not guarantee the timeliness, accuracy completeness or quality of the\n  information provided on its website. Any liability of Grabarz &amp; Partner Werbeagentur GmbH in respect of material\n  and immaterial damage caused by the use or non-use of the information offered or by inaccurate or incomplete\n  information shall be excluded provided that there is no culpable intent or gross negligence on the part of Grabarz\n  &amp; Partner Werbeagentur GmbH.</p>\n<h4>2. Referrals and links.</h4>\n<p>Grabarz &amp; Partner Werbeagentur GmbH provides direct or indirect references (hyperlinks) to third-party websites.\n  Any liability of Grabarz &amp; Partner Werbeagentur GmbH for the content on such third-party websites shall be\n  excluded unless it is proven that Grabarz &amp; Partner Werbeagentur GmbH has had prior knowledge of such content or\n  it was technically possible and reasonable for Grabarz &amp; Partner Werbeagentur GmbH to prevent access to such\n  illegal content.</p>\n<p>Grabarz &amp; Partner Werbeagentur GmbH expressly states that the linked websites had no noticeable illegal content\n  at the time of referencing them. However, Grabarz &amp; Partner Werbeagentur GmbH has no influence whatsoever on the\n  current or future content or design of the linked websites and takes no responsibility therefore, for any alterations\n  to such content or design that were made after the links to those websites were set up. Liability for the use or\n  non-use of any information provided on these websites shall be restricted to the authors of such content. Grabarz\n  &amp; Partner Werbeagentur GmbH is not responsible for the content, availability, correctness or accuracy of the\n  linked sites or links referenced therein. This statement applies to all links and referrals that appear within the\n  company&rsquo;s own internet offering.</p>",privacyContent:'<h2>Privacy</h2>\n<h3>Information regarding data protection</h3>\n<p>The safety and the protection of your data are important to us, Grabarz &amp; Partner Werbeagentur GmbH, Schaartor 1,\n  20459 Hamburg (hereinafter referred to as &ldquo;<strong>G&amp;P</strong>&rdquo; or\n  &ldquo;<strong>we</strong>&rdquo;). Therefore, we operate our websites in accordance with the applicable legal\n  regulations regarding the protection of personal data and data security, in particular the provisions of the General\n  Data Protection Regulation (EU) 2016/679 (GDPR), the German Federal Data Protection Act (BDSG) and the Telemedia Act\n  (TMG).</p>\n<p>In this context, we would like to inform you about which data we collect, process and use during the use of our\n  website, for which purpose and the legal basis on which this is carried out in each case and with whom we may share\n  it.</p>\n<h3>Scope, responsible position</h3>\n<p>This information regarding data protection applies to the web presence accessible at the domain</p>\n<ul>\n  <li>unfilteredtruth.cc</li>\n</ul>\n<p>(&ldquo;<strong>website</strong>&rdquo;).</p>\n<p>Responsible as per the General Data Protection Regulation (GDPR) and other national data protection laws and other\n  data protection regulations is</p>\n<p>Grabarz &amp; Partner Werbeagentur GmbH<br />Schaartor 1 <br />20459 Hamburg<br />Amtsgericht Hamburg, HRB\n  52097<br />datenschutzbeauftragter@grabarzundpartner.de</p>\n<h3>General information regarding data processing</h3>\n<p>We process your personal data only to the extent necessary for the provision of our offering. In addition, we only\n  process personal data if you provide us with this data, for example in the context of a registration, by filling out\n  forms, sending e-mails and inquiries or through other services.</p>\n<p>We will only use the personal data which you have provided for the purposes of contract fulfilment and processing\n  your requests. The processing and use of your personal data for other purposes, such as consulting, advertising and\n  market research, only occurs if you have previously agreed to the corresponding use or we are required or entitled to\n  process the data because of a statutory provision.</p>\n<p>You may withdraw your consent regarding the use of your personal data for the future at any time by sending an e-mail\n  to the e-mail address specified at the end of this data protection notice.</p>\n<h3>Provision of the website and creation of log files</h3>\n<p>When the website is used for informational purposes only (i.e. without registration), we only collect the personal\n  data that your browser transfers to our server. When you access the website, we collect the following data which is\n  technically necessary in order to enable you to visit the website and to ensure the stability and security (the legal\n  basis is article 6, paragraph 1, sentence 1 of the General Data Protection Regulation):</p>\n<ul>\n  <li>Websites from which you accessed our website</li>\n  <li>Date and time of the access</li>\n  <li>Name of the Internet access provider</li>\n  <li>Browser type/version and language</li>\n  <li>The operating system used</li>\n  <li>Access status/HTTP status code</li>\n  <li>The quantity of data transferred</li>\n  <li>Device (PC, tablet PC or smartphone)</li>\n  <li>Our pages visited including visit time</li>\n  <li>The last website you visited</li>\n</ul>\n<p>This data is analysed for statistical purposes only. There is no person-based analysis. The temporary storage of your\n  IP address is necessary to enable your terminal device to access the website. This requires the IP address of the user\n  to be saved for the duration of the session.</p>\n<h3>Use of the UnfilteredTruth-Tool.</h3>\n<p>Apart from the data that is automatically transferred by your browser software when visiting our website in\n  accordance with the previous section (Provision of the website and creation of log files), we do not collect or\n  otherwise process any personal data of any kind whatsoever in connection with your use of the Unfiltered Tool provided\n  on the website.</p>\n<h3>Data security</h3>\n<p>We utilise appropriate technical and organisational measures to ensure that the data collected within the scope of\n  the use of the services provided by us is protected against loss, incorrect changes or unauthorised access by third\n  parties. Our security precautions are continually being revised and improved accordingly in keeping with technological\n  advances.</p>\n<h3>Your rights</h3>\n<p>To the extent that we process your personal data, you are regarded as an effective person as defined by The GDPR, and\n  are entitled to the following rights:</p>\n<p><u>Right of access</u></p>\n<p>You can request confirmation from us as to whether we process personal data related to you.</p>\n<p>If this is the case, you can request information from us about the following:</p>\n<p>(a) The purposes for which the personal data is processed;</p>\n<p>(b) The categories of personal data which are processed;</p>\n<p>(c) The recipients or categories of recipients to whom your personal data has been disclosed or will be disclosed;\n</p>\n<p>(d) The planned duration of the storage of your personal data or, if this specific information is not available, the\n  criteria for determining the storage duration;</p>\n<p>(e) The existence of a right to correction or deletion of personal data relating to you, the right to limitation of\n  processing by the responsible body or the right to refuse this processing;</p>\n<p>(f) The existence of a right of complaint to a supervisory authority;</p>\n<p>(g) All available information about the origin of the data if personal information is not provided by yourself but\n  rather by third parties.</p>\n<p>You have the right to demand information as to whether or not your personal data is transferred to a third country or\n  an international organisation. In this context, you have the right to request the appropriate guarantees in accordance\n  with article 46 GDPR with regard to the transmission.</p>\n<p><u>Right to correction</u></p>\n<p>You have the right to correct and/or complete information if your personal data processed by us is incorrect or\n  incomplete. If this is the case, we will make the correction immediately.</p>\n<p><u>Right to limitation of processing</u></p>\n<p>Under the following conditions, you are entitled to request a restriction of the processing of your personal data:\n</p>\n<p>(a) if you contest the correctness of your personal data for a period of time that allows us to verify the\n  correctness;</p>\n<p>(b) the processing is unlawful and you reject the deletion of your personal data and, instead, demand the restriction\n  of the use of the personal data;</p>\n<p>(c) we no longer require your personal data for the purposes of the processing, yet you still require this data in\n  order to assert, exercise or defend against legal claims, or</p>\n<p>(d) if you have submitted an objection to the processing in accordance with article 21, paragraph 1 of the GDPR and\n  it has not yet been decided whether our legitimate reasons as the body responsible outweigh your reasons as the\n  affected person.</p>\n<p>If the processing of your personal data has been restricted, this &ndash; with the exception of its storage &ndash;\n  may only be processed with your consent or for the assertion, exercise or defence of legal claims, or to protect the\n  rights of another natural or legal person or for reasons of substantial public interests of the Union or a Member\n  State can be processed.</p>\n<p>If the restriction of processing itself has been restricted as a consequence of the above-mentioned requirements, we\n  will inform you before the restriction is lifted.</p>\n<p><u>Right to deletion</u></p>\n<p>Mandatory deletion</p>\n<p>You are entitled to request that we delete your personal data immediately provided that one of the following reasons\n  applies:</p>\n<p>(a) Your personal data is no longer necessary for the purposes for which it was collected or processed in any other\n  way.</p>\n<p>(b) If the processing was based on article 6, paragraph 1 of the GDPR, and you withdraw your consent and there is no\n  further legal basis for the processing.</p>\n<p>(c) You object to the processing in accordance with article 21, paragraph 1 of the GDPR and there are no superseding,\n  legitimate reasons for the processing, or you object to the use of your personal data for advertising purposes in\n  accordance with article 21, paragraph 2 of the GDPR.</p>\n<p>(d) Your personal data has been processed unlawfully.</p>\n<p>(e) The deletion of your personal data is required to fulfil a legal obligation.</p>\n<p>Exceptions</p>\n<p>The right of deletion does not apply provided that the processing is required</p>\n<p>(a) in order to exercise the right to freedom of expression and information;</p>\n<p>(b) in order to fulfil a legal obligation or for the performance of a task carried out in the public&rsquo;s\n  interest;</p>\n<p>(c) for the assertion, exercise or defence of legal claims.</p>\n<p><u>Right to file a complaint with a supervisory authority</u></p>\n<p>Regardless of other legal remedies, you have the right to file a complaint with a responsible supervisory authority\n  if you are of the opinion that the processing of your personal data violates the GDPR.</p>\n<h3>Withdrawal of consent</h3>\n<p>To the extent that the processing of personal data is based on your consent in accordance with article 6, paragraph 1\n  of the GDPR, you may withdraw your consent at any time effective for the future by sending an e-mail to <a\n    href="mailto:datenschutzbeauftragter@grabarzundpartner.de">datenschutzbeauftragter@grabarzundpartner.de</a>.</p>\n<h3>Contact/Information</h3>\n<p>You can send all inquiries, explanations and questions relating to the usage of the data to our Privacy Officer via\n  e-mail to</p>\n<p><a\n    href="mailto:datenschutzbeauftragter@grabarzundpartner.de">datenschutzbeauftragter@grabarzundpartner.de</a><br />or\n  by regular mail to<br />Grabarz &amp; Partner Werbeagentur GmbH,<br />Schaartor 1, 20459 Hamburg</p>',disclaimerContent:'<h2>Disclaimer</h2>\n<p>This tool changes your video as carefully as possible. The audio information is hidden in an infrasound frequency (as\n  outlined by <a target="_blank"\n    href="https://uniontownlabs.org/notebook/2016/09/18/tricking-instagram-with-infrasound/" title="Todd Jeremy\n    Treece" rel="noopener">Todd Jeremy\n    Treece</a>), then the pitch is changed a little so it is less easily recognised by automated upload filters.\n  However, it cannot be 100 per cent guaranteed that the processed video will not be blocked by upload filters and the\n  platform&rsquo;s filtering software might learn to recognise any such modifications.</p>\n<h3>How it processes your video</h3>\n<p>Social media upload filters compare your content against a database of copyrighted media for similar patterns. By\n  modifying the waveform, we change the audio patterns with minimal impact on the sound you hear.</p>\n<h3>Please consider before uploading</h3>\n<p>Even if you hide copyrighted material, it remains copyrighted. Please be aware of applicable legislation and the\n  relevant social media platform&rsquo;s terms of use and only modify content that is not violating or infringing\n  applicable law and/or any third-party rights. This tool is made to share video documents that you have created\n  yourself. You must not, and may not, use this tool to modify, use or distribute copyrighted media under infringement\n  of third-party rights or for any other illegal purposes whatsoever.</p>',privacyPromiseContent:'<h2><strong>Privacy promise</strong></h2>\n<h3>No trackers, no cookies</h3>\n<p>We don&rsquo;t want you to disclose more information than necessary. <br />Consequently, this page doesn&rsquo;t\n  track your use or behaviour.</p>\n<h3>Video data is processed in your browser</h3>\n<p>Your video documentation should be confident as long as possible. No video data is sent to external servers.\n  Everything is processed on your computer.</p>\n<h3>Check the code, it&rsquo;s open source</h3>\n<p>You don&rsquo;t have to trust the code. You can control it. The source code for this tool is published under LGPL\n  License. <a href="https://github.com/GrabarzUndPartner/UnfilteredTruth" target="_blank"\n    title="Visit github for more details" rel="noopener">Visit github for more details</a>.</p>\n<h3>Feel free to improve</h3>\n<p>This tool is a first quick take on the problem. Do you have a better, more reliable solution? We are happy if you\n  improve and submit the code.</p>'}},head:function(){var e=this.$nuxtI18nSeo&&this.$nuxtI18nSeo()||{htmlAttrs:{}};return e.htmlAttrs[String("data-prevent-scrolling")]=this.preventScrolling,e},computed:{preventScrolling:function(){return this.layerControl.layerVisible>0}}},l=(r(257),r(58)),component=Object(l.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"layout"},[r("main",[r("nuxt")],1),e._v(" "),r("page-footer",e._b({},"page-footer",e.footer,!1)),e._v(" "),r("page-text-layer",{attrs:{name:"imprint",content:e.imprintContent}}),e._v(" "),r("page-text-layer",{attrs:{name:"privacy",content:e.privacyContent}}),e._v(" "),r("page-text-layer",{attrs:{name:"disclaimer",content:e.disclaimerContent,center:""}}),e._v(" "),r("page-text-layer",{attrs:{name:"privacyPromise",content:e.privacyPromiseContent,center:""}})],1)}),[],!1,null,null,null);t.a=component.exports},218:function(e,t,r){e.exports=r(219)},257:function(e,t,r){"use strict";r(191)},258:function(e,t,r){var o=r(84)((function(i){return i[1]}));o.push([e.i,"body{margin:0;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}html[data-prevent-scrolling=true] body{margin-left:calc(100vw - 100%);overflow:hidden}.layout{position:relative;overflow:hidden}main>div>*{margin:18.75vw 0}@media (min-width:576px){main>div>*{margin:60px 0}}main>div>:first-child{margin-top:0}",""]),o.locals={},e.exports=o},262:function(e,t,r){e.exports=r.p+"fonts/roboto-v20-latin-regular.49ae34d.woff"},263:function(e,t,r){e.exports=r.p+"fonts/roboto-v20-latin-italic.b1d9d99.woff"},264:function(e,t,r){e.exports=r.p+"fonts/roboto-v20-latin-700.2267169.woff"},265:function(e,t,r){e.exports=r.p+"fonts/roboto-v20-latin-700italic.9360531.woff"}});