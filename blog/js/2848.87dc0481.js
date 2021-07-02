(self.webpackChunkblog=self.webpackChunkblog||[]).push([[2848],{2848:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>c});var a=t(59713),r=t.n(a),l=t(6479),o=t.n(l),p=(t(67294),t(3905));function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var i={};function c(e){var n=e.components,t=o()(e,["components"]);return(0,p.kt)("wrapper",u(u(u({},i),t),{},{components:n,mdxType:"MDXLayout"}),(0,p.kt)("h3",null,"150.Evaluate Reverse Polish Notation"),(0,p.kt)("p",null,"Evaluate the value of an arithmetic expression in Reverse Polish Notation."),(0,p.kt)("p",null,"Valid operators are ",(0,p.kt)("inlineCode",{parentName:"p"},"+, -, *, /"),". Each operand may be an ",(0,p.kt)("inlineCode",{parentName:"p"},"integer")," or ",(0,p.kt)("inlineCode",{parentName:"p"},"another expression"),"."),(0,p.kt)("p",null,"Note:"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"Division between two integers should truncate toward zero."),(0,p.kt)("li",{parentName:"ul"},"The given RPN expression is ",(0,p.kt)("inlineCode",{parentName:"li"},"always valid"),". That means the expression would always evaluate to a result and there won't be any divide by zero operation.")),(0,p.kt)("p",null,"Example 1:"),(0,p.kt)("pre",null,(0,p.kt)("code",u({parentName:"pre"},{className:"language-js"}),'Input: ["2", "1", "+", "3", "*"]\nOutput: 9\n\nExplanation: ((2 + 1) * 3) = 9\n')),(0,p.kt)("p",null,"Example 2:"),(0,p.kt)("pre",null,(0,p.kt)("code",u({parentName:"pre"},{className:"language-js"}),'Input: ["4", "13", "5", "/", "+"]\nOutput: 6\n\nExplanation: (4 + (13 / 5)) = 6\n')),(0,p.kt)("p",null,"Example 3:"),(0,p.kt)("pre",null,(0,p.kt)("code",u({parentName:"pre"},{className:"language-js"}),'Input: ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]\nOutput: 22\n\nExplanation:\n  ((10 * (6 / ((9 + 3) * -11))) + 17) + 5\n= ((10 * (6 / (12 * -11))) + 17) + 5\n= ((10 * (6 / -132)) + 17) + 5\n= ((10 * 0) + 17) + 5\n= (0 + 17) + 5\n= 17 + 5\n= 22\n')),(0,p.kt)("h3",null,"Analyze"),(0,p.kt)("p",null,"栈的使用, 思路大致如下:"),(0,p.kt)("ol",null,(0,p.kt)("li",{parentName:"ol"},"遇到数字推入栈;"),(0,p.kt)("li",{parentName:"ol"},"遇到符号则从栈中取出最后两位进行数学操作;")),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},"稍加留意的是, 需要对 / 运算进行取整操作;")),(0,p.kt)("pre",null,(0,p.kt)("code",u({parentName:"pre"},{className:"language-js"}),"/**\n * @param {string[]} tokens\n * @return {number}\n */\nvar evalRPN = function(tokens) {\n  const stack = []\n  const operateTag = ['+', '-', '*', '/']\n  for (let i = 0; i < tokens.length; i++) {\n    const operateTagIndex = operateTag.indexOf(tokens[i])\n    if (operateTagIndex === -1) {\n      stack.push(tokens[i])\n    } else {\n      const y = stack.pop()\n      const x = stack.pop()\n      let result\n      if (operateTagIndex === 0) {\n        result = Number(x) + Number(y)\n      } else if (operateTagIndex === 1) {\n        result = Number(x) - Number(y)\n      } else if (operateTagIndex === 2) {\n        result = Number(x) * Number(y)\n      } else if (operateTagIndex === 3) {\n        result = parseInt((Number(x) / Number(y)), 10)\n      }\n      stack.push(result)\n    }\n  }\n  return stack[0]\n}\n")),(0,p.kt)("h3",null,"Similar Title"),(0,p.kt)("p",null,"20、71"))}c.isMDXComponent=!0}}]);