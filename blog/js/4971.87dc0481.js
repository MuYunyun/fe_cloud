(self.webpackChunkblog=self.webpackChunkblog||[]).push([[4971],{14971:(n,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>m});var o=t(59713),r=t.n(o),a=t(6479),l=t.n(a),p=(t(67294),t(3905));function u(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,o)}return t}function s(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?u(Object(t),!0).forEach((function(e){r()(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}var c={};function m(n){var e=n.components,t=l()(n,["components"]);return(0,p.kt)("wrapper",s(s(s({},c),t),{},{components:e,mdxType:"MDXLayout"}),(0,p.kt)("h3",null,"CommonJS 模块与 ES6 模块间的差异"),(0,p.kt)("h4",null,"写法上的差异"),(0,p.kt)("p",null,"CommonJS 中常见导出和引人写法如下:"),(0,p.kt)("pre",null,(0,p.kt)("code",s({parentName:"pre"},{className:"language-js"}),"// 导出\nmodule.exports = a\n\n// 引人\nconst a = require('./xxx')\n")),(0,p.kt)("p",null,"ES6 中常见导出和引人写法如下:"),(0,p.kt)("pre",null,(0,p.kt)("code",s({parentName:"pre"},{className:"language-js"}),"// 导出\nexport default a          // 编译成 CommonJS: exports.default = a (ES 编译成的 CommonJS 形式)\n\n// 引人\nimport a from './xxx'     // 编译成 CommonJS: require('./xxx').default\n\n// 导出\nexport { a }              // 编译成 CommonJS: exports.a = a\n\n// 引人\nimport { a } from './xxx' // 编译成 CommonJS: require('./xxx').a\n")),(0,p.kt)("h4",null,"加载机制的差异"),(0,p.kt)("p",null,"在 CommonJS 的模块中, require 是动态(运行时)加载的；在 ES6 的模块中, import 是静态(编译时)加载的。"),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},"ES6 ",(0,p.kt)("a",s({parentName:"p"},{href:"https://github.com/tc39/proposal-dynamic-import"}),"import() 动态加载的提案")," 目前已到第 3 阶段。")),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},"另外如果是使用 TypeScript 的话, 编译成 JavaScript 的代码后再用上述结论。")),(0,p.kt)("h4",null,"获取模块的差异"),(0,p.kt)("p",null,"在 CommonJS 中, 获取的是一个",(0,p.kt)("inlineCode",{parentName:"p"},"值/模块的拷贝"),", 见如下例子:"),(0,p.kt)("pre",null,(0,p.kt)("code",s({parentName:"pre"},{className:"language-js"}),"// test.js\nlet a = 1\n\nfunction add() {\n  a = 2\n}\n\nmodule.exports = { a, add }\n\n// test2.js\nconst { a, add } = require('./test')\n\nconsole.log(a)\nadd()\nconsole.log(a)\n\n// 执行 node test2.js, 输出结果为 1 1\n")),(0,p.kt)("p",null,"在 ES6 中, 获取的是一个",(0,p.kt)("inlineCode",{parentName:"p"},"值/模块的引用"),", 见如下例子:"),(0,p.kt)("pre",null,(0,p.kt)("code",s({parentName:"pre"},{className:"language-js"}),"// test.js\nlet a = 1\n\nfunction add() {\n  a = 2\n}\n\nexport { a, add }\n\n// index.html\nimport { a, add } from './index.js'\n\nconsole.log(a)\n\nadd()\n\nconsole.log(a)\n\n// 在浏览器中输出结果为 1 2\n")),(0,p.kt)("h3",null,"同时支持 CJS 与 ESM 包的最佳实践"),(0,p.kt)("ol",null,(0,p.kt)("li",{parentName:"ol"},"提供一个 CJS 版本")),(0,p.kt)("p",null,"这样可以确保你的库在旧版本 Node 下跑的更好。(如果你写的是 TypeScript 或者其他需要编译到 JavaScript 的语言，那么编译到 CJS。)"),(0,p.kt)("ol",s({},{start:2}),(0,p.kt)("li",{parentName:"ol"},"基于 CJS 封装到 ESM 版本 (将 CJS 封装到 ESM 很容易，但是 ESM 库是没法封装到 CJS 库的)。")),(0,p.kt)("pre",null,(0,p.kt)("code",s({parentName:"pre"},{className:"language-js"}),"import cjsModule from '../index.js';\nexport const foo = cjsModule.foo;\n")),(0,p.kt)("p",null,"Todo: 调研为什么 CJS 封装为 ESM 容易, 但是反过来不行。"))}m.isMDXComponent=!0}}]);