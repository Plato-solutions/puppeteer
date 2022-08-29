"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[55697],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),c=a,h=d["".concat(s,".").concat(c)]||d[c]||m[c]||r;return n?i.createElement(h,o(o({ref:t},u),{},{components:n})):i.createElement(h,o({ref:t},u))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},21985:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var i=n(87462),a=(n(67294),n(3905));const r={sidebar_position:4},o="Contributing",l={unversionedId:"contributing",id:"version-17.0.0/contributing",title:"Contributing",description:"First of all, thank you for your interest in Puppeteer!",source:"@site/versioned_docs/version-17.0.0/contributing.md",sourceDirName:".",slug:"/contributing",permalink:"/contributing",draft:!1,tags:[],version:"17.0.0",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"sidebar",previous:{title:"Troubleshooting",permalink:"/troubleshooting"},next:{title:"Chromium Support",permalink:"/chromium-support"}},s={},p=[{value:"Contributor License Agreement",id:"contributor-license-agreement",level:2},{value:"Getting Code",id:"getting-code",level:2},{value:"Code reviews",id:"code-reviews",level:2},{value:"Code Style",id:"code-style",level:2},{value:"Project structure",id:"project-structure",level:2},{value:"Shipping CJS and ESM bundles",id:"shipping-cjs-and-esm-bundles",level:3},{value:"<code>tsconfig.json</code> for the tests",id:"tsconfigjson-for-the-tests",level:3},{value:"Root <code>tsconfig.json</code>",id:"root-tsconfigjson",level:3},{value:"API guidelines",id:"api-guidelines",level:2},{value:"Commit messages",id:"commit-messages",level:2},{value:"Writing documentation",id:"writing-documentation",level:2},{value:"Writing TSDoc comments",id:"writing-tsdoc-comments",level:2},{value:"Running the documentation site locally",id:"running-the-documentation-site-locally",level:2},{value:"Adding new dependencies",id:"adding-new-dependencies",level:2},{value:"Running &amp; Writing Tests",id:"running--writing-tests",level:2},{value:"API Coverage",id:"api-coverage",level:2},{value:"Debugging Puppeteer",id:"debugging-puppeteer",level:2},{value:"Rolling new Chromium version",id:"rolling-new-chromium-version",level:2},{value:"Bisecting upstream changes",id:"bisecting-upstream-changes",level:3},{value:"Releasing to npm",id:"releasing-to-npm",level:2}],u={toc:p};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"contributing"},"Contributing"),(0,a.kt)("p",null,"First of all, thank you for your interest in Puppeteer!\nWe'd love to accept your patches and contributions!"),(0,a.kt)("h2",{id:"contributor-license-agreement"},"Contributor License Agreement"),(0,a.kt)("p",null,"Contributions to this project must be accompanied by a Contributor License\nAgreement. You (or your employer) retain the copyright to your contribution,\nthis simply gives us permission to use and redistribute your contributions as\npart of the project. Head over to ",(0,a.kt)("a",{parentName:"p",href:"https://cla.developers.google.com/"},"https://cla.developers.google.com/")," to see\nyour current agreements on file or to sign a new one."),(0,a.kt)("p",null,"You generally only need to submit a CLA once, so if you've already submitted one\n(even if it was for a different project), you probably don't need to do it\nagain."),(0,a.kt)("h2",{id:"getting-code"},"Getting Code"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Clone this repository")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/puppeteer/puppeteer\ncd puppeteer\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Install the dependencies")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install\n# Downloads the Firefox binary for Firefox tests\nPUPPETEER_PRODUCT=firefox npm install\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Build and run Puppeteer tests locally. For more information about tests, read\n",(0,a.kt)("a",{parentName:"li",href:"#running--writing-tests"},"Running & Writing Tests"),".")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm run build && npm run test\n")),(0,a.kt)("h2",{id:"code-reviews"},"Code reviews"),(0,a.kt)("p",null,"All submissions, including submissions by project members, require review. We\nuse GitHub pull requests for this purpose. Consult\n",(0,a.kt)("a",{parentName:"p",href:"https://help.github.com/articles/about-pull-requests/"},"GitHub Help")," for more\ninformation on using pull requests."),(0,a.kt)("h2",{id:"code-style"},"Code Style"),(0,a.kt)("p",null,"Our coding style is fully defined in\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/puppeteer/puppeteer/blob/main/.eslintrc.js"},(0,a.kt)("inlineCode",{parentName:"a"},".eslintrc")),"\n(",(0,a.kt)("a",{parentName:"p",href:"https://eslint.org/"},"ESLint"),") and\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/puppeteer/puppeteer/blob/main/.prettierrc.cjs"},(0,a.kt)("inlineCode",{parentName:"a"},".prettierrc.cjs")),"\n(",(0,a.kt)("a",{parentName:"p",href:"https://prettier.io"},"Prettier"),")."),(0,a.kt)("p",null,"Code is checked during ",(0,a.kt)("inlineCode",{parentName:"p"},"pre-push")," using\n",(0,a.kt)("a",{parentName:"p",href:"https://typicode.github.io/husky/#/"},"Husky"),", but you can check your code\nmanually by running:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm run lint\n")),(0,a.kt)("p",null,"If some errors are returned, you can attempt to fix them using:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm run format\n")),(0,a.kt)("h2",{id:"project-structure"},"Project structure"),(0,a.kt)("p",null,"The following is a description of the primary folders in Puppeteer:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"src")," - contains the source code for Puppeteer."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"test/src")," - contains the source code for Puppeteer tests."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"utils"),"/",(0,a.kt)("inlineCode",{parentName:"li"},"scripts")," - contains various scripts."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"utils/testserver")," - contains the source code for our test servers in testing."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"compat")," - contains code separated by module import type. See ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/puppeteer/puppeteer/blob/main/compat/README.md"},(0,a.kt)("inlineCode",{parentName:"a"},"compat/README.md"))," for details."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"test-d")," contains type tests using ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/SamVerschueren/tsd"},(0,a.kt)("inlineCode",{parentName:"a"},"tsd")),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"vendor")," contains all dependencies that we vendor into the final build. See the ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/puppeteer/puppeteer/blob/main/vendor/README.md"},(0,a.kt)("inlineCode",{parentName:"a"},"vendor/README.md"))," for details.")),(0,a.kt)("h3",{id:"shipping-cjs-and-esm-bundles"},"Shipping CJS and ESM bundles"),(0,a.kt)("p",null,"Puppeteer ships both CommonJS and ES modules, therefore we maintain two ",(0,a.kt)("inlineCode",{parentName:"p"},"tsconfig")," files for each project: ",(0,a.kt)("inlineCode",{parentName:"p"},"tsconfig.esm.json")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"tsconfig.cjs.json"),". At build time we compile twice, once for CommonJS and once for ES modules."),(0,a.kt)("p",null,"We compile into the ",(0,a.kt)("inlineCode",{parentName:"p"},"lib")," directory which is what we publish on the npm repository and it's structured like so:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"lib\n- cjs\n  - puppeteer <== the output of compiling `src/tsconfig.cjs.json`\n  - vendor <== the output of compiling `vendor/tsconfig.cjs.json`\n- esm\n  - puppeteer <== the output of compiling `src/tsconfig.esm.json`\n  - vendor <== the output of compiling `vendor/tsconfig.esm.json`\n")),(0,a.kt)("h3",{id:"tsconfigjson-for-the-tests"},(0,a.kt)("inlineCode",{parentName:"h3"},"tsconfig.json")," for the tests"),(0,a.kt)("p",null,"We also maintain ",(0,a.kt)("inlineCode",{parentName:"p"},"test/tsconfig.json"),". This is used to incrementally compile the unit test ",(0,a.kt)("inlineCode",{parentName:"p"},"*.spec.ts")," files. Tests are run against the compiled code we ship to users so it gives us more confidence in our compiled output being correct."),(0,a.kt)("h3",{id:"root-tsconfigjson"},"Root ",(0,a.kt)("inlineCode",{parentName:"h3"},"tsconfig.json")),(0,a.kt)("p",null,"The root ",(0,a.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," exists for the API Extractor; it has to find a ",(0,a.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," in the project's root directory."),(0,a.kt)("h2",{id:"api-guidelines"},"API guidelines"),(0,a.kt)("p",null,"When authoring new API methods, consider the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Expose as little information as needed. When in doubt, don\u2019t expose new information."),(0,a.kt)("li",{parentName:"ul"},"Methods are used in favor of getters/setters.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"The only exception is namespaces, e.g. ",(0,a.kt)("inlineCode",{parentName:"li"},"page.keyboard")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"page.coverage")))),(0,a.kt)("li",{parentName:"ul"},"All string literals must be small case. This includes event names and option values."),(0,a.kt)("li",{parentName:"ul"},'Avoid adding "sugar" API (API that is trivially implementable in user-space) unless they\'re ',(0,a.kt)("strong",{parentName:"li"},"very")," demanded.")),(0,a.kt)("h2",{id:"commit-messages"},"Commit messages"),(0,a.kt)("p",null,"Commit messages should follow ",(0,a.kt)("a",{parentName:"p",href:"https://www.conventionalcommits.org/en/v1.0.0/#summary"},"the Conventional Commits format"),". This is enforced via ",(0,a.kt)("inlineCode",{parentName:"p"},"npm run commitlint"),"."),(0,a.kt)("p",null,"In particular, breaking changes should clearly be noted as \u201cBREAKING CHANGE:\u201d in the commit message footer. Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"fix(page): fix page.pizza method\n\nThis patch fixes page.pizza so that it works with iframes.\n\nIssues: #123, #234\n\nBREAKING CHANGE: page.pizza now delivers pizza at home by default.\nTo deliver to a different location, use the \"deliver\" option:\n  `page.pizza({deliver: 'work'})`.\n")),(0,a.kt)("h2",{id:"writing-documentation"},"Writing documentation"),(0,a.kt)("p",null,"Documentation is generated via ",(0,a.kt)("inlineCode",{parentName:"p"},"npm run docs"),". It is automatically published to our documentation site on merge and gets versioned on release."),(0,a.kt)("h2",{id:"writing-tsdoc-comments"},"Writing TSDoc comments"),(0,a.kt)("p",null,"Each change to Puppeteer should be thoroughly documented using TSDoc comments. Refer to the ",(0,a.kt)("a",{parentName:"p",href:"https://api-extractor.com/pages/tsdoc/doc_comment_syntax/"},"API Extractor documentation")," for information on the exact syntax."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Every new method needs to have either ",(0,a.kt)("inlineCode",{parentName:"li"},"@public")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"@internal")," added as a tag depending on if it is part of the public API."),(0,a.kt)("li",{parentName:"ul"},"Keep each line in a comment to no more than 90 characters (ESLint will warn you if you go over this). If you're a VSCode user the ",(0,a.kt)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=stkb.rewrap"},"Rewrap plugin")," is highly recommended!")),(0,a.kt)("h2",{id:"running-the-documentation-site-locally"},"Running the documentation site locally"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"At root, install all dependencies with ",(0,a.kt)("inlineCode",{parentName:"li"},"npm i"),"."),(0,a.kt)("li",{parentName:"ol"},"run ",(0,a.kt)("inlineCode",{parentName:"li"},"npm run docs")," which will generate all the ",(0,a.kt)("inlineCode",{parentName:"li"},".md")," files on ",(0,a.kt)("inlineCode",{parentName:"li"},"puppeteer/docs/api"),"."),(0,a.kt)("li",{parentName:"ol"},"run ",(0,a.kt)("inlineCode",{parentName:"li"},"npm i")," in ",(0,a.kt)("inlineCode",{parentName:"li"},"puppeteer/website"),"."),(0,a.kt)("li",{parentName:"ol"},"run ",(0,a.kt)("inlineCode",{parentName:"li"},"npm start")," in ",(0,a.kt)("inlineCode",{parentName:"li"},"puppeteer/website"),".")),(0,a.kt)("h2",{id:"adding-new-dependencies"},"Adding new dependencies"),(0,a.kt)("p",null,"For all dependencies (both installation and development):"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Do not add")," a dependency if the desired functionality is easily implementable."),(0,a.kt)("li",{parentName:"ul"},"If adding a dependency, it should be well-maintained and trustworthy.")),(0,a.kt)("p",null,"A barrier for introducing new installation dependencies is especially high:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Do not add")," installation dependency unless it's critical to project success.")),(0,a.kt)("p",null,"There are additional considerations for dependencies that are environment agonistic. See the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/puppeteer/puppeteer/blob/main/vendor/README.md"},(0,a.kt)("inlineCode",{parentName:"a"},"vendor/README.md"))," for details."),(0,a.kt)("h2",{id:"running--writing-tests"},"Running & Writing Tests"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Every feature should be accompanied by a test."),(0,a.kt)("li",{parentName:"ul"},"Every public api event/method should be accompanied by a test."),(0,a.kt)("li",{parentName:"ul"},"Tests should not depend on external services."),(0,a.kt)("li",{parentName:"ul"},"Tests should work on all three platforms: Mac, Linux and Win. This is especially important for screenshot tests.")),(0,a.kt)("p",null,"Puppeteer tests are located in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/puppeteer/puppeteer/blob/main/test/"},"the ",(0,a.kt)("inlineCode",{parentName:"a"},"test")," directory")," and are written using Mocha. See ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/puppeteer/puppeteer/blob/main/test/README.md"},(0,a.kt)("inlineCode",{parentName:"a"},"test/README.md"))," for more details."),(0,a.kt)("p",null,"Despite being named 'unit', these are integration tests, making sure public API methods and events work as expected."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"To run all tests:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm run test\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"To run a specific test, substitute the ",(0,a.kt)("inlineCode",{parentName:"li"},"it")," with ",(0,a.kt)("inlineCode",{parentName:"li"},"it.only"),":")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"  ...\n  it.only('should work', async function({server, page}) {\n    const response = await page.goto(server.EMPTY_PAGE);\n    expect(response.ok).toBe(true);\n  });\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"To disable a specific test, substitute the ",(0,a.kt)("inlineCode",{parentName:"li"},"it")," with ",(0,a.kt)("inlineCode",{parentName:"li"},"xit")," (mnemonic rule: '",(0,a.kt)("em",{parentName:"li"},"cross it"),"'):")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"  ...\n  // Using \"xit\" to skip specific test\n  xit('should work', async function({server, page}) {\n    const response = await page.goto(server.EMPTY_PAGE);\n    expect(response.ok).toBe(true);\n  });\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"To run Chrome tests in non-headless mode:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"HEADLESS=false npm run test:chrome:headless\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"To run Firefox tests, firstly ensure you have Firefox installed locally (you only need to do this once, not on every test run) and then you can run the tests:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"PUPPETEER_PRODUCT=firefox npm install\nnpm run test:firefox\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"To run experimental Chromium MacOS ARM tests, firstly ensure you have correct Chromium version installed locally (you only need to do this once, not on every test run) and then you can run the tests:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"PUPPETEER_EXPERIMENTAL_CHROMIUM_MAC_ARM=1 npm install\nPUPPETEER_EXPERIMENTAL_CHROMIUM_MAC_ARM=1 npm run test:chrome:headless\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"To run tests with custom browser executable:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"BINARY=<path-to-executable> npm run test:chrome:headless # Or npm run test:firefox\n")),(0,a.kt)("h2",{id:"api-coverage"},"API Coverage"),(0,a.kt)("p",null,"Every public API method or event should be called at least once in tests. To ensure this, the main ",(0,a.kt)("inlineCode",{parentName:"p"},"test")," command runs coverage during testing."),(0,a.kt)("h2",{id:"debugging-puppeteer"},"Debugging Puppeteer"),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/puppeteer/puppeteer/blob/main/README.md#debugging-tips"},"Debugging Tips")," in the readme."),(0,a.kt)("h1",{id:"for-project-maintainers"},"For Project Maintainers"),(0,a.kt)("h2",{id:"rolling-new-chromium-version"},"Rolling new Chromium version"),(0,a.kt)("p",null,"The following steps are needed to update the Chromium version."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Find a suitable Chromium revision\nNot all revisions have builds for all platforms, so we need to find one that does.\nTo do so, run ",(0,a.kt)("inlineCode",{parentName:"li"},"utils/check_availability.js -rd")," to find the latest suitable ",(0,a.kt)("inlineCode",{parentName:"li"},"dev")," Chromium revision (see ",(0,a.kt)("inlineCode",{parentName:"li"},"utils/check_availability.js -help")," for more options)."),(0,a.kt)("li",{parentName:"ol"},"Update ",(0,a.kt)("inlineCode",{parentName:"li"},"src/revisions.ts")," with the found revision number."),(0,a.kt)("li",{parentName:"ol"},"Update ",(0,a.kt)("inlineCode",{parentName:"li"},"versions.js")," with the new Chromium-to-Puppeteer version mapping and update ",(0,a.kt)("inlineCode",{parentName:"li"},"lastMaintainedChromiumVersion")," with the latest stable Chrome version."),(0,a.kt)("li",{parentName:"ol"},"Run ",(0,a.kt)("inlineCode",{parentName:"li"},"npm run check:protocol-revision"),".\nIf it fails, update ",(0,a.kt)("inlineCode",{parentName:"li"},"package.json")," with the expected ",(0,a.kt)("inlineCode",{parentName:"li"},"devtools-protocol")," version."),(0,a.kt)("li",{parentName:"ol"},"Run ",(0,a.kt)("inlineCode",{parentName:"li"},"npm run build")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"npm install"),"."),(0,a.kt)("li",{parentName:"ol"},"Run ",(0,a.kt)("inlineCode",{parentName:"li"},"npm test")," and ensure that all tests pass. If a test fails, ",(0,a.kt)("a",{parentName:"li",href:"#bisecting-upstream-changes"},"bisect")," the upstream cause of the failure, and either update the test expectations accordingly (if it was an intended change) or work around the changes in Puppeteer (if it\u2019s not desirable to change Puppeteer\u2019s observable behavior)."),(0,a.kt)("li",{parentName:"ol"},"Commit and push your changes and open a pull request.\nThe commit message must contain the version in ",(0,a.kt)("inlineCode",{parentName:"li"},"Chromium <version> (<revision>)")," format to ensure that ",(0,a.kt)("a",{parentName:"li",href:"https://pptr.dev/"},"pptr.dev")," can parse it correctly, e.g. ",(0,a.kt)("inlineCode",{parentName:"li"},"'feat(chromium): roll to Chromium 90.0.4427.0 (r856583)'"),".")),(0,a.kt)("h3",{id:"bisecting-upstream-changes"},"Bisecting upstream changes"),(0,a.kt)("p",null,"Sometimes, performing a Chromium roll causes tests to fail. To figure out the cause, you need to bisect Chromium revisions to figure out the earliest possible revision that changed the behavior. The script in ",(0,a.kt)("inlineCode",{parentName:"p"},"utils/bisect.js")," can be helpful here. Given a pattern for one or more unit tests, it will automatically bisect the current range:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"node utils/bisect.js --good 686378 --bad 706915 script.js\nnode utils/bisect.js --unit-test Response.fromCache\n")),(0,a.kt)("p",null,"By default, it will use the Chromium revision in ",(0,a.kt)("inlineCode",{parentName:"p"},"src/revisions.ts")," from the ",(0,a.kt)("inlineCode",{parentName:"p"},"main")," branch and from the working tree to determine the range to bisect."),(0,a.kt)("h2",{id:"releasing-to-npm"},"Releasing to npm"),(0,a.kt)("p",null,"We use ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/googleapis/release-please"},"release-please")," to automate releases. When a release should be done, check for the release PR in our ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/puppeteer/puppeteer/pulls"},"pull requests")," and merge it."))}m.isMDXComponent=!0}}]);