/*! 2019-10-31 10:06:26 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[7,15],{654:function(e,t,n){"use strict";n.r(t);var r=n(710),o=n(678),c=n(1),a=n.n(c);function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,o=!1,c=void 0;try{for(var a,u=e[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,c=e}finally{try{r||null==u.return||u.return()}finally{if(o)throw c}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}t.default=function(e){var t=e.saveData,n=e.onCancel,i=u(Object(c.useState)(""),2),s=i[0],f=i[1],l=Object(c.useRef)();Object(c.useEffect)(function(){setTimeout(function(){l.current&&l.current.focus()},0)},[]);return a.a.createElement(r.a,{title:"\u8bf7\u8f93\u5165\u7ba1\u7406\u5458\u5bc6\u7801",visible:!0,width:300,onOk:function(){t(s)},onCancel:n},a.a.createElement(o.a,{ref:l,id:"input",type:"password",style:{width:"100%"},onPressEnter:function(){t(s)},onChange:function(e){f(e.target.value)}}))}},659:function(e,t,n){"use strict";n.r(t),function(e){var r=n(47),o=n(669),c=n(673),a=n(684),u=n(685),i=n(72),s=n(1),f=n(687),l=n(654),p=n(170),m=n(172);function y(e,t,n,r,o,c,a){try{var u=e[c](a),i=u.value}catch(e){return void n(e)}u.done?t(i):Promise.resolve(i).then(r,o)}function b(e){return function(){var t=this,n=arguments;return new Promise(function(r,o){var c=e.apply(t,n);function a(e){y(c,r,o,a,u,"next",e)}function u(e){y(c,r,o,a,u,"throw",e)}a(void 0)})}}function v(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,o=!1,c=void 0;try{for(var a,u=e[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,c=e}finally{try{r||null==u.return||u.return()}finally{if(o)throw c}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var h=window.require("path"),d=window.require("electron").remote.app.getPath("home");t.default=function(){var t=i.a.get("config"),n=t.hostPath,y=t.sudo_pswd,g=v(Object(s.useState)(""),2),w=g[0],O=g[1],j=v(Object(s.useState)(!1),2),x=j[0],E=j[1],S=v(Object(s.useState)("success"),2),P=S[0],k=S[1],C=v(Object(s.useState)(y),2),_=C[0],D=C[1],R=Object(s.useRef)("");R.current=w,Object(s.useEffect)(function(){A()},[]);var T=function(){return E(!1)},A=(N=b(regeneratorRuntime.mark(function e(){var t,r,o;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(f.a)(n);case 2:t=e.sent,r=v(t,1),o=r[0],O(o||"");case 6:case"end":return e.stop()}},e)})),function(){return N.apply(this,arguments)}),F=(q=b(regeneratorRuntime.mark(function e(){var t,r,o,a,u,i,s;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=h.join(d,".wf_temp.txt"),k(""),"string"==typeof R.current){e.next=5;break}return c.a.error("\u4fdd\u5b58\u51fa\u9519"),e.abrupt("return");case 5:return e.next=7,Object(f.b)(t,R.current);case 7:if(r=e.sent,!v(r,1)[0]){e.next=12;break}return e.abrupt("return");case 12:return o=_?["echo '".concat(_,"' | sudo -S chmod 777 ").concat(n),'cat "'.concat(t,'" > ').concat(n),"echo '".concat(_,"' | sudo -S chmod 644 ").concat(n)].join(" && "):['cat "'.concat(t,'" > ').concat(n),"rm -rf ".concat(t)].join(" && "),e.next=15,Object(p.a)(o);case 15:if(a=e.sent,u=v(a,2),i=u[0],s=u[1]){e.next=23;break}return c.a.success("\u4fdd\u5b58\u6210\u529f"),k("success"),e.abrupt("return");case 23:!_||Object(m.a)(i+s)?E(!0):c.a.error(s);case 24:case"end":return e.stop()}},e)})),function(){return q.apply(this,arguments)});var q;var N;return e.createElement(e.Fragment,null,e.createElement("div",{style:{marginBottom:12}},e.createElement(o.a,{size:"small",onClick:A},"\u7f16\u8f91"),e.createElement(o.a,{type:"primary",size:"small",style:{marginLeft:12},onClick:F},"\u4fdd\u5b58"),e.createElement("div",{className:"g-sm-info"},"\u5982\u6709\u9519\u8bef\u8bf7\u68c0\u67e5 setting \u9875\u9762\u547d\u4ee4\u914d\u7f6e\u662f\u5426\u6b63\u786e"),e.createElement("div",{style:{color:a.a[P],fontSize:"16px",height:32},className:"g-fr"},"success"===P&&e.createElement(r.a,{type:"check-circle"}),"error"===P&&e.createElement(r.a,{type:"close-circle"}))),e.createElement("div",{className:"g-content"},e.createElement(u.a,{value:w,options:{mode:"shell"},onChange:function(e){return O(e)},onSave:F}),x&&e.createElement(l.default,{saveData:function(e){i.a.set("config",{sudo_pswd:e}),D(e),T()},onCancel:T})))}}.call(this,n(1))},684:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var r={success:"#52c41a",error:"#f5222d"}},685:function(e,t,n){"use strict";var r=n(667),o=n.n(r),c=(n(701),n(702),n(703),n(704),n(705),n(0)),a=n.n(c),u=n(1),i=n.n(u),s=n(686),f=n.n(s);function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d=function(e){function t(){var e,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,c=new Array(r),a=0;a<r;a++)c[a]=arguments[a];return(n=b(this,(e=v(t)).call.apply(e,[this].concat(c)))).initCm=function(){var e=n.props,t=e.value,r=e.options,c=e.onSave;n.cm=o.a.fromTextArea(n.textRef,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(n,!0).forEach(function(t){m(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({lineNumbers:!0,matchBrackets:!0,keyMap:"sublime",mode:"nginx"},r||{})),n.cm.setOption("extraKeys",{"Cmd-S":function(){c&&c()}}),n.cm.on("change",function(){return n._onChange()}),n.cm.getDoc().setValue(t||"")},n._onChange=function(){var e=n.cm.getDoc().getValue();n.props.onChange(e)},n}var n,r,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(t,i.a.Component),n=t,(r=[{key:"componentDidMount",value:function(){this.initCm()}},{key:"componentDidUpdate",value:function(e){this.props.value&&!e.value&&this.cm.getDoc().setValue(this.props.value||"")}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:f.a.textarea},i.a.createElement("textarea",{ref:function(t){return e.textRef=t},onChange:function(){}}))}}])&&y(n.prototype,r),c&&y(n,c),t}();d.propTypes={onChange:a.a.func.isRequired,onSave:a.a.func,options:a.a.object,value:a.a.string},t.a=d},686:function(e,t,n){e.exports={textarea:"_1jDF2mxCHOgLFbxo0k05qs"}},687:function(e,t,n){"use strict";n.d(t,"b",function(){return c}),n.d(t,"a",function(){return u});var r=n(172),o=window.require("fs"),c=function(e,t){return Object(r.b)(new Promise(function(n,r){!function(e,t,n){o.writeFile(e,t,"utf-8",n)}(e,t,function(e,t){return e?r(e):n(t)})}))},a=function(e,t){!function(e){try{if(o.statSync(e).isFile())return!0}catch(e){}return!1}(e)?t(null,""):o.readFile(e,"utf-8",t)},u=function(e){return Object(r.b)(new Promise(function(t,n){a(e,function(e,r){return e?n(e):t(r)})}))}}}]);