(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{131:function(t,e,l){"use strict";l(90)},132:function(t,e,l){var n=l(8)((function(i){return i[1]}));n.push([t.i,".molecule-link-list{display:flex;padding:0;margin:0;list-style:none}@media (max-width:575px){.molecule-link-list{flex-wrap:wrap;justify-content:center;margin:-3.125vw 0}}@media (max-width:575px){.molecule-link-list li{margin:3.125vw 0}}.molecule-link-list li{flex:0 0 50%}@media (min-width:576px){.molecule-link-list li{flex:0 0 33.33333%}}.molecule-link-list li{text-align:center}.molecule-link-list a,.molecule-link-list button{padding:0;font-size:3.75vw;color:#230ce5;text-decoration:none;cursor:pointer;background:none;border:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;transition:filter .2s linear}@media (min-width:576px){.molecule-link-list a,.molecule-link-list button{font-size:12px}}@media (min-width:768px){.molecule-link-list a,.molecule-link-list button{font-size:18px}}@media (hover:none){.molecule-link-list a:active,.molecule-link-list button:active{filter:blur(3px)}}@media (hover:hover) and (pointer:fine){.molecule-link-list a:hover,.molecule-link-list button:hover{filter:blur(3px)}}",""]),n.locals={},t.exports=n},133:function(t,e,l){"use strict";l(91)},134:function(t,e,l){var n=l(8)((function(i){return i[1]}));n.push([t.i,".page-footer{padding:0 0 10.66667%;margin:0}@media (min-width:576px){.page-footer{padding:20px 0}}@media (min-width:992px){.page-footer{padding-top:25px;padding-bottom:100px}}.page-footer{background:var(--color-light-grey)}.page-footer nav{flex-grow:0;flex-shrink:0;flex-basis:calc(83.25% - 2.5px);max-width:calc(83.25% - 2.5px);width:calc(83.25% - 2.5px);margin-left:calc(8.325% + 1.25px) !important}.page-footer nav:nth-child(1n){margin-right:15px;margin-left:0}.page-footer nav:last-child{margin-right:0}.page-footer nav:nth-child(12n){margin-right:0;margin-left:auto}@media (min-width:576px){.page-footer nav{flex-grow:0;flex-shrink:0;flex-basis:calc(49.95% - 7.5px);max-width:calc(49.95% - 7.5px);width:calc(49.95% - 7.5px);margin-left:calc(24.975% + 3.75px) !important}.page-footer nav:nth-child(1n){margin-right:15px;margin-left:0}.page-footer nav:last-child{margin-right:0}.page-footer nav:nth-child(12n){margin-right:0;margin-left:auto}}",""]),n.locals={},t.exports=n},220:function(t,e,l){"use strict";l.r(e);var n=l(64),o={components:{AtomLinkTo:l(89).a},props:{list:{type:Array,default:()=>[]}},methods:{getUrl(t){return"$i18n"in this?this.localePath(t.url):t.url}}},r=(l(131),l(6)),c=Object(r.a)(o,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("ul",{directives:[{name:"font",rawName:"v-font",value:t.$getFont("Roboto",700,"normal",{selector:"a, button"}),expression:"$getFont('Roboto', 700, 'normal', {selector: 'a, button'})"}],staticClass:"molecule-link-list"},[t._t("default",(function(){return t._l(t.list,(function(e){return l("li",{key:e.title},[l("atom-link-to",t._b({attrs:{url:t.getUrl(e)}},"atom-link-to",e,!1),[t._v("\n        "+t._s(e.title)+"\n      ")])],1)}))}))],2)}),[],!1,null,null,null).exports,f={components:{LayoutLostContainer:n.a,LinkList:c},props:{navigation:{type:Array,default:()=>[{layer:"disclaimer",title:"Disclaimer"},{layer:"imprint",title:"Imprint"}]}}},d=(l(133),Object(r.a)(f,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("layout-lost-container",{staticClass:"page-footer",attrs:{tag:"footer"}},[l("nav",[l("link-list",{attrs:{list:t.navigation}})],1)])}),[],!1,null,null,null));e.default=d.exports},62:function(t,e,l){var content=l(66);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(9).default)("b10244fc",content,!0,{sourceMap:!1})},64:function(t,e,l){"use strict";var n={props:{tag:{type:String,default:"div"},direction:{type:String,default:"row"},visible:{type:Boolean,default:()=>!0}},computed:{styleClasses(){return{"lost-container--direction-column":"column"===this.direction}}}},o=(l(65),l(6)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l(t.tag,{tag:"component",staticClass:"layouts-lost-container",class:t.styleClasses},[l("div",{staticClass:"lost-flex-container"},[t._t("default")],2)])}),[],!1,null,null,null);e.a=component.exports},65:function(t,e,l){"use strict";l(62)},66:function(t,e,l){var n=l(8)((function(i){return i[1]}));n.push([t.i,".layouts-lost-container{display:block}.layouts-lost-container .lost-flex-container{display:flex}@media (min-width:576px){.layouts-lost-container .lost-flex-container{display:flex;flex-flow:row wrap;max-width:540px;margin-left:auto;margin-right:auto}}@media (min-width:768px){.layouts-lost-container .lost-flex-container{display:flex;flex-flow:row wrap;max-width:720px;margin-left:auto;margin-right:auto}}@media (min-width:992px){.layouts-lost-container .lost-flex-container{display:flex;flex-flow:row wrap;max-width:960px;margin-left:auto;margin-right:auto}}@media (min-width:1200px){.layouts-lost-container .lost-flex-container{display:flex;flex-flow:row wrap;max-width:1140px;margin-left:auto;margin-right:auto}}.layouts-lost-container.lost-container--direction-column .lost-flex-container{flex-direction:column}",""]),n.locals={},t.exports=n},89:function(t,e,l){"use strict";var n=l(17),o={props:{url:{type:[String,Object],default:"#"},title:{type:String,default:null},download:{type:String,default:null},layer:{type:String,default:null},target:{type:String,default:"_blank"}},computed:{isExternal(){return!!this.url.startsWith("blob")||"string"==typeof this.url&&(/^(http(s)?|ftp):\/\//.test(this.url)||this.url.startsWith("#"))}},methods:{onClick(){n.a.show(this.layer)}}},r=l(6),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return t.isExternal||t.layer?t.layer?l("button",{on:{click:t.onClick}},[t._t("default",(function(){return[t._v(t._s(t.title))]}))],2):l("a",{attrs:{download:t.download,href:t.url,target:t.target||"_blank",rel:"noopener",title:t.title}},[t._t("default",(function(){return[t._v(t._s(t.title))]}))],2):l("nuxt-link",{attrs:{to:t.url,title:t.title}},[t._t("default",(function(){return[t._v(t._s(t.title))]}))],2)}),[],!1,null,null,null);e.a=component.exports},90:function(t,e,l){var content=l(132);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(9).default)("3e4d9f88",content,!0,{sourceMap:!1})},91:function(t,e,l){var content=l(134);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(9).default)("2b897b80",content,!0,{sourceMap:!1})}}]);