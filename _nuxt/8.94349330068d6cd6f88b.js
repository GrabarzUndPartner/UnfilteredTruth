(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{152:function(t,n,e){var content=e(234);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(8).default)("70da7d1a",content,!0,{sourceMap:!1})},153:function(t,n,e){var content=e(236);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(8).default)("1bc1504c",content,!0,{sourceMap:!1})},154:function(t,n,e){var content=e(238);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(8).default)("521a4394",content,!0,{sourceMap:!1})},233:function(t,n,e){"use strict";e(152)},234:function(t,n,e){var o=e(7)((function(i){return i[1]}));o.push([t.i,".atom-base-button{width:100%;max-width:65.625vw;padding:3.125vw;font-size:4.375vw;line-height:1.5em;color:#230ce5;cursor:pointer;background:#ebefff;border:1px solid #050015;outline:none;transition:background .2s linear,color .2s linear;-webkit-appearance:none;-moz-appearance:none;appearance:none}@media (min-width:576px){.atom-base-button{max-width:210px;padding:10px;font-size:14px}}@media (min-width:768px){.atom-base-button{padding:13px;font-size:18px}}@media (hover:none){.atom-base-button:active{color:#ebefff;background:#230ce5}}@media (hover:hover) and (pointer:fine){.atom-base-button:hover{color:#ebefff;background:#230ce5}}",""]),t.exports=o},235:function(t,n,e){"use strict";e(153)},236:function(t,n,e){var o=e(7)((function(i){return i[1]}));o.push([t.i,".atoms-text-ticker[data-v-33138d04]{width:100%;overflow:hidden;will-change:transform}.atoms-text-ticker>div[data-v-33138d04]{width:-webkit-max-content;width:max-content;font-size:0;white-space:nowrap;animation-name:tickerAnimation-data-v-33138d04;animation-duration:20s;animation-timing-function:linear;animation-iteration-count:infinite;will-change:transform}.atoms-text-ticker span[data-v-33138d04]{display:inline-block;font-size:6.875vw;white-space:nowrap}@media (min-width:576px){.atoms-text-ticker span[data-v-33138d04]{font-size:22px}}@media (min-width:768px){.atoms-text-ticker span[data-v-33138d04]{font-size:32px}}@keyframes tickerAnimation-data-v-33138d04{0%{transform:translateX(0)}to{transform:translateX(-50%)}}",""]),t.exports=o},237:function(t,n,e){"use strict";e(154)},238:function(t,n,e){var o=e(7)((function(i){return i[1]}));o.push([t.i,".organism-info .organism-info__ticker{margin-bottom:6.25vw}@media (min-width:576px){.organism-info .organism-info__ticker{margin-bottom:20px}}.organism-info .organism-info__button{display:flex;flex-grow:0;flex-shrink:0;flex-basis:99.9%;max-width:99.9%;width:99.9%;justify-content:center}.organism-info .organism-info__button:nth-child(1n){margin-right:15px;margin-left:0}.organism-info .organism-info__button:last-child{margin-right:0}.organism-info .organism-info__button:nth-child(12n){margin-right:0;margin-left:auto}",""]),t.exports=o},246:function(t,n,e){"use strict";e.r(n);var o=e(18),r={props:{label:{type:String,default:"Button Label"}}},c=(e(233),e(5)),l=Object(c.a)(r,(function(){var t=this,n=t.$createElement;return(t._self._c||n)("button",t._g({directives:[{name:"font",rawName:"v-font",value:t.$getFont("Roboto",700),expression:"$getFont('Roboto', 700)"}],staticClass:"atom-base-button"},t.$listeners),[t._v("\n  "+t._s(t.label)+"\n")])}),[],!1,null,null,null).exports,f={props:{content:{type:String,default:"Ticker Text Ticker Text Ticker Text Ticker Text Ticker Text"}}},d=(e(235),Object(c.a)(f,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{directives:[{name:"font",rawName:"v-font",value:t.$getFont("Alfa Slab One"),expression:"$getFont('Alfa Slab One')"}],staticClass:"atoms-text-ticker"},[e("div",[e("span",[t._v(t._s(t.content))]),e("span",[t._v(t._s(t.content))])])])}),[],!1,null,"33138d04",null).exports),m=e(19),x={components:{LostContainer:o.a,BaseButton:l,TextTicker:d},props:{tickerContent:{type:String,default:d.props.content.default},buttonLabel:{type:String,default:l.props.label.default},buttonLayer:{type:String,default:l.props.label.default}},methods:{onClickButton(){m.a.show(this.buttonLayer)}}},h=(e(237),Object(c.a)(x,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"organism-info"},[e("text-ticker",{staticClass:"organism-info__ticker",attrs:{content:t.tickerContent}}),t._v(" "),e("lost-container",[e("div",{staticClass:"organism-info__button"},[e("base-button",{attrs:{label:t.buttonLabel},on:{click:t.onClickButton}})],1)])],1)}),[],!1,null,null,null));n.default=h.exports}}]);