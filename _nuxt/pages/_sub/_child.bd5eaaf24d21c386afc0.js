(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{382:function(t,n,e){"use strict";e(32),e(40),e(21),e(46),e(24);var r=e(4),o=e(170);function c(path,t){return path=path.replace(/^\//,"").replace(t,"").replace(/^\//,""),"".concat(t,"/").concat(path||"index")}var l={scrollToTop:!0,asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function n(){var e,r,o,l,d,f,path,data;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.$content,r=t.store,o=t.app,l=t.error,d=t.route,f=o.i18n.locale,path=c(d.path,f),n.next=5,e(path).fetch().catch((function(t){return l(t)}));case 5:return data=n.sent,Array.isArray(data)&&(data=data.find((function(t){return"index"===t.slug}))),"routeParams"in data&&r.dispatch("i18n/setRouteParams",data.routeParams),n.abrupt("return",{title:data.title,components:data.components});case 9:case"end":return n.stop()}}),n)})))()},data:function(){return{title:"title of page",components:[]}},head:function(){return{title:this.title}},created:function(){this.components=Object(o.a)(this.components)}},d=e(19),component=Object(d.a)(l,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"content"},t._l(t.components,(function(n,r){return e(n.asyncComponent,t._b({key:r,tag:"component"},"component",n.data,!1))})),1)}),[],!1,null,null,null);n.a=component.exports},445:function(t,n,e){"use strict";e.r(n);var r={extends:e(382).a,nuxtI18n:{paths:{de:"/:sub/:child",en:"/:sub/:child"}}},o=e(19),component=Object(o.a)(r,void 0,void 0,!1,null,null,null);n.default=component.exports}}]);