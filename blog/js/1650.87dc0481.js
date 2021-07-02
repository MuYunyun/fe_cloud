(self.webpackChunkblog=self.webpackChunkblog||[]).push([[1650],{51650:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>m});var l=t(59713),a=t.n(l),r=t(6479),p=t.n(r),o=(t(67294),t(3905));function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var s={};function m(e){var n=e.components,t=p()(e,["components"]);return(0,o.kt)("wrapper",u(u(u({},s),t),{},{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h3",null,"流畅性"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"被动交互: animation"),(0,o.kt)("li",{parentName:"ul"},"主动交互: 鼠标、键盘")),(0,o.kt)("h3",null,"被动交互"),(0,o.kt)("p",null,(0,o.kt)("img",u({parentName:"p"},{src:"http://with.muyunyun.cn/23b109b73c8296e2c0d9178d214f33f0.jpg-400",alt:null}))),(0,o.kt)("p",null,"当前市面上的设备频率在 60 HZ 以上。"),(0,o.kt)("h3",null,"主动交互"),(0,o.kt)("p",null,"跑如下界面 ",(0,o.kt)("a",u({parentName:"p"},{href:"https://code.h5jun.com/pojob"}),"https://code.h5jun.com/pojob")),(0,o.kt)("p",null,"通过观察上述 demo, 可以看到 100ms 以下的点击是顺畅的, 而超过 100ms 的点击就会有卡顿现象。"),(0,o.kt)("h4",null,"让用户感觉到流畅"),(0,o.kt)("p",null,"衡量一个网页/App 是否流畅有个比较好用的 ",(0,o.kt)("a",u({parentName:"p"},{href:"https://developers.google.com/web/fundamentals/performance/rail"}),"Rail 模型"),", 它大概有以下几个评判标准值。"),(0,o.kt)("pre",null,(0,o.kt)("code",u({parentName:"pre"},{}),"Response —— 100ms\nAnimation —— 16.7ms\nIdle —— 50ms\nLoad —— 1000ms\n")),(0,o.kt)("h3",null,"像素管道"),(0,o.kt)("p",null,"像素管道一般由 5 个部分组成。JavaScript、样式、布局、绘制、合成。如下图所示:"),(0,o.kt)("p",null,(0,o.kt)("img",u({parentName:"p"},{src:"http://with.muyunyun.cn/a4498ef249fafc3d47f1443df4108256.jpg",alt:null}))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",u({parentName:"p"},{href:"https://developers.google.com/web/fundamentals/performance/rendering/?hl=zh-cn"}),"渲染性能"))),(0,o.kt)("h3",null,"保证主动交互让用户感觉流畅"),(0,o.kt)("pre",null,(0,o.kt)("code",u({parentName:"pre"},{className:"language-js"}),"function App() {\n  useEffect(() => {\n    setTimeout(() => {\n      const start = performance.now()\n      while (performance.now() - start < 1000) { }\n      console.log('done!')\n    }, 5000)\n  })\n  return (\n    <input type=\"text\" />\n  );\n}\n")),(0,o.kt)("p",null,(0,o.kt)("img",u({parentName:"p"},{src:"http://with.muyunyun.cn/574ac0a2b41a78fdb00f2db3d250de37.jpg-400",alt:null}))),(0,o.kt)("p",null,"超过 50 ms 认为是 ",(0,o.kt)("inlineCode",{parentName:"p"},"long task(长任务)"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"long task")," 会阻塞 ",(0,o.kt)("inlineCode",{parentName:"p"},"main thread")," 的运行。"),(0,o.kt)("p",null,"在 ",(0,o.kt)("a",u({parentName:"p"},{href:"https://developers.google.com/web/updates/2019/03/devtools#longtasks"}),"chrome 74"),", 对 long task 进行了标明:"),(0,o.kt)("p",null,(0,o.kt)("img",u({parentName:"p"},{src:"http://with.muyunyun.cn/26e2861027babde1248178a0ad2252ed.jpg-400",alt:null}))),(0,o.kt)("p",null,"如下是两种解决方案。"),(0,o.kt)("h4",null,"Web Worker"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"app.js")," 代码如下:"),(0,o.kt)("pre",null,(0,o.kt)("code",u({parentName:"pre"},{className:"language-js"}),"import React, {useEffect} from 'react'\nimport WorkerCode from './worker'\n\nfunction App() {\n  useEffect(() => {\n    const testWorker = new Worker(WorkerCode)\n    setTimeout(_ => {\n      testWorker.postMessage({})\n      testWorker.onmessage = function(ev) {\n        console.log(ev.data)\n      }\n    }, 5000)\n  })\n  return (\n    <input type=\"text\" />\n  );\n}\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"worker.js")," 代码如下:"),(0,o.kt)("pre",null,(0,o.kt)("code",u({parentName:"pre"},{className:"language-js"}),"const workerCode = () => {\n  self.onmessage = function() {\n    const start = performance.now()\n    while (performance.now() - start < 1000) { }\n    postMessage('done!')\n  }\n}\n")),(0,o.kt)("p",null,(0,o.kt)("img",u({parentName:"p"},{src:"http://with.muyunyun.cn/df7d2b274685c20638cdde68cb54927d.jpg",alt:null}))),(0,o.kt)("p",null,"此时在输入框输入时没有卡顿的感觉。"),(0,o.kt)("h4",null,"Time Slicing"),(0,o.kt)("p",null,"下面是另外一种使页面流畅的方法 —— ",(0,o.kt)("inlineCode",{parentName:"p"},"Time Slicing"),"(时间分片)。"),(0,o.kt)("h5",null,"Time Slicing 的意义"),(0,o.kt)("p",null,"如果某个任务超过 50ms 没有执行完, 为了避免阻塞浏览器主线程的执行, 该任务应该让出执行的控制权, 让浏览器处理完其它任务后再来执行该任务。"),(0,o.kt)("h5",null,"Time Slicing"),(0,o.kt)("p",null,"观察 Chrome 的 Performance, 火焰图如下,"),(0,o.kt)("p",null,(0,o.kt)("img",u({parentName:"p"},{src:"http://with.muyunyun.cn/8cbc0ea884095aa25a79bd9d474ff2e5.jpg",alt:null}))),(0,o.kt)("p",null,"从火焰图可以看出主线程被拆分为了多个时间分片, 所以不会造成卡顿。时间分片的代码片段如下所示:"),(0,o.kt)("pre",null,(0,o.kt)("code",u({parentName:"pre"},{className:"language-js"}),"function timeSlicing(gen) {\n  if (typeof gen === 'function') gen = gen()\n  if (!gen || typeof gen.next !== 'function') return\n\n  (function next() {\n    const res = gen.next() // ①\n    if (res.done) return // ⑤\n    setTimeout(next) // ③\n  })()\n}\n\n// 调用时间分片函数\ntimeSlicing(function* () {\n  const start = performance.now()\n  while (performance.now() - start < 1000) {\n    console.log('执行逻辑')\n    yield // ②\n  }\n  console.log('done') // ④\n})\n")),(0,o.kt)("p",null,"前置知识 ",(0,o.kt)("a",u({parentName:"p"},{href:"https://github.com/MuYunyun/blog/blob/master/BasicSkill/readES6/Generator.md"}),"Generator")),(0,o.kt)("p",null,"下面对该函数进行分析:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"往时间分片函数 ",(0,o.kt)("inlineCode",{parentName:"li"},"timeSlicing")," 中传入 ",(0,o.kt)("inlineCode",{parentName:"li"},"generator")," 函数;"),(0,o.kt)("li",{parentName:"ol"},"函数的执行顺序 —— ①、②、③、① (此时有个竞赛的关系, 如果 ",(0,o.kt)("inlineCode",{parentName:"li"},"performance.now() - start < 1000")," 则继续 ②、③, 如果 ",(0,o.kt)("inlineCode",{parentName:"li"},"performance.now() - start >= 1000")," 则跳出循环执行 ④、⑤);")),(0,o.kt)("p",null,"如何说:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"timeSlicing 传入 generator 函数;"),(0,o.kt)("li",{parentName:"ol"},"我们知道 generator 函数提供了 yiled 这个暂停口子;"),(0,o.kt)("li",{parentName:"ol"},"通过这个口子控制权可以转交到 timeSlicing 内部;"),(0,o.kt)("li",{parentName:"ol"},"通过 setTimeout 将 long tasks 切分到多个事件队列中执行;")),(0,o.kt)("h5",null,"避免把任务分解的过于零碎"),(0,o.kt)("p",null,"使用 ",(0,o.kt)("inlineCode",{parentName:"p"},"Time Slising")," 会让任务的完成时间变长, 但为了让用户体验流畅, 这种取舍还是有必要的。这个也是在 ",(0,o.kt)("a",u({parentName:"p"},{href:"https://github.com/MuYunyun/blog/blob/master/BasicSkill/React/schedule.md"}),"schedule")," 中提到的",(0,o.kt)("inlineCode",{parentName:"p"},"目标对象更快完成渲染"),"与",(0,o.kt)("inlineCode",{parentName:"p"},"及时响应优先级更高任务"),"的矛盾。"),(0,o.kt)("p",null,"假设某个任务执行时间为 ",(0,o.kt)("inlineCode",{parentName:"p"},"100ms"),", 假设被分割的任务间隔是 ",(0,o.kt)("inlineCode",{parentName:"p"},"4ms"),", 分割成 2 个 ",(0,o.kt)("inlineCode",{parentName:"p"},"50ms")," 的任务和分割成 100 个 ",(0,o.kt)("inlineCode",{parentName:"p"},"1ms")," 的任务分别耗时。"),(0,o.kt)("pre",null,(0,o.kt)("code",u({parentName:"pre"},{}),"(50 + 4) * 2 = 108ms\n\n(1 + 4) * 100 = 500ms\n")),(0,o.kt)("p",null,"针对上述函数作如下调整:"),(0,o.kt)("pre",null,(0,o.kt)("code",u({parentName:"pre"},{className:"language-js"}),"function timeSlicing(gen) {\n  if (typeof gen === 'function') gen = gen()\n  if (!gen || typeof gen.next !== 'function') return\n\n  (function next() {\n    const init = performance.now()\n    let res = gen.next()\n    while (!res.done && performance.now() - init < 25) { // 这里相当于是一个控制执行多少的阀门。\n      res = gen.next()\n    }\n    if (res.done) return\n    setTimeout(next)\n  })()\n}\n")),(0,o.kt)("h4",null,"conclusion"),(0,o.kt)("p",null,"针对 ",(0,o.kt)("inlineCode",{parentName:"p"},"long task")," 会阻塞 ",(0,o.kt)("inlineCode",{parentName:"p"},"main thread")," 的运行的情形, 给出两种解决方案:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Web Worker"),": 使用 ",(0,o.kt)("inlineCode",{parentName:"li"},"Web Worker")," 提供的多线程环境来处理 ",(0,o.kt)("inlineCode",{parentName:"li"},"long task"),";"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Time Slicing"),": 将主线程上的 ",(0,o.kt)("inlineCode",{parentName:"li"},"long task")," 进行时间分片;")),(0,o.kt)("h3",null,"保证被动交互让用户感觉流畅"),(0,o.kt)("p",null,"保证 ",(0,o.kt)("inlineCode",{parentName:"p"},"16.7ms")," 有新的一帧传输到界面上。除去用户的逻辑代码, 一帧内留给浏览器整合的时间大概只有 ",(0,o.kt)("inlineCode",{parentName:"p"},"6ms")," 左右, 回到像素管道上来, 我们可以从这几方面进行优化:"),(0,o.kt)("h4",null,"避免 CSS 选择器嵌套过深"),(0,o.kt)("p",null,"Style 这部分的优化在 css 样式选择器的使用, css 选择器使用的层级越多, 耗费的时间越多。以下是测试 css 选择器不同层级筛选相同元素的一次测试结果。"),(0,o.kt)("pre",null,(0,o.kt)("code",u({parentName:"pre"},{}),"div.box:not(:empty):last-of-type span         2.25ms\nindex.html:85 .box--last span                 0.28ms\nindex.html:85 .box:nth-last-child(-n+1) span  2.51ms\n")),(0,o.kt)("h4",null,"避免布局重排"),(0,o.kt)("pre",null,(0,o.kt)("code",u({parentName:"pre"},{className:"language-js"}),"// 先修改值\nel.style.witdh = '100px'\n// 后取值\nconst width = el.offsetWidth\n")),(0,o.kt)("p",null,"这段代码有什么问题呢?"),(0,o.kt)("p",null,(0,o.kt)("img",u({parentName:"p"},{src:"http://with.muyunyun.cn/9f446b40c45fa93b26bf91927e84c676.jpg",alt:null}))),(0,o.kt)("p",null,"可以看到它会造成布局重排。"),(0,o.kt)("p",null,(0,o.kt)("img",u({parentName:"p"},{src:"http://with.muyunyun.cn/02a6a152cb141781df115840495ed356.jpg",alt:null}))),(0,o.kt)("p",null,"应对的策略是调整它们的执行顺序,"),(0,o.kt)("pre",null,(0,o.kt)("code",u({parentName:"pre"},{className:"language-js"}),"// 先取值\nconst width = el.offsetWidth\n// 后修改值\nel.style.witdh = '100px'\n")),(0,o.kt)("p",null,(0,o.kt)("img",u({parentName:"p"},{src:"http://with.muyunyun.cn/b84405a014e98f0903703f7d45b9497d.jpg",alt:null}))),(0,o.kt)("p",null,"可以看到经过调换顺序后, 后执行的 el.style.width 会新开一个像素管道, 而不会在原先的像素管道进行重排。"),(0,o.kt)("p",null,"此外不要在循环中执行如下的操作,"),(0,o.kt)("pre",null,(0,o.kt)("code",u({parentName:"pre"},{className:"language-js"}),"for (var i = 0; i < 1000; i++) {\n  const newWidth = container.offsetWidth; // ①\n  boxes[i].style.width = newWidth + 'px'; // ②\n}\n")),(0,o.kt)("p",null,"可以在火焰图中看到它发生了重绘的警告,"),(0,o.kt)("p",null,(0,o.kt)("img",u({parentName:"p"},{src:"http://with.muyunyun.cn/4ee7202c8d28e685a9cd347061eb39e9.jpg",alt:null}))),(0,o.kt)("p",null,"执行顺序是 ①②①②①②①..., 假若我们在第一个 ① 后面插入一条竖线后 ①|②①②①②①, 其就变成先修改值后取值的情景, 所以也就发生了重绘!"),(0,o.kt)("p",null,"正确的使用姿势应该如下:"),(0,o.kt)("pre",null,(0,o.kt)("code",u({parentName:"pre"},{className:"language-js"}),"const newWidth = container.offsetWidth;\nfor (var i = 0; i < 1000; i++) {\n  boxes[i].style.width = newWidth + 'px';\n}\n")),(0,o.kt)("h4",null,"避免重绘"),(0,o.kt)("p",null,"创建 Layers(图层) 可以避免重绘,"),(0,o.kt)("pre",null,(0,o.kt)("code",u({parentName:"pre"},{className:"language-css"}),"{\n  transform: translateZ(0);\n}\n")),(0,o.kt)("h3",null,"相关链接"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",u({parentName:"li"},{href:"https://csstriggers.com/"}),"csstriggers")," 里添加了各个 CSS 属性对重排、重绘、组合的影响。"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",u({parentName:"li"},{href:"https://github.com/berwin/Blog/issues/38"}),"时间切片")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",u({parentName:"li"},{href:"https://zhuanlan.zhihu.com/p/37095662"}),"React Fiber 架构"),': "如何调度时间才能保证流畅"此小节可以参阅')))}m.isMDXComponent=!0}}]);