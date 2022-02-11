"use strict";(self.webpackChunkphpvms_docs=self.webpackChunkphpvms_docs||[]).push([[4076],{3905:function(e,t,a){a.d(t,{Zo:function(){return h},kt:function(){return f}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},h=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,h=o(e,["components","mdxType","originalType","parentName"]),p=c(a),f=r,u=p["".concat(l,".").concat(f)]||p[f]||d[f]||i;return a?n.createElement(u,s(s({ref:t},h),{},{components:a})):n.createElement(u,s({ref:t},h))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var c=2;c<i;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},648:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return h},default:function(){return p}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),s=["components"],o={id:"finances",title:"Finances"},l=void 0,c={unversionedId:"guides/finances",id:"guides/finances",title:"Finances",description:"Journals",source:"@site/docs/guides/finances.md",sourceDirName:"guides",slug:"/guides/finances",permalink:"/guides/finances",editUrl:"https://github.com/phpvms/docs/tree/master/docs/guides/finances.md",tags:[],version:"current",frontMatter:{id:"finances",title:"Finances"},sidebar:"docs",previous:{title:"Basics",permalink:"/guides/basics"},next:{title:"Uploading Files",permalink:"/installation/uploading"}},h=[{value:"Journals",id:"journals",children:[],level:2},{value:"Fares and Fare classes",id:"fares-and-fare-classes",children:[{value:"Subfleet Fares",id:"subfleet-fares",children:[],level:3},{value:"Flight Fares",id:"flight-fares",children:[],level:3}],level:2},{value:"Expenses",id:"expenses",children:[],level:2}],d={toc:h};function p(e){var t=e.components,a=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"journals"},"Journals"),(0,i.kt)("p",null,"Journals are created, which then hold transactions against those journals. A journal is assigned for:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Every airline"),(0,i.kt)("li",{parentName:"ul"},"Every user")),(0,i.kt)("p",null,'The balance of any journal are the sum of its credits, which are then subtracted from those debits. The transactions also have "groups", which are used in the financial reports. With the journaling system, user\'s or airlines can be paid or charged, with historical records being kept, and reports run on them.'),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"fares-and-fare-classes"},"Fares and Fare classes"),(0,i.kt)("p",null,"Fares are the different prices for seats paid for, by passengers. When a PIREP is filed, 3 places are checked for the price for a certain fare class:"),(0,i.kt)("p",null,"How the parameters for a fare are determined:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The fares that can be assigned are retrieved from the subfleet of the aircraft that was flown"),(0,i.kt)("li",{parentName:"ol"},"The flight is checked if it has an entry for that fare, and takes any parameters that were changed"),(0,i.kt)("li",{parentName:"ol"},"The fare and values from the subfleet"),(0,i.kt)("li",{parentName:"ol"},"Finally, from the fare itself")),(0,i.kt)("p",null,'When the fare is added for a subfleet or on a flight, the values can be set to a number, or a percentage. The percentage will be from the base fare, and the "base" is ',(0,i.kt)("inlineCode",{parentName:"p"},"100%")," - so if you want to increase the fare price for a subfleet to be 10% higher than the base fare for that class, set it to ",(0,i.kt)("inlineCode",{parentName:"p"},"110%"),". The percent-sign needs to be included for it to detect that you want to add a percentage. "),(0,i.kt)("p",null,'The percentage override has an advantage - so you can add a base fare called "Economy" for $100, and on a certain flight, you can add that fare, and set it to "200%", so the price for that fare, on that flight, would be $200.'),(0,i.kt)("h3",{id:"subfleet-fares"},"Subfleet Fares"),(0,i.kt)("p",null,"Subfleets need to be assigned fares - these fares are shared across all the aircraft in that subfleet. The different attributes of a fare - the cost, price and capacity, can be edited on a per-subfleet basis. One subfleet might have a larger economy class than another, but they can share the same Economy fare that's created."),(0,i.kt)("h3",{id:"flight-fares"},"Flight Fares"),(0,i.kt)("p",null,"If a fare is added to a flight, it will take precedence over the fares assigned to the subfleet."),(0,i.kt)("p",null,"When a fare is assigned to a flight, the value it can be given is either a monetary amount, or a multiplier. (e.g, 100, or 100%). The multiplier is applied from the subfleet amount, or the fare amount, if one isn't specified on the subfleet. By default, if there is no value, it is assumed at 100% of the amount."),(0,i.kt)("p",null,"If there are expected to be aircraft substitutions, you can add only the fares that may apply. For example, on a normal route, you may only have an Economy and First Class fare. But perhaps an aircraft with an additional fare, Premium Economy may be used. You can add Premium Economy to the flight, and set it to either a monetary amount, or to the multiplier, e.g, it might be set to 120%. When the PIREP is filed, for that flight, the seat prices for that flight, on that aircraft, will be set to 120% of the base premium economy price."),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"expenses"},"Expenses"),(0,i.kt)("p",null,"Expenses are arbitrary charges, against either the airline or user. Expenses are a debit line in the journal. There are multiple ways to define them, and can derived from multiple parts of the system. There are 3 types of expenses:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Flight - these are charged whenever a flight is flown. These also have an option to charge the user/pilot"),(0,i.kt)("li",{parentName:"ol"},"Daily - these expenses are charged daily"),(0,i.kt)("li",{parentName:"ol"},"Monthly - these are charged monthly")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The daily and monthly charges depend on the cron being setup properly"))),(0,i.kt)("p",null,'Aside from the general expenses (the "Expenses" navigation option in the admin panel), expenses can also be added on different objects, allowing you to be as in-depth as you want.'),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Aircraft",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},'Flight - when this aircraft is used on a flight (e.g, a "Rental" expense that\'s charged to a user, or a catering charge)'),(0,i.kt)("li",{parentName:"ol"},'Daily - charged daily, regardless of use (e.g, "Cleaning")'),(0,i.kt)("li",{parentName:"ol"},"Monthly - lease costs, MRO costs"))),(0,i.kt)("li",{parentName:"ol"},"Airports",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"Flight - only applied on the arrival airport (e.g, landing fees). Can also be charged to a user"),(0,i.kt)("li",{parentName:"ol"},"Daily - charged daily, regardless of use"),(0,i.kt)("li",{parentName:"ol"},"Monthly - gate charges, other fees"))),(0,i.kt)("li",{parentName:"ol"},"Subfleets",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"Flight - when an aircraft in this subfleet is used on a flight, can also be charged to a user"),(0,i.kt)("li",{parentName:"ol"},"Daily - charged, regardless of use"),(0,i.kt)("li",{parentName:"ol"},"Monthly")))),(0,i.kt)("p",null,"In addition to being able to add expenses to these objects, you can also create custom expenses by adding a ",(0,i.kt)("inlineCode",{parentName:"p"},"Listener")," for the ",(0,i.kt)("inlineCode",{parentName:"p"},"Expenses")," event. ",(0,i.kt)("inlineCode",{parentName:"p"},"app/Listeners/ExpenseListener")," has an example - this allows you to have extra flexibility, for example, if you want to charge a user for excessive landing rates or if the flight time is longer than the planned flight time. These custom ",(0,i.kt)("inlineCode",{parentName:"p"},"Expenses")," events can also be used for monthly and daily expenses."))}p.isMDXComponent=!0}}]);