!function(e){function t(data){for(var t,o,c=data[0],d=data[1],h=data[2],i=0,m=[];i<c.length;i++)o=c[i],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&m.push(n[o][0]),n[o]=0;for(t in d)Object.prototype.hasOwnProperty.call(d,t)&&(e[t]=d[t]);for(f&&f(data);m.length;)m.shift()();return l.push.apply(l,h||[]),r()}function r(){for(var e,i=0;i<l.length;i++){for(var t=l[i],r=!0,o=1;o<t.length;o++){var d=t[o];0!==n[d]&&(r=!1)}r&&(l.splice(i--,1),e=c(c.s=t[0]))}return e}var o={},n={0:0},l=[];function c(t){if(o[t])return o[t].exports;var r=o[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.e=function(e){var t=[],r=n[e];if(0!==r)if(r)t.push(r[2]);else{var o=new Promise((function(t,o){r=n[e]=[t,o]}));t.push(r[2]=o);var l,script=document.createElement("script");script.charset="utf-8",script.timeout=120,c.nc&&script.setAttribute("nonce",c.nc),script.src=function(e){return c.p+""+({2:"pages/index"}[e]||e)+"."+{2:"2d3f7945393a650ced3d",4:"2493e2d65c547251149d",5:"4eb77f7cadbf364d8ad7",6:"cd67483b3590c9d3e71c",7:"328ffeed06e2a160f9eb",8:"e87e7592f09adabfc9e2",9:"d394a0b3b80cc6e4df28",10:"1074f8316f724937efef"}[e]+".js"}(e);var d=new Error;l=function(t){script.onerror=script.onload=null,clearTimeout(h);var r=n[e];if(0!==r){if(r){var o=t&&("load"===t.type?"missing":t.type),l=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+o+": "+l+")",d.name="ChunkLoadError",d.type=o,d.request=l,r[1](d)}n[e]=void 0}};var h=setTimeout((function(){l({type:"timeout",target:script})}),12e4);script.onerror=script.onload=l,document.head.appendChild(script)}return Promise.all(t)},c.m=e,c.c=o,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)c.d(r,o,function(t){return e[t]}.bind(null,o));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(object,e){return Object.prototype.hasOwnProperty.call(object,e)},c.p="/UnfilteredTruth/_nuxt/",c.oe=function(e){throw console.error(e),e};var d=window.webpackJsonp=window.webpackJsonp||[],h=d.push.bind(d);d.push=t,d=d.slice();for(var i=0;i<d.length;i++)t(d[i]);var f=h;l.push([41,1,3]),r()}([,,,,,,,,,,function(e,t,r){"use strict";(function(e){var o=r(17);t.a={components:{LostContainer:o.a},props:{show:{type:Boolean,default:!1}},data(){var e=!1;return"$route"in this&&"debug-grid"in this.$route.query&&(e=!0),{viewport:[],color:"#ff00FF",fields:[{label:"Cols",type:"number",name:"cols"},{label:"Gutter",type:"number",name:"gutter"},{label:"Width",type:"number",name:"width"}],breakpoints:[{name:"default",cols:12,gutter:0,width:0},{name:"xs",cols:12,gutter:0,width:0},{name:"sm",cols:12,gutter:0,width:0},{name:"md",cols:12,gutter:15,width:992},{name:"lg",cols:12,gutter:15,width:1200}],enable:e,showGrid:!0,showPanel:!1}},computed:{currentBreakpoint(){var e=Array.from(this.breakpoints).reverse();return e.find((e=>{var{width:t}=e;return this.viewport[0]>=t}))||e[e.length-1]},style(){return{"--max-width":this.currentBreakpoint.maxWidth>0?"".concat(this.currentBreakpoint.maxWidth,"px"):"none","--width":this.currentBreakpoint.width>0?"".concat(this.currentBreakpoint.width,"px"):"100%","--gutter":"".concat(this.currentBreakpoint.gutter,"px"),"--columns":"".concat(1/this.columnCount),"--color":this.color}},columnCount(){return Number(this.currentBreakpoint.cols)},columns(){return Array(this.columnCount)}},mounted(){this.enable&&(this.setCurrents(this.currentIndex),e.addEventListener("resize",this.onResize),this.onResize())},methods:{onResize(){this.viewport=[e.innerWidth,e.innerHeight]},setCurrents(e){this.currents=Object.assign({},this.breakpoints[Number(e)])}}}}).call(this,r(3))},,,,,,,function(e,t,r){"use strict";var o={props:{tag:{type:String,default:"div"},direction:{type:String,default:"row"},visible:{type:Boolean,default:()=>!0}},computed:{styleClasses(){return{"lost-container--direction-column":"column"===this.direction}}}},n=(r(50),r(4)),component=Object(n.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r(e.tag,{tag:"component",staticClass:"layouts-lost-container",class:e.styleClasses},[r("div",{staticClass:"lost-flex-container"},[e._t("default")],2)])}),[],!1,null,null,null);t.a=component.exports},function(e,t,r){"use strict";t.a=new class{constructor(){this.layers=new Map,this.layerVisible=0}show(e){Array.from(this.layers.values()).forEach((e=>e.visible=!1)),this.layers.get(e).visible=!0,this.layerVisible++}close(e){this.layers.get(e).visible=!1,this.layerVisible--}add(e,component){this.layers.set(e,component)}remove(e){this.layers.delete(e)}}},,,function(e,t,r){var content=r(51);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(7).default)("b10244fc",content,!0,{sourceMap:!1})},function(e,t,r){var content=r(53);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(7).default)("d06bfc78",content,!0,{sourceMap:!1})},function(e,t,r){var content=r(55);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(7).default)("86a65876",content,!0,{sourceMap:!1})},function(e,t,r){e.exports=r.p+"fonts/alfa-slab-one-v10-latin-regular.5b01f97.woff2"},function(e,t,r){e.exports=r.p+"fonts/roboto-v20-latin-regular.176f8f5.woff2"},function(e,t,r){e.exports=r.p+"fonts/roboto-v20-latin-italic.d022bc7.woff2"},function(e,t,r){e.exports=r.p+"fonts/roboto-v20-latin-700.c18ee39.woff2"},function(e,t,r){e.exports=r.p+"fonts/roboto-v20-latin-700italic.7d8125f.woff2"},,,,,,,,,function(e,t,r){"use strict";var o=r(10).a,n=(r(52),r(4)),l=Object(n.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.enable?r("div",{staticClass:"debugs-grid",style:e.style},[r("div",[e.showGrid?r("lost-container",{staticClass:"grid__container"},e._l(e.columns,(function(e,t){return r("div",{key:t,staticClass:"grid__column"})})),0):e._e()],1),e._v(" "),r("div",{staticClass:"grid__panel"},[e.showPanel?r("div",[r("div",{staticClass:"grid__panel__viewport"},[e._v("\n        "+e._s(e.viewport.join(" x "))+" - "+e._s(e.currentBreakpoint.name)+"\n      ")]),e._v(" "),r("label",[r("span",[e._v("Show Grid")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.showGrid,expression:"showGrid"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.showGrid)?e._i(e.showGrid,null)>-1:e.showGrid},on:{change:function(t){var r=e.showGrid,o=t.target,n=!!o.checked;if(Array.isArray(r)){var l=e._i(r,null);o.checked?l<0&&(e.showGrid=r.concat([null])):l>-1&&(e.showGrid=r.slice(0,l).concat(r.slice(l+1)))}else e.showGrid=n}}})]),e._v(" "),r("label",[r("span",[e._v("Color")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.color,expression:"color"}],attrs:{type:"color"},domProps:{value:e.color},on:{input:function(t){t.target.composing||(e.color=t.target.value)}}})]),e._v(" "),r("div",e._l(e.fields,(function(t,o){return r("label",{key:o},[r("span",[e._v(e._s(t.label))]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.currentBreakpoint[t.name],expression:"currentBreakpoint[field.name]"}],attrs:{type:"number"},domProps:{value:e.currentBreakpoint[t.name]},on:{input:function(r){r.target.composing||e.$set(e.currentBreakpoint,t.name,r.target.value)}}})])})),0)]):e._e(),e._v(" "),r("span",{staticClass:"grid__panel__toggler",on:{click:function(t){e.showPanel=!e.showPanel}}},[e.showPanel?r("span",[e._v("Hide")]):e._e(),e.showPanel?e._e():r("span",[e._v("Show")]),e._v(" Grid Settings\n    ")])])]):e._e()}),[],!1,null,null,null).exports,c=r(18),d={speedkitComponents:{PageFooter:()=>r.e(9).then(r.bind(null,223)),PageTextLayer:()=>r.e(6).then(r.bind(null,220))},components:{Grid:l},data:()=>({layerControl:c.a,footer:{navigation:[{layer:"imprint",title:"Imprint"},{layer:"privacy",title:"Privacy"},{layer:"disclaimer",title:"Disclaimer"}]},imprintContent:"<h2>Imprint</h2><p><strong>Name and Address</strong><br /><br />Grabarz &amp; Partner Werbeagentur GmbH<br />Schaartor 1 // 20459  Hamburg<br /><br />Phone: +49 40 376 41 -  0<br />Fax: +49 40 376 41 - 400</p><p>info@grabarzundpartner.de</p><p><strong>Management directors</strong><br /><br />Daniel Dolezyk, Felix Fenz, Julica Hauke, Ralf Heuel, Stefanie  Kuhnhen-Stein, Dirk Lanio, Reinhard Patzschke</p><p><strong>Registred Office</strong><br /><br />Hamburg</p><p><strong>Registrar of companies</strong><br /><br />Hamburg, HRB 52097</p><p><strong>VAT registration number</strong><br /><br />DE 154231979</p><p><strong>Liable according to &sect;55 subparagraph 2 RSTV</strong><br /><br />Ralf Heuel</p><h3>Exclusion of liability.</h3><h4>1. Content.</h4><p>Grabarz &amp; Partner Werbeagentur GmbH does not guarantee the timeliness, accuracy completeness or quality of the  information provided on its website. Any liability of Grabarz &amp; Partner Werbeagentur GmbH in respect of material  and immaterial damage caused by the use or non-use of the information offered or by inaccurate or incomplete  information shall be excluded provided that there is no culpable intent or gross negligence on the part of Grabarz  &amp; Partner Werbeagentur GmbH.</p><h4>2. Referrals and links.</h4><p>Grabarz &amp; Partner Werbeagentur GmbH provides direct or indirect references (hyperlinks) to third-party websites.  Any liability of Grabarz &amp; Partner Werbeagentur GmbH for the content on such third-party websites shall be  excluded unless it is proven that Grabarz &amp; Partner Werbeagentur GmbH has had prior knowledge of such content or  it was technically possible and reasonable for Grabarz &amp; Partner Werbeagentur GmbH to prevent access to such  illegal content.</p><p>Grabarz &amp; Partner Werbeagentur GmbH expressly states that the linked websites had no noticeable illegal content  at the time of referencing them. However, Grabarz &amp; Partner Werbeagentur GmbH has no influence whatsoever on the  current or future content or design of the linked websites and takes no responsibility therefore, for any alterations  to such content or design that were made after the links to those websites were set up. Liability for the use or  non-use of any information provided on these websites shall be restricted to the authors of such content. Grabarz  &amp; Partner Werbeagentur GmbH is not responsible for the content, availability, correctness or accuracy of the  linked sites or links referenced therein. This statement applies to all links and referrals that appear within the  company&rsquo;s own internet offering.</p>",privacyContent:'<h2>Privacy.</h2><h3>Information regarding data protection</h3><p>The safety and the protection of your data are important to us, Grabarz &amp; Partner Werbeagentur GmbH, Schaartor 1,  20459 Hamburg (hereinafter referred to as &ldquo;<strong>G&amp;P</strong>&rdquo; or  &ldquo;<strong>we</strong>&rdquo;). Therefore, we operate our websites in accordance with the applicable legal  regulations regarding the protection of personal data and data security, in particular the provisions of the General  Data Protection Regulation (EU) 2016/679 (GDPR), the German Federal Data Protection Act (BDSG) and the Telemedia Act  (TMG).</p><p>In this context, we would like to inform you about which data we collect, process and use during the use of our  website, for which purpose and the legal basis on which this is carried out in each case and with whom we may share  it.</p><h3>Scope, responsible position</h3><p>This information regarding data protection applies to the web presence accessible at the domain</p><ul>  <li>unfilteredtruth.cc</li></ul><p>(&ldquo;<strong>website</strong>&rdquo;).</p><p>Responsible as per the General Data Protection Regulation (GDPR) and other national data protection laws and other  data protection regulations is</p><p>Grabarz &amp; Partner Werbeagentur GmbH<br />Schaartor 1 <br />20459 Hamburg<br />Amtsgericht Hamburg, HRB  52097<br />datenschutzbeauftragter@grabarzundpartner.de</p><h3>General information regarding data processing</h3><p>We process your personal data only to the extent necessary for the provision of our offering. In addition, we only  process personal data if you provide us with this data, for example in the context of a registration, by filling out  forms, sending e-mails and inquiries or through other services.</p><p>We will only use the personal data which you have provided for the purposes of contract fulfilment and processing  your requests. The processing and use of your personal data for other purposes, such as consulting, advertising and  market research, only occurs if you have previously agreed to the corresponding use or we are required or entitled to  process the data because of a statutory provision.</p><p>You may withdraw your consent regarding the use of your personal data for the future at any time by sending an e-mail  to the e-mail address specified at the end of this data protection notice.</p><h3>Provision of the website and creation of log files</h3><p>When the website is used for informational purposes only (i.e. without registration), we only collect the personal  data that your browser transfers to our server. When you access the website, we collect the following data which is  technically necessary in order to enable you to visit the website and to ensure the stability and security (the legal  basis is article 6, paragraph 1, sentence 1 of the General Data Protection Regulation):</p><ul>  <li>Websites from which you accessed our website</li>  <li>Date and time of the access</li>  <li>Name of the Internet access provider</li>  <li>Browser type/version and language</li>  <li>The operating system used</li>  <li>Access status/HTTP status code</li>  <li>The quantity of data transferred</li>  <li>Device (PC, tablet PC or smartphone)</li>  <li>Our pages visited including visit time</li>  <li>The last website you visited</li></ul><p>This data is analysed for statistical purposes only. There is no person-based analysis. The temporary storage of your  IP address is necessary to enable your terminal device to access the website. This requires the IP address of the user  to be saved for the duration of the session.</p><h3>Use of the UnfilteredTruth-Tool.</h3><p>Apart from the data that is automatically transferred by your browser software when visiting our website in  accordance with the previous section (Provision of the website and creation of log files), we do not collect or  otherwise process any personal data of any kind whatsoever in connection with your use of the Unfiltered Tool provided  on the website.</p><h3>Data security</h3><p>We utilise appropriate technical and organisational measures to ensure that the data collected within the scope of  the use of the services provided by us is protected against loss, incorrect changes or unauthorised access by third  parties. Our security precautions are continually being revised and improved accordingly in keeping with technological  advances.</p><h3>Your rights</h3><p>To the extent that we process your personal data, you are regarded as an effective person as defined by The GDPR, and  are entitled to the following rights:</p><p><u>Right of access</u></p><p>You can request confirmation from us as to whether we process personal data related to you.</p><p>If this is the case, you can request information from us about the following:</p><p>(a) The purposes for which the personal data is processed;</p><p>(b) The categories of personal data which are processed;</p><p>(c) The recipients or categories of recipients to whom your personal data has been disclosed or will be disclosed;</p><p>(d) The planned duration of the storage of your personal data or, if this specific information is not available, the  criteria for determining the storage duration;</p><p>(e) The existence of a right to correction or deletion of personal data relating to you, the right to limitation of  processing by the responsible body or the right to refuse this processing;</p><p>(f) The existence of a right of complaint to a supervisory authority;</p><p>(g) All available information about the origin of the data if personal information is not provided by yourself but  rather by third parties.</p><p>You have the right to demand information as to whether or not your personal data is transferred to a third country or  an international organisation. In this context, you have the right to request the appropriate guarantees in accordance  with article 46 GDPR with regard to the transmission.</p><p><u>Right to correction</u></p><p>You have the right to correct and/or complete information if your personal data processed by us is incorrect or  incomplete. If this is the case, we will make the correction immediately.</p><p><u>Right to limitation of processing</u></p><p>Under the following conditions, you are entitled to request a restriction of the processing of your personal data:</p><p>(a) if you contest the correctness of your personal data for a period of time that allows us to verify the  correctness;</p><p>(b) the processing is unlawful and you reject the deletion of your personal data and, instead, demand the restriction  of the use of the personal data;</p><p>(c) we no longer require your personal data for the purposes of the processing, yet you still require this data in  order to assert, exercise or defend against legal claims, or</p><p>(d) if you have submitted an objection to the processing in accordance with article 21, paragraph 1 of the GDPR and  it has not yet been decided whether our legitimate reasons as the body responsible outweigh your reasons as the  affected person.</p><p>If the processing of your personal data has been restricted, this &ndash; with the exception of its storage &ndash;  may only be processed with your consent or for the assertion, exercise or defence of legal claims, or to protect the  rights of another natural or legal person or for reasons of substantial public interests of the Union or a Member  State can be processed.</p><p>If the restriction of processing itself has been restricted as a consequence of the above-mentioned requirements, we  will inform you before the restriction is lifted.</p><p><u>Right to deletion</u></p><p>Mandatory deletion</p><p>You are entitled to request that we delete your personal data immediately provided that one of the following reasons  applies:</p><p>(a) Your personal data is no longer necessary for the purposes for which it was collected or processed in any other  way.</p><p>(b) If the processing was based on article 6, paragraph 1 of the GDPR, and you withdraw your consent and there is no  further legal basis for the processing.</p><p>(c) You object to the processing in accordance with article 21, paragraph 1 of the GDPR and there are no superseding,  legitimate reasons for the processing, or you object to the use of your personal data for advertising purposes in  accordance with article 21, paragraph 2 of the GDPR.</p><p>(d) Your personal data has been processed unlawfully.</p><p>(e) The deletion of your personal data is required to fulfil a legal obligation.</p><p>Exceptions</p><p>The right of deletion does not apply provided that the processing is required</p><p>(a) in order to exercise the right to freedom of expression and information;</p><p>(b) in order to fulfil a legal obligation or for the performance of a task carried out in the public&rsquo;s  interest;</p><p>(c) for the assertion, exercise or defence of legal claims.</p><p><u>Right to file a complaint with a supervisory authority</u></p><p>Regardless of other legal remedies, you have the right to file a complaint with a responsible supervisory authority  if you are of the opinion that the processing of your personal data violates the GDPR.</p><h3>Withdrawal of consent</h3><p>To the extent that the processing of personal data is based on your consent in accordance with article 6, paragraph 1  of the GDPR, you may withdraw your consent at any time effective for the future by sending an e-mail to <a    href="mailto:datenschutzbeauftragter@grabarzundpartner.de">datenschutzbeauftragter@grabarzundpartner.de</a>.</p><h3>Contact/Information</h3><p>You can send all inquiries, explanations and questions relating to the usage of the data to our Privacy Officer via  e-mail to</p><p><a    href="mailto:datenschutzbeauftragter@grabarzundpartner.de">datenschutzbeauftragter@grabarzundpartner.de</a><br />or  by regular mail to<br />Grabarz &amp; Partner Werbeagentur GmbH,<br />Schaartor 1, 20459 Hamburg</p>',disclaimerContent:'<h2>Disclaimer</h2><p>This tool changes your video as carefully as possible. The audio information is hidden in an infrasound frequency (as outlined by <a href="https://uniontownlabs.org/notebook/2016/09/18/tricking-instagram-with-infrasound/">Todd Jeremy Treece</a>), then the pitch is changed a little so it is less easily recognised by automated upload filters. However, it cannot be 100 per cent guaranteed that the processed video will not be blocked by upload filters and the platform&rsquo;s filtering software might learn to recognise any such modifications.</p><h3>How it processes your video</h3><p>Social media upload filters compare your content against a database of copyrighted media for similar patterns. By modifying the waveform, we change the audio patterns with minimal impact on the sound you hear.</p><h3>Please consider before uploading</h3><p>Even if you hide copyrighted material, it remains copyrighted. Please be aware of applicable legislation and the relevant social media platform&rsquo;s terms of use and only modify content that is not violating or infringing applicable law and/or any third-party rights. This tool is made to share video documents that you have created yourself. You must not, and may not, use this tool to modify, use or distribute copyrighted media under infringement of third-party rights or for any other illegal purposes whatsoever.</p>',privacyPromiseContent:"<h2><strong>Privacy promise</strong></h2><h3>No trackers, no cookies</h3><p>We don&rsquo;t want you to disclose more information than necessary. <br />Consequently, this page doesn&rsquo;t track your use or behaviour.</p><h3>Video data is processed in your browser</h3><p>Your video documentation should be confident as long as possible. No video data is sent to external servers. Everything is processed on your computer.</p><h3>Check the code, it&rsquo;s open source</h3><p>You don&rsquo;t have to trust the code. You can control it. The source code for this tool is published under LGPL License. <u>Visit github for more details</u>.</p><h3>Feel free to improve</h3><p>This tool is a first quick take on the problem. Do you have a better, more reliable solution? We are happy if you improve and submit the code.</p>"}),head(){var e=this.$nuxtI18nSeo&&this.$nuxtI18nSeo()||{htmlAttrs:{}};return e.htmlAttrs[String("data-prevent-scrolling")]=this.preventScrolling,e},computed:{preventScrolling(){return this.layerControl.layerVisible>0}}},h=(r(54),Object(n.a)(d,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"layout"},[r("grid"),e._v(" "),r("main",[r("nuxt")],1),e._v(" "),r("page-footer",e._b({},"page-footer",e.footer,!1)),e._v(" "),r("page-text-layer",{attrs:{name:"imprint",content:e.imprintContent}}),e._v(" "),r("page-text-layer",{attrs:{name:"privacy",content:e.privacyContent}}),e._v(" "),r("page-text-layer",{attrs:{name:"disclaimer",content:e.disclaimerContent,center:""}}),e._v(" "),r("page-text-layer",{attrs:{name:"privacyPromise",content:e.privacyPromiseContent,center:""}})],1)}),[],!1,null,null,null));t.a=h.exports},,,,function(e,t,r){e.exports=r(42)},,,,,,,,,function(e,t,r){"use strict";r(21)},function(e,t,r){var o=r(6)((function(i){return i[1]}));o.push([e.i,".layouts-lost-container{display:block}.layouts-lost-container .lost-flex-container{display:flex}@media (min-width:576px){.layouts-lost-container .lost-flex-container{display:flex;flex-flow:row wrap;max-width:540px;margin-left:auto;margin-right:auto}}@media (min-width:768px){.layouts-lost-container .lost-flex-container{display:flex;flex-flow:row wrap;max-width:720px;margin-left:auto;margin-right:auto}}@media (min-width:992px){.layouts-lost-container .lost-flex-container{display:flex;flex-flow:row wrap;max-width:960px;margin-left:auto;margin-right:auto}}@media (min-width:1200px){.layouts-lost-container .lost-flex-container{display:flex;flex-flow:row wrap;max-width:1140px;margin-left:auto;margin-right:auto}}.layouts-lost-container.lost-container--direction-column .lost-flex-container{flex-direction:column}",""]),e.exports=o},function(e,t,r){"use strict";r(22)},function(e,t,r){var o=r(6)((function(i){return i[1]}));o.push([e.i,'.debugs-grid{position:-webkit-sticky;position:sticky;top:0;left:0;z-index:10000;width:100%;height:0;overflow:visible}@media (min-width:992px){.debugs-grid{box-sizing:border-box}}.debugs-grid .grid__panel__viewport{padding-top:10px;font-size:12px;font-weight:700;text-align:center}.debugs-grid>div:first-child{pointer-events:none}.debugs-grid .grid__panel__toggler{position:absolute;bottom:0;left:0;padding:5px;font-weight:700;white-space:nowrap;cursor:pointer;transform:translateY(100%)}.debugs-grid .grid__container{height:100vh;margin:0 auto}.debugs-grid .grid__container>div{height:100vh}.debugs-grid .grid__column{position:relative;flex-basis:calc(99.9%*var(--columns) - var(--gutter) + var(--gutter)*var(--columns));flex-grow:0;flex-shrink:0;width:calc(99.9%*var(--columns) - var(--gutter) + var(--gutter)*var(--columns));max-width:calc(99.9%*var(--columns) - var(--gutter) + var(--gutter)*var(--columns));height:100%;margin-left:var(--gutter);pointer-events:none}.debugs-grid .grid__column:first-child{margin-left:0}.debugs-grid .grid__column:before{position:absolute;top:0;left:0;width:100%;height:100%;content:"";background:var(--color);opacity:.4}.debugs-grid .grid__column:nth-child(odd):before{opacity:.2}.debugs-grid .grid__panel{position:absolute;top:0;left:0;padding:0;font-family:sans-serif;font-size:10px;background:hsla(0,0%,100%,.6);box-shadow:0 0 8px 0 #000;-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px)}.debugs-grid .grid__panel label{display:flex;margin:10px}.debugs-grid .grid__panel label span{display:inline-block;align-self:center;min-width:80px;font-weight:700;color:#000}.debugs-grid .grid__panel label span:after{content:":"}.debugs-grid .grid__panel input,.debugs-grid .grid__panel select{box-sizing:border-box;display:inline-block;width:100px}',""]),e.exports=o},function(e,t,r){"use strict";r(23)},function(e,t,r){var o=r(6)((function(i){return i[1]}));o.push([e.i,"body{margin:0;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}html[data-prevent-scrolling=true] body{margin-left:calc(100vw - 100%);overflow:hidden}.layout{position:relative;overflow:hidden}main>div>*{margin:18.75vw 0}@media (min-width:576px){main>div>*{margin:60px 0}}main>div>:first-child{margin-top:0}",""]),e.exports=o},function(e,t,r){"use strict";r.r(t),r.d(t,"state",(function(){return o})),r.d(t,"mutations",(function(){return n})),r.d(t,"getters",(function(){return l})),r.d(t,"actions",(function(){return c}));var o=()=>({data:{},preventScrolling:!1,toggleDirection:!1}),n={data(e,data){e.data=data},preventScrolling(e,data){e.preventScrolling=Boolean(data)},toggleDirection(e,data){e.toggleDirection=Boolean(data)}},l={data:e=>e.data,preventScrolling:e=>e.preventScrolling,toggleDirection:e=>e.toggleDirection},c={setData(e,t){e.commit("data",t)},toggleDirection(e,t){e.commit("toggleDirection",t)},togglePreventScrolling(e,t){var r=!e.getters.preventScrolling;void 0!==t&&(r=t),e.commit("preventScrolling",r)}}},function(e,t,r){"use strict";r.r(t),r.d(t,"state",(function(){return o})),r.d(t,"mutations",(function(){return n})),r.d(t,"getters",(function(){return l})),r.d(t,"actions",(function(){return c}));var o=()=>({modals:[]}),n={toggleModal(e,t){var r=e.modals.find((e=>e.name===t.name));r&&(r.opened=void 0!==t.flag?t.flag:!r.opened),this.dispatch("layout/togglePreventScrolling",!!e.modals.find((e=>e.opened)))},add(e,t){e.modals.push(t)},remove(e,t){e.modals.splice(e.modals.indexOf(t),1)}},l={getModal:e=>t=>d(e.modals,t),isModelOpened:e=>t=>(d(e.modals,t)||{opened:!1}).opened},c={registerModal(e,t){e.commit("add",Object.assign({name:null,opened:!1},t))},unregisterModal(e,t){e.commit("remove",t)},toggleModal(e,t){e.commit("toggleModal",t)}};function d(e,t){return e.find((e=>e.name===t))}},,,,function(e,t,r){e.exports=r.p+"fonts/roboto-v20-latin-regular.49ae34d.woff"},function(e,t,r){e.exports=r.p+"fonts/roboto-v20-latin-italic.b1d9d99.woff"},function(e,t,r){e.exports=r.p+"fonts/roboto-v20-latin-700.2267169.woff"},function(e,t,r){e.exports=r.p+"fonts/roboto-v20-latin-700italic.9360531.woff"}]);