"use strict";(self.webpackChunkphpvms_docs=self.webpackChunkphpvms_docs||[]).push([[4462],{4137:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),p=u(n),d=i,m=p["".concat(l,".").concat(d)]||p[d]||f[d]||o;return n?r.createElement(m,s(s({ref:t},c),{},{components:n})):r.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,s=new Array(o);s[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[p]="string"==typeof e?e:i,s[1]=a;for(var u=2;u<o;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9693:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return a},metadata:function(){return u},toc:function(){return p}});var r=n(7462),i=n(3366),o=(n(7294),n(4137)),s=["components"],a={id:"issues",title:"Installation Issues"},l=void 0,u={unversionedId:"installation/issues",id:"installation/issues",title:"Installation Issues",description:"Installer 404",source:"@site/docs/installation/issues.mdx",sourceDirName:"installation",slug:"/installation/issues",permalink:"/installation/issues",draft:!1,editUrl:"https://github.com/phpvms/docs/tree/master/docs/installation/issues.mdx",tags:[],version:"current",frontMatter:{id:"issues",title:"Installation Issues"},sidebar:"docs",previous:{title:"Updating",permalink:"/installation/updating"},next:{title:"Config Files",permalink:"/config/files"}},c={},p=[{value:"Installer 404",id:"installer-404",level:2},{value:"Permissions Errors",id:"permissions-errors",level:2}],f={toc:p},d="wrapper";function m(e){var t=e.components,n=(0,i.Z)(e,s);return(0,o.kt)(d,(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"installer-404"},"Installer 404"),(0,o.kt)("p",null,"If you're getting a 404 when trying to access the installer, this is either because:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"You haven't uploaded the files properly - ",(0,o.kt)("a",{parentName:"li",href:"/installation/uploading"},"read Uploading Files")),(0,o.kt)("li",{parentName:"ol"},"Your vhost isn't correct - ",(0,o.kt)("a",{parentName:"li",href:"/installation/vhost"},"read VHost Configuration")),(0,o.kt)("li",{parentName:"ol"},"Your host doesn't support ",(0,o.kt)("inlineCode",{parentName:"li"},".htaccess")," files - contact your host")),(0,o.kt)("h2",{id:"permissions-errors"},"Permissions Errors"),(0,o.kt)("p",null,"The installer will present a list of folders which need to have write access by your webserver user. Contact your host if you're having problems with this."))}m.isMDXComponent=!0}}]);