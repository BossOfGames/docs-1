"use strict";(self.webpackChunkphpvms_docs=self.webpackChunkphpvms_docs||[]).push([[6775],{4137:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=s(r),d=i,f=c["".concat(u,".").concat(d)]||c[d]||m[d]||o;return r?n.createElement(f,a(a({ref:t},p),{},{components:r})):n.createElement(f,a({ref:t},p))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[c]="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},51:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c}});var n=r(7462),i=r(3366),o=(r(7294),r(4137)),a=["components"],l={id:"requirements",title:"Requirements"},u=void 0,s={unversionedId:"requirements",id:"requirements",title:"Requirements",description:"Server Requirements",source:"@site/docs/requirements.mdx",sourceDirName:".",slug:"/requirements",permalink:"/requirements",draft:!1,editUrl:"https://github.com/phpvms/docs/tree/master/docs/requirements.mdx",tags:[],version:"current",frontMatter:{id:"requirements",title:"Requirements"},sidebar:"docs",previous:{title:"Introduction",permalink:"/"},next:{title:"Download",permalink:"/download"}},p={},c=[{value:"Server Requirements",id:"server-requirements",level:2},{value:"Optional",id:"optional",level:5},{value:"Shared Hosting",id:"shared-hosting",level:3},{value:"VPS/Dedicated Hosts",id:"vpsdedicated-hosts",level:3}],m={toc:c},d="wrapper";function f(e){var t=e.components,r=(0,i.Z)(e,a);return(0,o.kt)(d,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"server-requirements"},"Server Requirements"),(0,o.kt)("p",null,"One of the first steps in the installer is to check your server for the proper requirements."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"PHP 8.0+; extensions required (most of these are installed by default):",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"cURL"),(0,o.kt)("li",{parentName:"ul"},"JSON"),(0,o.kt)("li",{parentName:"ul"},"fileinfo"),(0,o.kt)("li",{parentName:"ul"},"mbstring"),(0,o.kt)("li",{parentName:"ul"},"openssl"),(0,o.kt)("li",{parentName:"ul"},"pdo"),(0,o.kt)("li",{parentName:"ul"},"tokenizer"),(0,o.kt)("li",{parentName:"ul"},"bcmath"),(0,o.kt)("li",{parentName:"ul"},"intl"))),(0,o.kt)("li",{parentName:"ul"},"Database:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"MySQL 5.7+ (or MySQL variant, including MariaDB and Percona)")))),(0,o.kt)("h5",{id:"optional"},"Optional"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://php.net/manual/en/book.apc.php"},"php-apc")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://redis.io"},"Redis")," (for job queuing, various caching and optimizations)")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"shared-hosting"},"Shared Hosting"),(0,o.kt)("p",null,"While shared hosts are not ideal for numerous reasons (don't use free hosts, you'll have\na really bad time), it's still possible to run phpVMS. Read the "),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"vpsdedicated-hosts"},"VPS/Dedicated Hosts"),(0,o.kt)("p",null,"If you have control over your server, the combination of nginx/php-fpm will offer you\nthe best performance, over using Apache. It's the combination that I test with.\nIt will also be much more secure, seeing that only the ",(0,o.kt)("inlineCode",{parentName:"p"},"/public")," directory is exposed."),(0,o.kt)("p",null,"Pointing the vhost to the ",(0,o.kt)("inlineCode",{parentName:"p"},"/public")," directory is the best way to run on a host that you\ncontrol."))}f.isMDXComponent=!0}}]);