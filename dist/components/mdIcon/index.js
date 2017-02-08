/*!
* Vue Material v0.7.0
* Made with love by Marcos Moura
* Released under the MIT License.
*/   
!(function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.VueMaterial=t():e.VueMaterial=t()})(this,(function(){return (function(e){function t(r){if(n[r])return n[r].exports;var s=n[r]={i:r,l:!1,exports:{}};return e[r].call(s.exports,s,s.exports,t),s.l=!0,s.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=409)})({0:function(e,t){e.exports=function(e,t,n,r){var s,o=e=e||{},i=typeof e.default;"object"!==i&&"function"!==i||(s=e,o=e.default);var c="function"==typeof o?o.options:o;if(t&&(c.render=t.render,c.staticRenderFns=t.staticRenderFns),n&&(c._scopeId=n),r){var a=c.computed||(c.computed={});Object.keys(r).forEach((function(e){var t=r[e];a[e]=function(){return t}}))}return{esModule:s,exports:o,options:c}}},1:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{mdTheme:String},data:function(){return{closestThemedParent:!1}},methods:{getClosestThemedParent:function(e){return!(!e||!e.$el||0===e._uid)&&(e.mdTheme||e.mdName?e:this.getClosestThemedParent(e.$parent))}},computed:{themeClass:function(){if(this.mdTheme)return"md-theme-"+this.mdTheme;var e=this.closestThemedParent.mdTheme;return e||(e=this.closestThemedParent?this.closestThemedParent.mdName:this.$material.currentTheme),"md-theme-"+e}},mounted:function(){this.closestThemedParent=this.getClosestThemedParent(this.$parent),this.$material.currentTheme||this.$material.setCurrentTheme("default")}},e.exports=t.default},101:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function s(e){e.component("md-icon",i.default),e.material.styles.push(a.default)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=s;var o=n(288),i=r(o),c=n(242),a=r(c);e.exports=t.default},151:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=n(1),o=r(s),i={};t.default={props:{mdSrc:String,mdIconset:{type:String,default:"material-icons"}},data:function(){return{svgContent:null,imageSrc:null}},mixins:[o.default],watch:{mdSrc:function(){this.svgContent=null,this.imageSrc=null,this.checkSrc()}},methods:{isImage:function(e){return e.indexOf("image")>=0},isSVG:function(e){return e.indexOf("svg")>=0},setSVGContent:function(e){var t=this;this.svgContent=e,this.$nextTick((function(){t.$el.children[0].removeAttribute("fill")}))},loadSVG:function(){var e=this;i[this.mdSrc]?this.setSVGContent(i[this.mdSrc]):!(function(){var t=new XMLHttpRequest,n=e;t.open("GET",e.mdSrc,!0),t.onload=function(){var e=this.getResponseHeader("content-type");this.status>=200&&this.status<400&&n.isImage(e)?n.isSVG(e)?(i[n.mdSrc]=this.response,n.setSVGContent(this.response)):n.loadImage():console.warn("The file "+n.mdSrc+" is not a valid image.")},t.send()})()},loadImage:function(){this.imageSrc=this.mdSrc},checkSrc:function(){this.mdSrc&&(this.mdSrc.indexOf(".svg")>=0?this.loadSVG():this.loadImage())}},mounted:function(){this.checkSrc()}},e.exports=t.default},207:function(e,t){},242:function(e,t){e.exports=".THEME_NAME.md-icon.md-primary{color:PRIMARY-COLOR}.THEME_NAME.md-icon.md-accent{color:ACCENT-COLOR}.THEME_NAME.md-icon.md-warn{color:WARN-COLOR}\n"},288:function(e,t,n){n(207);var r=n(0)(n(151),n(348),null,null);e.exports=r.exports},348:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.svgContent?n("i",{staticClass:"md-icon",class:[e.themeClass],domProps:{innerHTML:e._s(e.svgContent)}}):e.imageSrc?n("md-image",{staticClass:"md-icon",class:[e.themeClass],attrs:{"md-src":e.imageSrc}}):n("i",{staticClass:"md-icon",class:[e.themeClass,e.mdIconset],attrs:{"aria-hidden":!!e.mdIconset}},[e._t("default")],2)},staticRenderFns:[]}},409:function(e,t,n){e.exports=n(101)}})}));