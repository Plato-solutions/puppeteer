"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3055],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,p=function(e,t){if(null==e)return{};var r,n,p={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(p[r]=e[r]);return p}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(p[r]=e[r])}return p}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,p=e.mdxType,a=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),f=l(r),m=p,d=f["".concat(u,".").concat(m)]||f[m]||s[m]||a;return r?n.createElement(d,o(o({ref:t},c),{},{components:r})):n.createElement(d,o({ref:t},c))}));function m(e,t){var r=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var a=r.length,o=new Array(a);o[0]=f;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:p,o[1]=i;for(var l=2;l<a;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},94458:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>s,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var n=r(87462),p=(r(67294),r(3905));const a={sidebar_label:"PuppeteerLaunchOptions"},o="PuppeteerLaunchOptions interface",i={unversionedId:"api/puppeteer.puppeteerlaunchoptions",id:"version-17.0.0/api/puppeteer.puppeteerlaunchoptions",title:"PuppeteerLaunchOptions interface",description:"Signature:",source:"@site/versioned_docs/version-17.0.0/api/puppeteer.puppeteerlaunchoptions.md",sourceDirName:"api",slug:"/api/puppeteer.puppeteerlaunchoptions",permalink:"/api/puppeteer.puppeteerlaunchoptions",draft:!1,tags:[],version:"17.0.0",frontMatter:{sidebar_label:"PuppeteerLaunchOptions"},sidebar:"sidebar",previous:{title:"PuppeteerLaunchOptions.extraPrefsFirefox",permalink:"/api/puppeteer.puppeteerlaunchoptions.extraprefsfirefox"},next:{title:"PuppeteerLaunchOptions.product",permalink:"/api/puppeteer.puppeteerlaunchoptions.product"}},u={},l=[{value:"Properties",id:"properties",level:2}],c={toc:l};function s(e){let{components:t,...r}=e;return(0,p.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("h1",{id:"puppeteerlaunchoptions-interface"},"PuppeteerLaunchOptions interface"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Signature:")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"export interface PuppeteerLaunchOptions extends LaunchOptions, BrowserLaunchArgumentOptions, BrowserConnectOptions\n")),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Extends:")," ",(0,p.kt)("a",{parentName:"p",href:"/api/puppeteer.launchoptions"},"LaunchOptions"),", ",(0,p.kt)("a",{parentName:"p",href:"/api/puppeteer.browserlaunchargumentoptions"},"BrowserLaunchArgumentOptions"),", ",(0,p.kt)("a",{parentName:"p",href:"/api/puppeteer.browserconnectoptions"},"BrowserConnectOptions")),(0,p.kt)("h2",{id:"properties"},"Properties"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:null},"Property"),(0,p.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,p.kt)("th",{parentName:"tr",align:null},"Type"),(0,p.kt)("th",{parentName:"tr",align:null},"Description"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("a",{parentName:"td",href:"/api/puppeteer.puppeteerlaunchoptions.extraprefsfirefox"},"extraPrefsFirefox?")),(0,p.kt)("td",{parentName:"tr",align:null}),(0,p.kt)("td",{parentName:"tr",align:null},"Record","<","string, unknown",">"),(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("i",null,"(Optional)"))),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("a",{parentName:"td",href:"/api/puppeteer.puppeteerlaunchoptions.product"},"product?")),(0,p.kt)("td",{parentName:"tr",align:null}),(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("a",{parentName:"td",href:"/api/puppeteer.product"},"Product")),(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("i",null,"(Optional)"))))))}s.isMDXComponent=!0}}]);