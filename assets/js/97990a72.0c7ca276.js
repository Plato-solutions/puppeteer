"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[55520],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,p=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=l(r),d=a,f=c["".concat(s,".").concat(d)]||c[d]||m[d]||p;return r?n.createElement(f,o(o({ref:t},u),{},{components:r})):n.createElement(f,o({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=r.length,o=new Array(p);o[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var l=2;l<p;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},5244:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>p,metadata:()=>i,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const p={sidebar_label:"Page.waitForResponse"},o="Page.waitForResponse() method",i={unversionedId:"api/puppeteer.page.waitforresponse",id:"version-17.0.0/api/puppeteer.page.waitforresponse",title:"Page.waitForResponse() method",description:"Signature:",source:"@site/versioned_docs/version-17.0.0/api/puppeteer.page.waitforresponse.md",sourceDirName:"api",slug:"/api/puppeteer.page.waitforresponse",permalink:"/api/puppeteer.page.waitforresponse",draft:!1,tags:[],version:"17.0.0",frontMatter:{sidebar_label:"Page.waitForResponse"},sidebar:"sidebar",previous:{title:"Page.waitForRequest",permalink:"/api/puppeteer.page.waitforrequest"},next:{title:"Page.waitForSelector",permalink:"/api/puppeteer.page.waitforselector"}},s={},l=[{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Example",id:"example",level:2}],u={toc:l};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"pagewaitforresponse-method"},"Page.waitForResponse() method"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Signature:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"class Page {\n  waitForResponse(\n    urlOrPredicate:\n      | string\n      | ((res: HTTPResponse) => boolean | Promise<boolean>),\n    options?: {\n      timeout?: number;\n    }\n  ): Promise<HTTPResponse>;\n}\n")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"urlOrPredicate"),(0,a.kt)("td",{parentName:"tr",align:null},"string ","|"," ((res: ",(0,a.kt)("a",{parentName:"td",href:"/api/puppeteer.httpresponse"},"HTTPResponse"),") =",">"," boolean ","|"," Promise","<","boolean",">",")"),(0,a.kt)("td",{parentName:"tr",align:null},"A URL or predicate to wait for.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"options"),(0,a.kt)("td",{parentName:"tr",align:null},"{ timeout?: number; }"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("i",null,"(Optional)")," Optional waiting parameters")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns:")),(0,a.kt)("p",null,"Promise","<",(0,a.kt)("a",{parentName:"p",href:"/api/puppeteer.httpresponse"},"HTTPResponse"),">"),(0,a.kt)("p",null,"Promise which resolves to the matched response."),(0,a.kt)("h2",{id:"remarks"},"Remarks"),(0,a.kt)("p",null,"Optional Parameter have:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"timeout"),": Maximum wait time in milliseconds, defaults to ",(0,a.kt)("inlineCode",{parentName:"li"},"30")," seconds, pass ",(0,a.kt)("inlineCode",{parentName:"li"},"0")," to disable the timeout. The default value can be changed by using the ",(0,a.kt)("a",{parentName:"li",href:"/api/puppeteer.page.setdefaulttimeout"},"Page.setDefaultTimeout()")," method.")),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const firstResponse = await page.waitForResponse(\n  'https://example.com/resource'\n);\nconst finalResponse = await page.waitForResponse(\n  response =>\n    response.url() === 'https://example.com' && response.status() === 200\n);\nconst finalResponse = await page.waitForResponse(async response => {\n  return (await response.text()).includes('<html>');\n});\nreturn finalResponse.ok();\n")))}m.isMDXComponent=!0}}]);