"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[39397],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},p=Object.keys(e);for(a=0;a<p.length;a++)r=p[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)r=p[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),s=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,p=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=s(r),g=n,m=u["".concat(l,".").concat(g)]||u[g]||d[g]||p;return r?a.createElement(m,i(i({ref:t},c),{},{components:r})):a.createElement(m,i({ref:t},c))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=r.length,i=new Array(p);i[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var s=2;s<p;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},55800:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>p,metadata:()=>o,toc:()=>s});var a=r(87462),n=(r(67294),r(3905));const p={sidebar_label:"Page.addScriptTag"},i="Page.addScriptTag() method",o={unversionedId:"api/puppeteer.page.addscripttag",id:"version-17.0.0/api/puppeteer.page.addscripttag",title:"Page.addScriptTag() method",description:"Adds a `` tag into the page with the desired URL or content.",source:"@site/versioned_docs/version-17.0.0/api/puppeteer.page.addscripttag.md",sourceDirName:"api",slug:"/api/puppeteer.page.addscripttag",permalink:"/api/puppeteer.page.addscripttag",draft:!1,tags:[],version:"17.0.0",frontMatter:{sidebar_label:"Page.addScriptTag"},sidebar:"sidebar",previous:{title:"Page.accessibility",permalink:"/api/puppeteer.page.accessibility"},next:{title:"Page.addStyleTag",permalink:"/api/puppeteer.page.addstyletag"}},l={},s=[{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}],c={toc:s};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"pageaddscripttag-method"},"Page.addScriptTag() method"),(0,n.kt)("p",null,"Adds a ",(0,n.kt)("inlineCode",{parentName:"p"},"<script>")," tag into the page with the desired URL or content."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Signature:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"class Page {\n  addScriptTag(options: {\n    url?: string;\n    path?: string;\n    content?: string;\n    type?: string;\n    id?: string;\n  }): Promise<ElementHandle<HTMLScriptElement>>;\n}\n")),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"options"),(0,n.kt)("td",{parentName:"tr",align:null},"{ url?: string; path?: string; content?: string; type?: string; id?: string; }"),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Returns:")),(0,n.kt)("p",null,"Promise","<",(0,n.kt)("a",{parentName:"p",href:"/api/puppeteer.elementhandle"},"ElementHandle"),"<","HTMLScriptElement",">",">"),(0,n.kt)("p",null,"Promise which resolves to the added tag when the script's onload fires or when the script content was injected into frame."),(0,n.kt)("h2",{id:"remarks"},"Remarks"),(0,n.kt)("p",null,"Shortcut for ",(0,n.kt)("a",{parentName:"p",href:"/api/puppeteer.frame.addscripttag"},"page.mainFrame().addScriptTag(options)"),"."))}d.isMDXComponent=!0}}]);