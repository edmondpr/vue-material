/*!
* Vue Material v0.7.0
* Made with love by Marcos Moura
* Released under the MIT License.
*/   
!(function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.VueMaterial=e():t.VueMaterial=e()})(this,(function(){return (function(t){function e(r){if(o[r])return o[r].exports;var d=o[r]={i:r,l:!1,exports:{}};return t[r].call(d.exports,d,d.exports,e),d.l=!0,d.exports}var o={};return e.m=t,e.c=o,e.i=function(t){return t},e.d=function(t,o,r){e.o(t,o)||Object.defineProperty(t,o,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var o=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(o,"a",o),o},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/",e(e.s=399)})({0:function(t,e){t.exports=function(t,e,o,r){var d,m=t=t||{},n=typeof t.default;"object"!==n&&"function"!==n||(d=t,m=t.default);var a="function"==typeof m?m.options:m;if(e&&(a.render=e.render,a.staticRenderFns=e.staticRenderFns),o&&(a._scopeId=o),r){var i=a.computed||(a.computed={});Object.keys(r).forEach((function(t){var e=r[t];i[t]=function(){return e}}))}return{esModule:d,exports:m,options:a}}},1:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{mdTheme:String},data:function(){return{closestThemedParent:!1}},methods:{getClosestThemedParent:function(t){return!(!t||!t.$el||0===t._uid)&&(t.mdTheme||t.mdName?t:this.getClosestThemedParent(t.$parent))}},computed:{themeClass:function(){if(this.mdTheme)return"md-theme-"+this.mdTheme;var t=this.closestThemedParent.mdTheme;return t||(t=this.closestThemedParent?this.closestThemedParent.mdName:this.$material.currentTheme),"md-theme-"+t}},mounted:function(){this.closestThemedParent=this.getClosestThemedParent(this.$parent),this.$material.currentTheme||this.$material.setCurrentTheme("default")}},t.exports=e.default},133:function(t,e,o){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var d=o(1),m=r(d);e.default={props:{mdShift:Boolean},mixins:[m.default],computed:{classes:function(){return this.mdShift?"md-shift":"md-fixed"}},methods:{setActive:function(t){this.$children.forEach((function(e){e.active=e===t})),this.$emit("change",this.$children.findIndex((function(e){return e===t})))}}},t.exports=e.default},134:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{mdIcon:String,mdIconSrc:String,mdIconset:String,mdActive:Boolean,disabled:String,href:String},data:function(){return{active:!1}},computed:{classes:function(){return{"md-active":this.active}}},watch:{mdActive:function(t){this.setActive(t)}},methods:{setActive:function(t){t&&this.$parent.setActive(this)}},mounted:function(){if(!this.$parent.$el.classList.contains("md-bottom-bar"))throw this.$destroy(),new Error("You should wrap the md-bottom-bar-item in a md-bottom-bar");this.mdActive&&(this.active=!0)}},t.exports=e.default},205:function(t,e){},234:function(t,e){t.exports=".THEME_NAME.md-bottom-bar.md-fixed{background-color:BACKGROUND-COLOR}.THEME_NAME.md-bottom-bar.md-fixed .md-bottom-bar-item{color:BACKGROUND-CONTRAST-0.54}.THEME_NAME.md-bottom-bar.md-fixed .md-bottom-bar-item:hover:not([disabled]):not(.md-active){color:BACKGROUND-CONTRAST-0.87}.THEME_NAME.md-bottom-bar.md-fixed .md-bottom-bar-item.md-active{color:PRIMARY-COLOR}.THEME_NAME.md-bottom-bar.md-fixed.md-accent .md-bottom-bar-item.md-active{color:ACCENT-COLOR}.THEME_NAME.md-bottom-bar.md-fixed.md-warn .md-bottom-bar-item.md-active{color:WARN-COLOR}.THEME_NAME.md-bottom-bar.md-fixed.md-transparent .md-bottom-bar-item.md-active{color:BACKGROUND-CONTRAST}.THEME_NAME.md-bottom-bar.md-shift{background-color:PRIMARY-COLOR;color:PRIMARY-CONTRAST}.THEME_NAME.md-bottom-bar.md-shift .md-bottom-bar-item{color:PRIMARY-CONTRAST-0.54}.THEME_NAME.md-bottom-bar.md-shift .md-bottom-bar-item:hover:not([disabled]):not(.md-active){color:PRIMARY-CONTRAST-0.87}.THEME_NAME.md-bottom-bar.md-shift .md-bottom-bar-item.md-active{color:PRIMARY-CONTRAST}.THEME_NAME.md-bottom-bar.md-shift.md-accent{background-color:ACCENT-COLOR}.THEME_NAME.md-bottom-bar.md-shift.md-accent .md-bottom-bar-item{color:ACCENT-CONTRAST-0.54}.THEME_NAME.md-bottom-bar.md-shift.md-accent .md-bottom-bar-item:hover:not([disabled]):not(.md-active){color:ACCENT-CONTRAST-0.87}.THEME_NAME.md-bottom-bar.md-shift.md-accent .md-bottom-bar-item.md-active{color:ACCENT-CONTRAST}.THEME_NAME.md-bottom-bar.md-shift.md-warn{background-color:WARN-COLOR}.THEME_NAME.md-bottom-bar.md-shift.md-warn .md-bottom-bar-item{color:WARN-CONTRAST-0.54}.THEME_NAME.md-bottom-bar.md-shift.md-warn .md-bottom-bar-item:hover:not([disabled]):not(.md-active){color:WARN-CONTRAST-0.87}.THEME_NAME.md-bottom-bar.md-shift.md-warn .md-bottom-bar-item.md-active{color:WARN-CONTRAST}.THEME_NAME.md-bottom-bar.md-shift.md-transparent{background-color:transparent}.THEME_NAME.md-bottom-bar.md-shift.md-transparent .md-bottom-bar-item{color:BACKGROUND-CONTRAST-0.54}.THEME_NAME.md-bottom-bar.md-shift.md-transparent .md-bottom-bar-item:hover:not([disabled]):not(.md-active){color:BACKGROUND-CONTRAST-0.87}.THEME_NAME.md-bottom-bar.md-shift.md-transparent .md-bottom-bar-item.md-active{color:BACKGROUND-CONTRAST}\n"},262:function(t,e,o){o(205);var r=o(0)(o(133),o(343),null,null);t.exports=r.exports},263:function(t,e,o){var r=o(0)(o(134),o(345),null,null);t.exports=r.exports},343:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"md-bottom-bar",class:[t.themeClass,t.classes]},[t._t("default")],2)},staticRenderFns:[]}},345:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.href?o("a",{staticClass:"md-bottom-bar-item",class:t.classes,attrs:{href:t.href,disabled:t.disabled},on:{click:t.setActive}},[t.mdIcon||t.mdIconSrc||t.mdIconset?o("md-icon",{attrs:{"md-icon-src":t.mdIconSrc,"md-iconset":t.mdIconset}},[t._v(t._s(t.mdIcon))]):t._e(),t._v(" "),o("md-ink-ripple",{attrs:{"md-disabled":t.disabled}}),t._v(" "),o("span",{staticClass:"md-text"},[t._t("default")],2)],1):o("button",{staticClass:"md-bottom-bar-item",class:t.classes,attrs:{type:"button",disabled:t.disabled},on:{click:t.setActive}},[t.mdIcon||t.mdIconSrc||t.mdIconset?o("md-icon",{attrs:{"md-src":t.mdIconSrc,"md-iconset":t.mdIconset}},[t._v(t._s(t.mdIcon))]):t._e(),t._v(" "),o("md-ink-ripple",{attrs:{"md-disabled":t.disabled}}),t._v(" "),o("span",{staticClass:"md-text"},[t._t("default")],2)],1)},staticRenderFns:[]}},399:function(t,e,o){t.exports=o(92)},92:function(t,e,o){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function d(t){t.component("md-bottom-bar",n.default),t.component("md-bottom-bar-item",i.default),t.material.styles.push(c.default)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=d;var m=o(262),n=r(m),a=o(263),i=r(a),s=o(234),c=r(s);t.exports=e.default}})}));