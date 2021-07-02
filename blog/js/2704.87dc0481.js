(self.webpackChunkblog=self.webpackChunkblog||[]).push([[2704],{52704:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>i});var r=n(59713),o=n.n(r),a=n(6479),l=n.n(a),s=(n(67294),n(3905));function p(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?p(Object(n),!0).forEach((function(e){o()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var c={};function i(t){var e=t.components,n=l()(t,["components"]);return(0,s.kt)("wrapper",u(u(u({},c),n),{},{components:e,mdxType:"MDXLayout"}),(0,s.kt)("h3",null,"栈"),(0,s.kt)("p",null,"栈的核心是 FILO, 首先编写一个栈类:"),(0,s.kt)("pre",null,(0,s.kt)("code",u({parentName:"pre"},{className:"language-js"}),"function Stack() {\n  this.items = []\n}\n\nStack.prototype.push = function(item) {\n  this.items.push(item)\n}\n\nStack.prototype.pop = function() {\n  return this.items.pop()\n}\n\nStack.prototype.size = function() {\n  return this.items.length\n}\n\nStack.prototype.isEmpty = function() {\n  return this.items.length === 0\n}\n\nStack.prototype.clear = function() {\n  this.items = []\n}\n")),(0,s.kt)("p",null,"题目: 实现一个十进制转化为二进制的函数:"),(0,s.kt)("pre",null,(0,s.kt)("code",u({parentName:"pre"},{}),"6 除以 2 = 3 ... 0     3 除以 2 = 1 ... 1   1 除以 2 = 0 ... 1    110\n测试用例: 6 => 110\n")),(0,s.kt)("pre",null,(0,s.kt)("code",u({parentName:"pre"},{className:"language-js"}),"function conversion(num) {\n  const stack = new Stack()\n  let remainder\n  while (num > 0) {\n    remainder = num % 2\n    stack.push(remainder)\n    num = Math.floor(num / 2)\n  }\n  let str = ''\n  while (!stack.isEmpty()) {\n    str = str + stack.pop()\n  }\n  return str\n}\n")),(0,s.kt)("p",null,"题目: 平衡圆括号"),(0,s.kt)("pre",null,(0,s.kt)("code",u({parentName:"pre"},{}),"测试用例:\n{{([][])}()} => true\n[{()] => false\n")),(0,s.kt)("pre",null,(0,s.kt)("code",u({parentName:"pre"},{className:"language-js"}),"function isBalance(symbol) {\n  const stack = new Stack()\n  const left = '{[('\n  const right = '}])'\n  let popValue\n  let tag = true\n\n  const match = function(popValue, current) {\n    if (left.indexOf(popValue) !== right.indexOf(current)) {\n      tag = false\n    }\n  }\n\n  for (let i = 0; i < symbol.length; i++) {\n    if (left.includes(symbol[i])) {\n      stack.push(symbol[i])\n    } else if (right.includes(symbol[i])) {\n      popValue = stack.pop()\n      match(popValue, symbol[i])\n    }\n  }\n  return tag\n}\n")),(0,s.kt)("h3",null,"扩展: 栈和递归的紧密关系"),(0,s.kt)("p",null,"递归的写法本质上都是运用栈的思想。这里列几道 leetcode 上的题目作为参考"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",u({parentName:"li"},{href:"%5BAnalyze%5D(https://github.com/MuYunyun/blog/blob/master/LeetCode/144.Binary_Tree_Preorder_Traversal/README.md)"}),"Binary Tree Preorder Traversal")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",u({parentName:"li"},{href:"https://github.com/MuYunyun/blog/blob/master/LeetCode/341.Flatten_Nested_List_Iterator/README.md"}),"Flatten Nested List Iterator"))))}i.isMDXComponent=!0}}]);