/*! 2019-10-31 10:06:26 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{654:function(t,n,e){"use strict";e.r(n);var r=e(710),a=e(678),u=e(1),o=e.n(u);function i(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var e=[],r=!0,a=!1,u=void 0;try{for(var o,i=t[Symbol.iterator]();!(r=(o=i.next()).done)&&(e.push(o.value),!n||e.length!==n);r=!0);}catch(t){a=!0,u=t}finally{try{r||null==i.return||i.return()}finally{if(a)throw u}}return e}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n.default=function(t){var n=t.saveData,e=t.onCancel,c=i(Object(u.useState)(""),2),f=c[0],s=c[1],l=Object(u.useRef)();Object(u.useEffect)(function(){setTimeout(function(){l.current&&l.current.focus()},0)},[]);return o.a.createElement(r.a,{title:"\u8bf7\u8f93\u5165\u7ba1\u7406\u5458\u5bc6\u7801",visible:!0,width:300,onOk:function(){n(f)},onCancel:e},o.a.createElement(a.a,{ref:l,id:"input",type:"password",style:{width:"100%"},onPressEnter:function(){n(f)},onChange:function(t){s(t.target.value)}}))}}}]);