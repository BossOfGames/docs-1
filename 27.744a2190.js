(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{114:function(e,t,n){"use strict";const a=(e,{target:t=document.body}={})=>{const n=document.createElement("textarea"),a=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const r=document.getSelection();let o=!1;r.rangeCount>0&&(o=r.getRangeAt(0)),t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let c=!1;try{c=document.execCommand("copy")}catch(l){}return n.remove(),o&&(r.removeAllRanges(),r.addRange(o)),a&&a.focus(),c};e.exports=a,e.exports.default=a},115:function(e,t){e.exports.parse=function(e){var t=e.split(",").map((function(e){return function(e){if(/^-?\d+$/.test(e))return parseInt(e,10);var t;if(t=e.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){var n=t[1],a=t[2],r=t[3];if(n&&r){var o=[],c=(n=parseInt(n))<(r=parseInt(r))?1:-1;"-"!=a&&".."!=a&&"\u2025"!=a||(r+=c);for(var l=n;l!=r;l+=c)o.push(l);return o}}return[]}(e)}));return 0===t.length?[]:1===t.length?Array.isArray(t[0])?t[0]:t:t.reduce((function(e,t){return Array.isArray(e)||(e=[e]),Array.isArray(t)||(t=[t]),e.concat(t)}))}},81:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,y=p["".concat(c,".").concat(d)]||p[d]||m[d]||o;return n?r.a.createElement(y,l(l({ref:t},s),{},{components:n})):r.a.createElement(y,l({ref:t},s))}));d.displayName="MDXCreateElement";var y=n(85),f=n(21),h=n(102),b=n(2),g=n(6),v=n(86),k=n(91),j=n(99),O=n(100),E=n(101),C=n(98),N=n(87),x=n(89),P=n(56),w=n.n(P);var _=function e(t,n){return"link"===t.type?(a=t.href,r=n,(o=function(e){return e.endsWith("/")?e:e+"/"})(a)===o(r)):"category"===t.type&&t.items.some((function(t){return e(t,n)}));var a,r,o};function T(e){var t,n,o,c=e.item,l=e.onItemClick,i=e.collapsible,s=e.activePath,u=Object(g.a)(e,["item","onItemClick","collapsible","activePath"]),p=c.items,m=c.label,d=_(c,s),y=(n=d,o=Object(a.useRef)(n),Object(a.useEffect)((function(){o.current=n}),[n]),o.current),f=Object(a.useState)((function(){return!!i&&(!d&&c.collapsed)})),h=f[0],k=f[1];Object(a.useEffect)((function(){d&&!y&&h&&k(!1)}),[d,y,h]);var j=Object(a.useCallback)((function(e){e.preventDefault(),k((function(e){return!e}))}),[k]);return 0===p.length?null:r.a.createElement("li",{className:Object(v.a)("menu__list-item",{"menu__list-item--collapsed":h}),key:m},r.a.createElement("a",Object(b.a)({className:Object(v.a)("menu__link",(t={"menu__link--sublist":i,"menu__link--active":i&&d},t[w.a.menuLinkText]=!i,t)),onClick:i?j:void 0,href:i?"#!":void 0},u),m),r.a.createElement("ul",{className:"menu__list"},p.map((function(e){return r.a.createElement(D,{tabIndex:h?"-1":"0",key:e.label,item:e,onItemClick:l,collapsible:i,activePath:s})}))))}function S(e){var t=e.item,n=e.onItemClick,a=e.activePath,o=(e.collapsible,Object(g.a)(e,["item","onItemClick","activePath","collapsible"])),c=t.href,l=t.label,i=_(t,a);return r.a.createElement("li",{className:"menu__list-item",key:l},r.a.createElement(N.a,Object(b.a)({className:Object(v.a)("menu__link",{"menu__link--active":i}),to:c},Object(x.a)(c)?{isNavLink:!0,exact:!0,onClick:n}:{target:"_blank",rel:"noreferrer noopener"},o),l))}function D(e){switch(e.item.type){case"category":return r.a.createElement(T,e);case"link":default:return r.a.createElement(S,e)}}var I=function(e){var t,n,o=e.path,c=e.sidebar,l=e.sidebarCollapsible,i=void 0===l||l,s=Object(a.useState)(!1),u=s[0],p=s[1],m=Object(y.a)(),d=m.siteConfig,f=(d=void 0===d?{}:d).themeConfig,h=(f=void 0===f?{}:f).navbar,g=(h=void 0===h?{}:h).title,x=void 0===g?"":g,P=h.hideOnScroll,_=void 0!==P&&P,T=m.isClient,S=Object(E.a)(),I=S.logoLink,L=S.logoLinkProps,B=S.logoImageUrl,M=S.logoAlt,A=Object(k.a)().isAnnouncementBarClosed,R=Object(C.a)().scrollY;Object(j.a)(u);var W=Object(O.a)();return Object(a.useEffect)((function(){W===O.b.desktop&&p(!1)}),[W]),r.a.createElement("div",{className:Object(v.a)(w.a.sidebar,(t={},t[w.a.sidebarWithHideableNavbar]=_,t))},_&&r.a.createElement(N.a,Object(b.a)({tabIndex:"-1",className:w.a.sidebarLogo,to:I},L),null!=B&&r.a.createElement("img",{key:T,src:B,alt:M}),null!=x&&r.a.createElement("strong",null,x)),r.a.createElement("div",{className:Object(v.a)("menu","menu--responsive",w.a.menu,(n={"menu--show":u},n[w.a.menuWithAnnouncementBar]=!A&&0===R,n))},r.a.createElement("button",{"aria-label":u?"Close Menu":"Open Menu","aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:function(){p(!u)}},u?r.a.createElement("span",{className:Object(v.a)(w.a.sidebarMenuIcon,w.a.sidebarMenuCloseIcon)},"\xd7"):r.a.createElement("svg",{"aria-label":"Menu",className:w.a.sidebarMenuIcon,xmlns:"http://www.w3.org/2000/svg",height:24,width:24,viewBox:"0 0 32 32",role:"img",focusable:"false"},r.a.createElement("title",null,"Menu"),r.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),r.a.createElement("ul",{className:"menu__list"},c.map((function(e){return r.a.createElement(D,{key:e.label,item:e,onItemClick:function(e){e.target.blur(),p(!1)},collapsible:i,activePath:o})})))))},L={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},B={Prism:n(19).a,theme:L};function M(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function A(){return(A=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var R=/\r\n|\r|\n/,W=function(e){0===e.length?e.push({types:["plain"],content:"",empty:!0}):1===e.length&&""===e[0].content&&(e[0].empty=!0)},F=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},$=function(e,t){var n=e.plain,a=Object.create(null),r=e.styles.reduce((function(e,n){var a=n.languages,r=n.style;return a&&!a.includes(t)||n.types.forEach((function(t){var n=A({},e[t],r);e[t]=n})),e}),a);return r.root=n,r.plain=A({},n,{backgroundColor:null}),r};function z(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}var J=function(e){function t(){for(var t=this,n=[],a=arguments.length;a--;)n[a]=arguments[a];e.apply(this,n),M(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?$(e.theme,e.language):void 0;return t.themeDict=n})),M(this,"getLineProps",(function(e){var n=e.key,a=e.className,r=e.style,o=A({},z(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),c=t.getThemeDict(t.props);return void 0!==c&&(o.style=c.plain),void 0!==r&&(o.style=void 0!==o.style?A({},o.style,r):r),void 0!==n&&(o.key=n),a&&(o.className+=" "+a),o})),M(this,"getStyleForToken",(function(e){var n=e.types,a=e.empty,r=n.length,o=t.getThemeDict(t.props);if(void 0!==o){if(1===r&&"plain"===n[0])return a?{display:"inline-block"}:void 0;if(1===r&&!a)return o[n[0]];var c=a?{display:"inline-block"}:{},l=n.map((function(e){return o[e]}));return Object.assign.apply(Object,[c].concat(l))}})),M(this,"getTokenProps",(function(e){var n=e.key,a=e.className,r=e.style,o=e.token,c=A({},z(e,["key","className","style","token"]),{className:"token "+o.types.join(" "),children:o.content,style:t.getStyleForToken(o),key:void 0});return void 0!==r&&(c.style=void 0!==c.style?A({},c.style,r):r),void 0!==n&&(c.key=n),a&&(c.className+=" "+a),c}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,a=e.code,r=e.children,o=this.getThemeDict(this.props),c=t.languages[n];return r({tokens:function(e){for(var t=[[]],n=[e],a=[0],r=[e.length],o=0,c=0,l=[],i=[l];c>-1;){for(;(o=a[c]++)<r[c];){var s=void 0,u=t[c],p=n[c][o];if("string"==typeof p?(u=c>0?u:["plain"],s=p):(u=F(u,p.type),p.alias&&(u=F(u,p.alias)),s=p.content),"string"==typeof s){var m=s.split(R),d=m.length;l.push({types:u,content:m[0]});for(var y=1;y<d;y++)W(l),i.push(l=[]),l.push({types:u,content:m[y]})}else c++,t.push(u),n.push(s),a.push(0),r.push(s.length)}c--,t.pop(),n.pop(),a.pop(),r.pop()}return W(l),i}(void 0!==c?t.tokenize(a,c,n):[a]),className:"prism-code language-"+n,style:void 0!==o?o.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(a.Component),H=n(114),U=n.n(H),X=n(115),Y=n.n(X),q={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},G=n(93),K=function(){var e=Object(y.a)().siteConfig.themeConfig.prism,t=void 0===e?{}:e,n=Object(G.a)().isDarkTheme,a=t.theme||q,r=t.darkTheme||a;return n?r:a},Q=n(57),V=n.n(Q),Z=/{([\d,-]+)}/,ee=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);var t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},n=["highlight-next-line","highlight-start","highlight-end"].join("|"),a=e.map((function(e){return"(?:"+t[e].start+"\\s*("+n+")\\s*"+t[e].end+")"})).join("|");return new RegExp("^\\s*(?:"+a+")\\s*$")},te=/title=".*"/,ne=function(e){var t=e.children,n=e.className,o=e.metastring,c=Object(y.a)().siteConfig.themeConfig.prism,l=void 0===c?{}:c,i=Object(a.useState)(!1),s=i[0],u=i[1],p=Object(a.useState)(!1),m=p[0],d=p[1];Object(a.useEffect)((function(){d(!0)}),[]);var f=Object(a.useRef)(null),h=[],g="",k=K();if(o&&Z.test(o)){var j=o.match(Z)[1];h=Y.a.parse(j).filter((function(e){return e>0}))}o&&te.test(o)&&(g=o.match(te)[0].split("title=")[1].replace(/"+/g,""));var O=n&&n.replace(/language-/,"");!O&&l.defaultLanguage&&(O=l.defaultLanguage);var E=t.replace(/\n$/,"");if(0===h.length&&void 0!==O){for(var C,N="",x=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return ee(["js","jsBlock"]);case"jsx":case"tsx":return ee(["js","jsBlock","jsx"]);case"html":return ee(["js","jsBlock","html"]);case"python":case"py":return ee(["python"]);default:return ee()}}(O),P=t.replace(/\n$/,"").split("\n"),w=0;w<P.length;){var _=w+1,T=P[w].match(x);if(null!==T){switch(T.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":N+=_+",";break;case"highlight-start":C=_;break;case"highlight-end":N+=C+"-"+(_-1)+","}P.splice(w,1)}else w+=1}h=Y.a.parse(N),E=P.join("\n")}var S=function(){U()(E),u(!0),setTimeout((function(){return u(!1)}),2e3)};return r.a.createElement(J,Object(b.a)({},B,{key:String(m),theme:k,code:E,language:O}),(function(e){var t,n,a=e.className,o=e.style,c=e.tokens,l=e.getLineProps,i=e.getTokenProps;return r.a.createElement(r.a.Fragment,null,g&&r.a.createElement("div",{style:o,className:V.a.codeBlockTitle},g),r.a.createElement("div",{className:V.a.codeBlockContent},r.a.createElement("button",{ref:f,type:"button","aria-label":"Copy code to clipboard",className:Object(v.a)(V.a.copyButton,(t={},t[V.a.copyButtonWithTitle]=g,t)),onClick:S},s?"Copied":"Copy"),r.a.createElement("div",{tabIndex:0,className:Object(v.a)(a,V.a.codeBlock,(n={},n[V.a.codeBlockWithTitle]=g,n))},r.a.createElement("div",{className:V.a.codeBlockLines,style:o},c.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var n=l({line:e,key:t});return h.includes(t+1)&&(n.className=n.className+" docusaurus-highlight-code-line"),r.a.createElement("div",Object(b.a)({key:t},n),e.map((function(e,t){return r.a.createElement("span",Object(b.a)({key:t},i({token:e,key:t})))})))}))))))}))},ae=(n(58),n(59)),re=n.n(ae),oe=function(e){return function(t){var n,a=t.id,o=Object(g.a)(t,["id"]),c=Object(y.a)().siteConfig,l=(c=void 0===c?{}:c).themeConfig,i=(l=void 0===l?{}:l).navbar,s=(i=void 0===i?{}:i).hideOnScroll,u=void 0!==s&&s;return a?r.a.createElement(e,o,r.a.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:Object(v.a)("anchor",(n={},n[re.a.enhancedAnchor]=!u,n)),id:a}),o.children,r.a.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:"hash-link",href:"#"+a,title:"Direct link to heading"},"#")):r.a.createElement(e,o)}},ce=n(60),le=n.n(ce),ie={code:function(e){var t=e.children;return"string"==typeof t?t.includes("\n")?r.a.createElement(ne,e):r.a.createElement("code",e):t},a:function(e){return r.a.createElement(N.a,e)},pre:function(e){return r.a.createElement("div",Object(b.a)({className:le.a.mdxCodeBlock},e))},h1:oe("h1"),h2:oe("h2"),h3:oe("h3"),h4:oe("h4"),h5:oe("h5"),h6:oe("h6")},se=n(103),ue=n(92),pe=n(61),me=n.n(pe);function de(e){var t,n,a=e.currentDocRoute,o=e.docsMetadata,c=e.children,l=Object(y.a)(),i=l.siteConfig,s=l.isClient,u=o.permalinkToSidebar,m=o.docsSidebars,d=o.version,f=m[u[a.path]];return r.a.createElement(h.a,{version:d,key:s},r.a.createElement("div",{className:me.a.docPage},f&&r.a.createElement("div",{className:me.a.docSidebarContainer,role:"complementary"},r.a.createElement(I,{sidebar:f,path:a.path,sidebarCollapsible:null===(t=null===(n=i.themeConfig)||void 0===n?void 0:n.sidebarCollapsible)||void 0===t||t})),r.a.createElement("main",{className:me.a.docMainContainer},r.a.createElement(p,{components:ie},c))))}t.default=function(e){var t=e.route.routes,n=e.docsMetadata,a=e.location,o=t.find((function(e){return Object(ue.matchPath)(a.pathname,e)}));return o?r.a.createElement(de,{currentDocRoute:o,docsMetadata:n},Object(f.a)(t)):r.a.createElement(se.default,e)}}}]);