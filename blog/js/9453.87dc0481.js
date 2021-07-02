(self.webpackChunkblog=self.webpackChunkblog||[]).push([[9453],{69453:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>k});var a=n(59713),r=n.n(a),l=n(6479),o=n.n(l),i=(n(67294),n(3905));function p(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?p(Object(n),!0).forEach((function(e){r()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var u={};function k(t){var e=t.components,n=o()(t,["components"]);return(0,i.kt)("wrapper",c(c(c({},u),n),{},{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"本文对 CAS(Central Authentication Service) 流程作个梳理。"),(0,i.kt)("h3",null,"什么是 CAS"),(0,i.kt)("p",null,"中央认证服务(",(0,i.kt)("a",c({parentName:"p"},{href:"https://github.com/apereo/cas"}),"CAS"),")是是单点登录(SSO)的一种方案。使用它后所有应用可以公用一套登录系统, 在任意一个应用中进行登录后, 其它应用便无须再次登录。"),(0,i.kt)("p",null,"CAS 分为 CAS Client 和 CAS Server, 它们分工如下:"),(0,i.kt)("p",null,"CAS Client: 处理对受保护方应用的访问请求 (可以理解成网关项目);\nCAS Server: 处理账号、密码的认证, 需要独立部署 (部署在后端那边);"),(0,i.kt)("h3",null,"以 Batman 系统为例剖析登录 CAS 系统的流程"),(0,i.kt)("p",null,"下面以 Batman 为例对 CAS(Central Authentication Service) 流程作个梳理。"),(0,i.kt)("p",null,(0,i.kt)("img",c({parentName:"p"},{src:"http://with.muyunyun.cn/89fccb6391b0697815078d6f725dc124.jpg",alt:null}))),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"在浏览器中输入 batman.dianwoda.cn;"),(0,i.kt)("li",{parentName:"ol"},"如果没有登录(session 里没有相应信息), 则重定向到 ",(0,i.kt)("inlineCode",{parentName:"li"},"https://cas.nidianwo.com/login?service=http%3A%2F%2Fbatman.dianwoda.cn%2F"),";"),(0,i.kt)("li",{parentName:"ol"},"输入账号密码进行认证;"),(0,i.kt)("li",{parentName:"ol"},"CAS Server 下发 ticket;"),(0,i.kt)("li",{parentName:"ol"},"校验 ticket;"),(0,i.kt)("li",{parentName:"ol"},"校验通过, 重定向回 batman.dianwoda.cn;")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"登录了 batman 以后, 再在浏览器输入 ",(0,i.kt)("a",c({parentName:"p"},{href:"http://newhawkeye.dianwoda.com"}),"http://newhawkeye.dianwoda.com")," 不用再次登录的原因？")),(0,i.kt)("p",null,"在 CAS Server 中进行了判断, 如果已经登录过, 则省略了步骤 3。"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"在 batman 登录了 CAS 系统以后, 为什么还要 ",(0,i.kt)("inlineCode",{parentName:"p"},"fetch https://cas.nidianwo.com/login?service=http://batman-gateway.dianwoda.com/auth/cas"))),(0,i.kt)("p",null,"应该是网关的搭建原因。batman 的 CAS Client 在后端那里, batman-gateway 作为一个 node 项目相当于又作为了一个 CAS Client。在已经登录 CAS 的基础上, 访问 ",(0,i.kt)("inlineCode",{parentName:"p"},"https://cas.nidianwo.com/login?service=http://batman-gateway.dianwoda.com/auth/cas")," 相当于执行上图的 2、4、5 步骤(省略了步骤 3)"),(0,i.kt)("h3",null,"相关链接"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",c({parentName:"li"},{href:"https://blog.csdn.net/cruise_h/article/details/51013597"}),"CAS 实现 SSO 单点登录原理"))))}k.isMDXComponent=!0}}]);