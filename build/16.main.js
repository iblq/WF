/*! 2019-10-31 10:06:26 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{657:function(e,a,n){"use strict";n.r(a);var t=n(709),r=n(678),l=n(1),i=n.n(l),s=n(72);function u(){return(u=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}var o={labelCol:{xs:{span:24},sm:{span:6}},wrapperCol:{xs:{span:24},sm:{span:18}}};a.default=t.a.create()(function(e){var a=e.form.getFieldDecorator,n=s.a.get("config"),l=n.nginxPath,c=n.nginxCmdPath,m=n.readDirList;return i.a.createElement(t.a,u({},o,{onSubmit:function(){}}),i.a.createElement("h3",null,"Nginx"),i.a.createElement(t.a.Item,{label:"\u914d\u7f6e\u6587\u4ef6\u8def\u5f84"},a("nginxPath",{rules:[{required:!0,message:"Please input your nginxPath!"}],initialValue:l})(i.a.createElement(r.a,null))),i.a.createElement(t.a.Item,{label:"\u547d\u4ee4\u8def\u5f84"},a("nginxCmdPath",{rules:[{required:!0,message:"Please input your nginxCmdPath!"}],initialValue:c})(i.a.createElement(r.a,null))),i.a.createElement("h3",null,"\u6587\u6863\u3001\u9879\u76ee\u76f8\u5173"),i.a.createElement(t.a.Item,{label:"\u641c\u7d22\u6587\u4ef6\u5939"},a("readDirList",{rules:[{required:!0,message:"Please input your readDirList!"}],initialValue:m})(i.a.createElement(r.a.TextArea,{row:3}))))})}}]);