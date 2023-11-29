"use strict";(self.webpackChunkphpvms_docs=self.webpackChunkphpvms_docs||[]).push([[5593],{4137:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),f=i,h=d["".concat(c,".").concat(f)]||d[f]||u[f]||r;return n?o.createElement(h,a(a({ref:t},p),{},{components:n})):o.createElement(h,a({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:i,a[1]=s;for(var l=2;l<r;l++)a[l]=n[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},6662:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var o=n(7462),i=(n(7294),n(4137));const r={id:"notifications",title:"Notifications"},a="Notifications",s={unversionedId:"config/notifications",id:"config/notifications",title:"Notifications",description:"phpVMS can send event notifications to different places. Currently, Discord is supported. Some of the events that are supported:",source:"@site/docs/config/notifications.mdx",sourceDirName:"config",slug:"/config/notifications",permalink:"/config/notifications",draft:!1,editUrl:"https://github.com/phpvms/docs/tree/master/docs/config/notifications.mdx",tags:[],version:"current",frontMatter:{id:"notifications",title:"Notifications"},sidebar:"docs",previous:{title:"Optimizing",permalink:"/config/optimizing"},next:{title:"Layouts and Template Basics",permalink:"/customize/layouts"}},c={},l=[{value:"Discord",id:"discord",level:2},{value:"1. Create a Webhook(s)",id:"1-create-a-webhooks",level:4},{value:"2. Add the webhook(s) into settings",id:"2-add-the-webhooks-into-settings",level:4}],p={toc:l},d="wrapper";function u(e){let{components:t,...r}=e;return(0,i.kt)(d,(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"notifications"},"Notifications"),(0,i.kt)("p",null,"phpVMS can send event notifications to different places. Currently, Discord is supported. Some of the events that are supported:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"PIREP prefile notifications"),(0,i.kt)("li",{parentName:"ul"},"PIREP state changes (boarding, taxi, landed, etc)"),(0,i.kt)("li",{parentName:"ul"},"PIREP filed"),(0,i.kt)("li",{parentName:"ul"},"News added")),(0,i.kt)("p",null,"You can also setup a private webhook, going to another channel, which might have more restricted permissions:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"User Registrations")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"discord"},"Discord"),(0,i.kt)("p",null,"phpVMS can send notifications to a Discord channel. To configure this, you need to create a webhook. ",(0,i.kt)("a",{parentName:"p",href:"https://support.discord.com/hc/en-us/articles/228383668-Intro-to-Webhooks"},"See the documentation for webhooks from Discord"),". This requires a webhook for the notification of public events, and an optional for private events (user registrations)"),(0,i.kt)("h4",{id:"1-create-a-webhooks"},"1. Create a Webhook(s)"),(0,i.kt)("p",null,"To create a webhook, edit the channel you want the webhook to go into (you can move the webhook to another channel later)"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(8939).Z,width:"276",height:"85"})),(0,i.kt)("p",null,'Then select integrations, and then "View Webhooks", then select integrations'),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(1553).Z,width:"928",height:"282"})),(0,i.kt)("p",null,'Then click "Add Webhook", and fill in the information'),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(1490).Z,width:"781",height:"659"})),(0,i.kt)("p",null,"Copy the webhook, URL, you'll need this for the admin panel"),(0,i.kt)("h4",{id:"2-add-the-webhooks-into-settings"},"2. Add the webhook(s) into settings"),(0,i.kt)("p",null,"Next, go to your admin panel and add the webhook into the settings:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(1703).Z,width:"1494",height:"419"})))}u.isMDXComponent=!0},1490:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/create-webhook-46b3b91a311a6486c8525736c253b3cf.png"},1703:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/discord-setting-9bb49126229f75bc51d5a2255ae168de.png"},8939:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/edit-channel-2dff52c379828c096f8045f9b0037fbd.png"},1553:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/integrations-7d322d5d6d1a8064948c12fa93acdd8c.png"}}]);