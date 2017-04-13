!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("classnames"),require("react"),require("prop-types"),require("react-append-to-document"),require("react-dom"),require("react-spinner"),require("react-visible")):"function"==typeof define&&define.amd?define(["classnames","react","prop-types","react-append-to-document","react-dom","react-spinner","react-visible"],t):"object"==typeof exports?exports.ReactIndicator=t(require("classnames"),require("react"),require("prop-types"),require("react-append-to-document"),require("react-dom"),require("react-spinner"),require("react-visible")):e.ReactIndicator=t(e.classnames,e.react,e["prop-types"],e["react-append-to-document"],e["react-dom"],e["react-spinner"],e["react-visible"])}(this,function(e,t,n,r,o,i,a){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="/",t(0)}([function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var o=n(1),i=r(o),a=n(4),s=r(a);e.exports={ReactIndicator:i.default,ReactIndicatorCtrl:s.default}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s,c,u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f=function e(t,n,r){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,n);if(void 0===o){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,r)}if("value"in o)return o.value;var a=o.get;if(void 0!==a)return a.call(r)};n(9);var p=n(3),d=r(p),v=n(2),h=r(v),b=n(11),y=r(b),m=n(13),g=r(m),x=n(14),w=r(x),k=n(7),O=n(10),_=r(O),j=(c=s=function(e){function t(e){o(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e)),r=e.backdrop,a=e.text,s=e.visible,c=e.backdropStyle;return n.state={backdrop:r,text:a,backdropStyle:c,visible:s,hidden:!s,animating:!1},n}return a(t,e),l(t,[{key:"show",value:function(e,n){var r=this;this.setState(Object.assign(u({},this.props),e,{visible:!0}),function(){f(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"show",r).call(r,n)})}},{key:"render",value:function(){var e=this.state,t=e.className,n=e.text,r=e.backdrop,o=e.visible,i=e.hidden,a=e.backdropStyle;return d.default.createElement("div",{hidden:i,"data-visible":o,onTransitionEnd:this._onTransitionEnd,className:(0,h.default)("react-indicator",t)},d.default.createElement("div",{className:"react-indicator-wrapper"},d.default.createElement(g.default,{className:"spin",color:"#FFF",width:"2px"}),n&&d.default.createElement("span",{className:"text"},n)),r&&d.default.createElement(k.ReactBackdrop,{visible:o,style:a}))}}],[{key:"newInstance",value:function(e){return(0,y.default)(t,e,{className:"indicator-container"})}}]),t}(w.default),s.propTypes={text:_.default.string,backdrop:_.default.bool,backdropStyle:_.default.object},s.defaultProps={backdrop:!0,text:null,backdropStyle:{opacity:.5}},c);t.default=j},function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(1),s=r(a),c=void 0,u=function(){function e(){o(this,e)}return i(e,null,[{key:"createInstance",value:function(e){return c=c||s.default.newInstance(e)}},{key:"show",value:function(e,t){c.component.show(e,t)}},{key:"hide",value:function(e){c.component.hide(e)}},{key:"destroy",value:function(){c.destroy(),c=null}}]),e}();t.default=u},function(e,t,n){t=e.exports=n(6)(),t.push([e.id,".react-indicator{-webkit-transition:opacity .3s linear,z-index .4s linear;transition:opacity .3s linear,z-index .4s linear}.react-indicator-wrapper{position:absolute;top:38.2%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);border-radius:5px;background:rgba(0,0,0,.7);color:#fff;box-sizing:border-box;text-align:center;padding:20px}.react-indicator-wrapper>.text{display:block;color:#fff;text-align:center;margin-top:10px;font-size:16px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.react-indicator-wrapper>.spin{display:inline-block;text-align:center}.react-indicator[data-visible=false]{opacity:0;z-index:-1}.react-indicator[data-visible=false] .react-indicator-wrapper{z-index:-1}.react-indicator[data-visible=true]{opacity:1;z-index:1}.react-indicator[data-visible=true] .react-indicator-wrapper{z-index:1}",""])},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<t.length;o++){var a=t[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(e,t,n){!function(t,r){e.exports=r(n(3),n(2),n(12))}(this,function(e,t,n){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="/",t(0)}([function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var o=n(1),i=r(o),a=n(3),s=r(a);e.exports={ReactBackdrop:i.default,ReactBackdropCtrl:s.default}},function(e,t,n){(function(e){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();n(9);var c=n(7),u=r(c),l=n(10),f=r(l),p=n(6),d=r(p),v=function(t){function n(e){o(this,n);var t=i(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.state={visible:e.visible,animating:!1},t}return a(n,t),s(n,null,[{key:"newInstance",value:function(e){return(0,u.default)(n,e,{className:"backdrop-wrapper"})}}]),s(n,[{key:"componentWillReceiveProps",value:function(e,t){this.setState(e)}},{key:"show",value:function(){this.state.visible||this._setVisible(!0,this.props.onShown)}},{key:"hide",value:function(){this.state.visible&&this._setVisible(!1,this.props.onHidden)}},{key:"_setVisible",value:function(e,t){var n=this;this.setState({animating:!0}),setTimeout(function(){n.setState({visible:e},function(){t(n.state)})})}},{key:"_onTransitionEnd",value:function(){this.setState({animating:!1})}},{key:"render",value:function(){return e.createElement("div",{style:this.props.style,hidden:!this.state.visible&&!this.state.animating,"data-visible":this.state.visible,onClick:this.props.onClick,onTransitionEnd:this._onTransitionEnd.bind(this),className:(0,f.default)("react-backdrop",this.props.cssClass)})}}]),n}(e.Component);v.propTypes={visible:e.PropTypes.bool,style:e.PropTypes.object,cssClass:e.PropTypes.string,onHidden:e.PropTypes.func,onShown:e.PropTypes.func,onClick:e.PropTypes.func},v.defaultProps={visible:!1,cssClass:"",style:{},onHidden:d.default,onShown:d.default,onClick:d.default},t.default=v}).call(t,n(2))},function(t,n){t.exports=e},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(1),s=r(a),c=void 0,u=function(){function e(){o(this,e)}return i(e,null,[{key:"createInstance",value:function(e){return c=c||s.default.newInstance(e)}},{key:"show",value:function(){c.component.show()}},{key:"hide",value:function(){c.component.hide()}}]),e}();t.default=u},function(e,t,n){t=e.exports=n(5)(),t.push([e.id,".react-backdrop{left:0;top:0;bottom:0;right:0;background:#000;opacity:.3;position:absolute;-webkit-transition:opacity .3s linear;transition:opacity .3s linear}.react-backdrop[hidden]{display:none}.react-backdrop[data-visible=false]{position:absolute;opacity:0!important}.react-backdrop[data-visible=true]{position:fixed;opacity:.3}",""])},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<t.length;o++){var a=t[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(e,t){e.exports=function(){}},function(e,t,n){(function(t,n){e.exports=function(e,r,o){var i=document.createElement("div"),a=document.body;for(var s in o)o.hasOwnProperty(s)&&(i[s]=o[s]);a.appendChild(i);const c=t.render(n.createElement(e,r),i);return{component:c,destroy:function(){t.unmountComponentAtNode(i),a.removeChild(i)}}}}).call(t,n(11),n(2))},function(e,t,n){function r(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=d[r.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](r.parts[i]);for(;i<r.parts.length;i++)o.parts.push(u(r.parts[i],t))}else{for(var a=[],i=0;i<r.parts.length;i++)a.push(u(r.parts[i],t));d[r.id]={id:r.id,refs:1,parts:a}}}}function o(e){for(var t=[],n={},r=0;r<e.length;r++){var o=e[r],i=o[0],a=o[1],s=o[2],c=o[3],u={css:a,media:s,sourceMap:c};n[i]?n[i].parts.push(u):t.push(n[i]={id:i,parts:[u]})}return t}function i(e,t){var n=b(),r=g[g.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),g.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function a(e){e.parentNode.removeChild(e);var t=g.indexOf(e);t>=0&&g.splice(t,1)}function s(e){var t=document.createElement("style");return t.type="text/css",i(e,t),t}function c(e){var t=document.createElement("link");return t.rel="stylesheet",i(e,t),t}function u(e,t){var n,r,o;if(t.singleton){var i=m++;n=y||(y=s(t)),r=l.bind(null,n,i,!1),o=l.bind(null,n,i,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=c(t),r=p.bind(null,n),o=function(){a(n),n.href&&URL.revokeObjectURL(n.href)}):(n=s(t),r=f.bind(null,n),o=function(){a(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}function l(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=x(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function f(e,t){var n=t.css,r=t.media;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function p(e,t){var n=t.css,r=t.sourceMap;r&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var o=new Blob([n],{type:"text/css"}),i=e.href;e.href=URL.createObjectURL(o),i&&URL.revokeObjectURL(i)}var d={},v=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},h=v(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),b=v(function(){return document.head||document.getElementsByTagName("head")[0]}),y=null,m=0,g=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=h()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var n=o(e);return r(n,t),function(e){for(var i=[],a=0;a<n.length;a++){var s=n[a],c=d[s.id];c.refs--,i.push(c)}if(e){var u=o(e);r(u,t)}for(var a=0;a<i.length;a++){var c=i[a];if(0===c.refs){for(var l=0;l<c.parts.length;l++)c.parts[l]();delete d[c.id]}}}};var x=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t,n){var r=n(4);"string"==typeof r&&(r=[[e.id,r,""]]),n(8)(r,{}),r.locals&&(e.exports=r.locals)},function(e,n){e.exports=t},function(e,t){e.exports=n}])})},function(e,t,n){function r(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=d[r.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](r.parts[i]);for(;i<r.parts.length;i++)o.parts.push(u(r.parts[i],t))}else{for(var a=[],i=0;i<r.parts.length;i++)a.push(u(r.parts[i],t));d[r.id]={id:r.id,refs:1,parts:a}}}}function o(e){for(var t=[],n={},r=0;r<e.length;r++){var o=e[r],i=o[0],a=o[1],s=o[2],c=o[3],u={css:a,media:s,sourceMap:c};n[i]?n[i].parts.push(u):t.push(n[i]={id:i,parts:[u]})}return t}function i(e,t){var n=b(),r=g[g.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),g.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function a(e){e.parentNode.removeChild(e);var t=g.indexOf(e);t>=0&&g.splice(t,1)}function s(e){var t=document.createElement("style");return t.type="text/css",i(e,t),t}function c(e){var t=document.createElement("link");return t.rel="stylesheet",i(e,t),t}function u(e,t){var n,r,o;if(t.singleton){var i=m++;n=y||(y=s(t)),r=l.bind(null,n,i,!1),o=l.bind(null,n,i,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=c(t),r=p.bind(null,n),o=function(){a(n),n.href&&URL.revokeObjectURL(n.href)}):(n=s(t),r=f.bind(null,n),o=function(){a(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}function l(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=x(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function f(e,t){var n=t.css,r=t.media;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function p(e,t){var n=t.css,r=t.sourceMap;r&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var o=new Blob([n],{type:"text/css"}),i=e.href;e.href=URL.createObjectURL(o),i&&URL.revokeObjectURL(i)}var d={},v=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},h=v(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),b=v(function(){return document.head||document.getElementsByTagName("head")[0]}),y=null,m=0,g=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=h()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var n=o(e);return r(n,t),function(e){for(var i=[],a=0;a<n.length;a++){var s=n[a],c=d[s.id];c.refs--,i.push(c)}if(e){var u=o(e);r(u,t)}for(var a=0;a<i.length;a++){var c=i[a];if(0===c.refs){for(var l=0;l<c.parts.length;l++)c.parts[l]();delete d[c.id]}}}};var x=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t,n){var r=n(5);"string"==typeof r&&(r=[[e.id,r,""]]);n(8)(r,{});r.locals&&(e.exports=r.locals)},function(e,t){e.exports=n},function(e,t){e.exports=r},function(e,t){e.exports=o},function(e,t){e.exports=i},function(e,t){e.exports=a}])});
//# sourceMappingURL=react-indicator.js.map