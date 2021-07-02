(self.webpackChunkblog=self.webpackChunkblog||[]).push([[6182],{16182:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>c});var a=n(59713),l=n.n(a),r=n(6479),i=n.n(r),o=(n(67294),n(3905));function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){l()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var m={};function c(e){var t=e.components,n=i()(e,["components"]);return(0,o.kt)("wrapper",d(d(d({},m),n),{},{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",null,"HTML5 DOM"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"getElementsByClassName"),(0,o.kt)("li",{parentName:"ol"},"遍历相关, 如下左侧属性")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"只涉及元素节点的操作(不涉及其它节点), 建议使用左侧的属性替代右侧的属性:")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",d({parentName:"tr"},{align:"center"}),"属性名"),(0,o.kt)("th",d({parentName:"tr"},{align:"center"}),"被替代的属性"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",d({parentName:"tr"},{align:"center"}),"children"),(0,o.kt)("td",d({parentName:"tr"},{align:"center"}),"childNodes")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",d({parentName:"tr"},{align:"center"}),"childElementCount"),(0,o.kt)("td",d({parentName:"tr"},{align:"center"}),"childNodes.length")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",d({parentName:"tr"},{align:"center"}),"previousElementSibling"),(0,o.kt)("td",d({parentName:"tr"},{align:"center"}),"previousSibling")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",d({parentName:"tr"},{align:"center"}),"nextElementSibling"),(0,o.kt)("td",d({parentName:"tr"},{align:"center"}),"nextSibling")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",d({parentName:"tr"},{align:"center"}),"firstElementChild"),(0,o.kt)("td",d({parentName:"tr"},{align:"center"}),"firstChild")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",d({parentName:"tr"},{align:"center"}),"lastElementChild"),(0,o.kt)("td",d({parentName:"tr"},{align:"center"}),"lastChild")))),(0,o.kt)("ol",d({},{start:3}),(0,o.kt)("li",{parentName:"ol"},"ele.scrollIntoView()")),(0,o.kt)("p",null,"调用 ele.scrollIntoView(), ele 元素顶端会移动到可视区域的顶端; 若传入参数 alignToTop: false, 则 ele 移到屏幕底部;"),(0,o.kt)("h3",null,"HTML5 事件"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"contextmenu")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"contextmenu 使用 demo"),(0,o.kt)("pre",null,(0,o.kt)("code",d({parentName:"pre"},{className:"language-html"}),"<ul id=\"myMenu\" style=\"position: absolute;visibility: hidden;background-color: silver\">\n  <li>111</li>\n  <li>222</li>\n  <li>333</li>\n</ul>\n<script>\n  var menu = document.getElementById('myMenu')\n  document.addEventListener('contextmenu', (event) => {\n    event.preventDefault()\n    menu.style.left = event.clientX + 'px'\n    menu.style.top = event.clientY + 'px'\n    menu.style.visibility = 'visible'\n  }, false)\n  document.addEventListener('click', (event) => {\n    menu.style.visibility = 'hidden'\n  }, false)\n<\/script>\n"))),(0,o.kt)("ol",d({},{start:2}),(0,o.kt)("li",{parentName:"ol"},"DOMContentLoaded")),(0,o.kt)("p",null,"优于 window.onload 执行"),(0,o.kt)("ol",d({},{start:3}),(0,o.kt)("li",{parentName:"ol"},"readystatechange")),(0,o.kt)("p",null,"可用来判断动态载入的 script、link 标签是否加载完成。demo 如下:"),(0,o.kt)("pre",null,(0,o.kt)("code",d({parentName:"pre"},{className:"language-js"}),"const script = document.createElement('script')\nscript.addEventListener('readystatechange', function eventListener(event) {\n  if (event.readyState === 'loaded' || event.readyState === 'complete') { // hack 的手段, 浏览器自身的问题\n    script.removeEventListener('readystatechange', eventListener)\n  }\n})\n\nscript.src = 'example.js'\ndocument.body.appendChild(script)\n")),(0,o.kt)("ol",d({},{start:4}),(0,o.kt)("li",{parentName:"ol"},"hashchange")),(0,o.kt)("h3",null,"HTML5 表单"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"input/textarea 里新增 ",(0,o.kt)("inlineCode",{parentName:"li"},"autoFocus()")," 字段"),(0,o.kt)("li",{parentName:"ul"},"表单校验 api")),(0,o.kt)("p",null,"使用 ",(0,o.kt)("inlineCode",{parentName:"p"},"checkValidate()")," 校验 ",(0,o.kt)("inlineCode",{parentName:"p"},"required"),"、",(0,o.kt)("inlineCode",{parentName:"p"},'pattern="\\d+"')," 属性"),(0,o.kt)("h3",null,"HTML5 脚本"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"跨文档消息传输(XDM), 核心是 ",(0,o.kt)("inlineCode",{parentName:"li"},"postMessage")),(0,o.kt)("li",{parentName:"ul"},"拖放 api")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"拖放 api 使用示例"),(0,o.kt)("pre",null,(0,o.kt)("code",d({parentName:"pre"},{className:"language-html"}),'<head>\n    <style>\n        #draggable {\n            width: 200px;\n            height: 20px;\n            text-align: center;\n            background: white;\n        }\n\n        .dropzone {\n            width: 200px;\n            height: 20px;\n            background: blueviolet;\n            margin-bottom: 10px;\n            padding: 10px;\n        }\n    </style>\n</head>\n\n<body>\n    <div class="dropzone">\n        <div id="draggable" draggable="true" ondragstart="event.dataTransfer.setData(\'text/plain\',null)">\n            This div is draggable\n        </div>\n    </div>\n    <div class="dropzone"></div>\n    <div class="dropzone"></div>\n    <div class="dropzone"></div>\n    <script>\n        window.onload = function () {\n            var dragged\n\n            document.addEventListener("dragstart", function (event) {\n                dragged = event.target\n            }, false)\n\n            document.addEventListener("dragover", function (event) {\n                // prevent default to allow drop\n                event.preventDefault()\n            }, false)\n\n            document.addEventListener("drop", function (event) {\n                // prevent default action (open as link for some elements)\n                event.preventDefault()\n                if (event.target.className == "dropzone") {\n                    dragged.parentNode.removeChild(dragged)\n                    event.target.appendChild(dragged)\n                }\n            }, false)\n        }\n    <\/script>\n</body>\n'))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"媒体元素 ",(0,o.kt)("inlineCode",{parentName:"li"},"<video>"),"、",(0,o.kt)("inlineCode",{parentName:"li"},"<audio>")),(0,o.kt)("li",{parentName:"ul"},"浏览器状态管理(history)")),(0,o.kt)("h3",null,"HTML5 存储"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"sessionStorage"),": 大小上限为 2.5Mb(不同浏览器会有差异), 页面关闭时便清空;"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"localStorage"),": 大小上限为 2.5Mb(不同浏览器会有差异), 页面关闭时不会清空;")),(0,o.kt)("p",null,"它们的 api 也是一致的, 有如下几个:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"setItem(key, value)"),(0,o.kt)("li",{parentName:"ul"},"getItem(key)"),(0,o.kt)("li",{parentName:"ul"},"removeItem(key)"),(0,o.kt)("li",{parentName:"ul"},"clear()")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"在 HTML5 范围之外与存储相关的技术还有 cookie(存放在客户端, 可以由客户端也可以由服务端生成, 大小上限为 4 kb)、IndexedDB(大小上限为 5 Mb)、cacheStorage(ServiceWorker)。")),(0,o.kt)("h3",null,"HTML5 JavaScript Api"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"requestAnimationFrame(callback)"),": 表示在下次重绘前执行指定的回调函数，下面通过一个简单的 demo 来认识它。")),(0,o.kt)("pre",null,(0,o.kt)("code",d({parentName:"pre"},{className:"language-js"}),"let frame\nlet n = 5\nfunction callback(timeStamp) {\n    console.log(timeStamp) // 开始执行回调的时间戳\n    // 如果想要产生循环动画的效果, 需在回调函数中再次调用 requestAnimationFrame()\n    while (n > 0) {\n        requestAnimationFrame(callback)\n        console.log('测试执行顺序')\n        n--\n    }\n}\n\nframe = requestAnimationFrame(callback) // 在下次重绘之前调用回调\n\n// 如果想要销毁该回调, 可以执行 cancelAnimationFrame(frame)\n")),(0,o.kt)("p",null,"执行上述代码, 控制台(chrome)打印如下数据:"),(0,o.kt)("pre",null,(0,o.kt)("code",d({parentName:"pre"},{}),"先输出 5 次 '测试执行顺序'\n1795953.649\n1795970.318\n1795986.987\n1796003.656\n1796020.325\n...\n")),(0,o.kt)("p",null,"可以看到在浏览器上一帧的时间大致为 ",(0,o.kt)("inlineCode",{parentName:"p"},"16ms"),"。同时可以看到 ",(0,o.kt)("inlineCode",{parentName:"p"},"requestAnimation(callback)")," 中的 callback 也是异步的(只不过它是基于帧与帧间的异步), 所以上述打印结果是先打印出 5 次 '测试执行顺序' 后再依次打印出 5 个时间戳。requestAnimation 不仅可以用在动画上, 更是被 React 团队用来 hack requestIdleCallback 的实现。可以阅读",(0,o.kt)("a",d({parentName:"p"},{href:"https://github.com/MuYunyun/blog/blob/master/React/requestIdleCallback.md"}),"你不知道的 requestIdleCallback")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Web Worker"))),(0,o.kt)("p",null,"JavaScript 是一门单线程的语言, 借助 Web Worker 能在浏览器上模拟线程的概念。"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Service Worker"),": 基于 Web Worker 的 api 来处理网络请求以及缓存, 可以将其理解为是 ",(0,o.kt)("inlineCode",{parentName:"li"},"Web Worker + cache storage")," 的组合。同时其也是 PWA 依赖的最为重要的技术。")),(0,o.kt)("h3",null,"浏览器支持 HTML5 情况"),(0,o.kt)("p",null,"可以在 html5test.com 查询浏览器支持 HTML5 情况。"))}c.isMDXComponent=!0}}]);