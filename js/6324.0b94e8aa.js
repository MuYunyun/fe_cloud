(self.webpackChunkblog=self.webpackChunkblog||[]).push([[6324],{76324:n=>{n.exports="### webkit\n\n* [WebKit](https://webkit.org/): 如何下载、编译 webkit\n  * [github](https://github.com/WebKit/webkit)\n* [Chromium](www.chromium.org)\n\n### webkit 架构\n\n![](http://with.muyunyun.cn/93c9dbe4d56eb2c5f3be2a14e265ca2b.jpg-muyy)\n\n* JavaScript 引擎: Google 的 Chromium 中, 它被替换为 V8 引擎。\n\n### webkit 目录\n\n* LayoutTests\n* PerformanceTests\n* Source\n  * JavaScriptCore // Webkit 默认的的 JavaScript 引擎\n  * Platform\n  * WebCore\n    * css         // css 解释器\n    * dom         // DOM 节点的基础类及树结构\n    * html        // HTML 解释器和 DOM 节点\n    * inspector   // Web Inspector 的实现\n    * loader      // 资源加载器、缓存等\n    * page        // 与页面相关的全局对象的实现, 包括 window、navigator 等 DOM 对象, 事件, 动画处理\n    * platform    // 各个移植的代码\n    * storage     // 存储的共享代码\n  * WebKit        // 绑定和嵌入式接口层)\n  * Webkit2       // 绑定和嵌入式接口层)\n    * efl             // efl 的主函数, 构建一个简单的浏览器, 还有其它移植的代码\n    * NetworkProcess  // 网络进程相关代码\n    * UIProcess       // UI 进程相关代码\n    * WebProcess      // Web 进程相关代码\n  * WTF       // 智能类库。字符串操作、各种容器、指针、线程、算法等\n* Tools\n\n### Chromium 多进程模型\n\n![](http://with.muyunyun.cn/af3e700cca1056b8796667751e27e7ec.jpg-muyy)\n\n* `Browser 进程`: 浏览器的主进程, 是其它类型进程的祖先, 负责它们的创建和销毁。\n* `Renderer 进程`: 网页的渲染进程。\n* `NPAPI 插件进程`。\n* `GPU 进程`: 对 3D 图形加速调用的实现。\n* `Pepper 插件进程`。\n\n每个进程内部有多个线程。\n\nread page 56"}}]);