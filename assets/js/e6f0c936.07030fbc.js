"use strict";(self.webpackChunkphpvms_docs=self.webpackChunkphpvms_docs||[]).push([[531],{4137:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[d]="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4183:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var r=n(7462),o=(n(7294),n(4137));const a={id:"download",title:"Download"},l=void 0,i={unversionedId:"download",id:"download",title:"Download",description:"There are a few ways you can obtain phpVMS and its dependencies. The full package method already includes the vendor directory and you don't need to do anything but upload it.",source:"@site/docs/download.mdx",sourceDirName:".",slug:"/download",permalink:"/download",draft:!1,editUrl:"https://github.com/phpvms/docs/tree/master/docs/download.mdx",tags:[],version:"current",frontMatter:{id:"download",title:"Download"},sidebar:"docs",previous:{title:"Requirements",permalink:"/requirements"},next:{title:"Basics",permalink:"/guides/basics"}},p={},s=[{value:"Downloading Full Package",id:"downloading-full-package",level:2},{value:"Cloning the Repository",id:"cloning-the-repository",level:2}],c={toc:s},d="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"There are a few ways you can obtain phpVMS and its dependencies. The full package method already includes the ",(0,o.kt)("inlineCode",{parentName:"p"},"vendor")," directory and you don't need to do anything but upload it."),(0,o.kt)("h2",{id:"downloading-full-package"},"Downloading Full Package"),(0,o.kt)("p",null,"The zip/tar file from the downloads site contains all of the dependencies."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Use the ",(0,o.kt)("strong",{parentName:"p"},"development branch")," version, as the latest beta is very out of date.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/nabeelio/phpvms/releases"},"Official releases and pre-releases")," - The latest released versions"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://downloads.phpvms.net/phpvms-7.0.0-dev.tar.gz"},"Development branch")," - The latest commit, potentially unstable")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"cloning-the-repository"},"Cloning the Repository"),(0,o.kt)("p",null,"If you chose to instead clone it from Github, rather than download it from above, you can do the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/nabeelio/phpvms.git\ncd phpvms\ncomposer install\n")),(0,o.kt)("p",null,"After running ",(0,o.kt)("inlineCode",{parentName:"p"},"composer install"),", you can continue the installation instructions."))}u.isMDXComponent=!0}}]);