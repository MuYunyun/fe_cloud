(self.webpackChunkblog=self.webpackChunkblog||[]).push([[7219],{57219:(n,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>d});var a=e(59713),r=e.n(a),i=e(6479),s=e.n(i),u=(e(67294),e(3905));function l(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,a)}return e}function o(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?l(Object(e),!0).forEach((function(t){r()(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):l(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}var c={};function d(n){var t=n.components,e=s()(n,["components"]);return(0,u.kt)("wrapper",o(o(o({},c),e),{},{components:t,mdxType:"MDXLayout"}),(0,u.kt)("h3",null,"40. Combination Sum II"),(0,u.kt)("p",null,"Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sum to target."),(0,u.kt)("p",null,"Each number in candidates may ",(0,u.kt)("inlineCode",{parentName:"p"},"only be used once")," in the combination."),(0,u.kt)("p",null,"Note: The solution set must ",(0,u.kt)("inlineCode",{parentName:"p"},"not contain duplicate combinations"),"."),(0,u.kt)("p",null,"Example 1:"),(0,u.kt)("pre",null,(0,u.kt)("code",o({parentName:"pre"},{className:"language-js"}),"Input: candidates = [10,1,2,7,6,1,5], target = 8\nOutput:\n[\n  [1,1,6],\n  [1,2,5],\n  [1,7],\n  [2,6]\n]\n")),(0,u.kt)("p",null,"Example 2:"),(0,u.kt)("pre",null,(0,u.kt)("code",o({parentName:"pre"},{className:"language-js"}),"Input: candidates = [2,5,2,1,2], target = 5\nOutput:\n[\n  [1,2,2],\n  [5]\n]\n")),(0,u.kt)("p",null,"Constraints:"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"1 <= candidates.length <= 100"),(0,u.kt)("li",{parentName:"ul"},"1 <= candidates","[i]"," <= 50"),(0,u.kt)("li",{parentName:"ul"},"1 <= target <= 30")),(0,u.kt)("h3",null,"analyze"),(0,u.kt)("p",null,"是",(0,u.kt)("a",o({parentName:"p"},{href:"https://github.com/MuYunyun/blog/blob/master/LeetCode/39.%E7%BB%84%E5%90%88%E6%80%BB%E5%92%8C/index.js"}),"题目 39")," 的改版, 在 DFS 的基础上, 对于题目要求",(0,u.kt)("inlineCode",{parentName:"p"},"解集不能包含重复的组合"),"要稍加处理。"),(0,u.kt)("p",null,"思路: 递归解组合问题。"),(0,u.kt)("ol",null,(0,u.kt)("li",{parentName:"ol"},"对 candidates 排序。"),(0,u.kt)("li",{parentName:"ol"},"对这种情况要过滤: ",(0,u.kt)("inlineCode",{parentName:"li"},"i !== start && candidates[i] === candidates[i - 1]"),", 可以以 (","[1, 1, 2]",", 3) 这个例子进行思考不产生两个 ","[1, 2]","。")),(0,u.kt)("p",null,"解法一:"),(0,u.kt)("pre",null,(0,u.kt)("code",o({parentName:"pre"},{className:"language-js"}),"/**\n * @param {number[]} candidates\n * @param {number} target\n * @return {number[][]}\n */\nvar combinationSum2 = function (candidates, target) {\n  const result = []\n\n  const sortCandidates = candidates.sort((r1, r2) => r1 - r2)\n  const DFS = function (sum, arr, start) {\n    if (sum === target) {\n      result.push(arr.slice())\n      return\n    }\n    if (sum > target) {\n      return\n    }\n\n    for (let i = start; i < sortCandidates.length; i++) {\n      if (i !== start && sortCandidates[i] === sortCandidates[i - 1]) { // [1,1,2], 3。避免产生两个 [1, 2]\n        continue\n      }\n\n      sum += sortCandidates[i]\n      arr.push(sortCandidates[i])\n      DFS(sum, arr, i + 1)\n      arr.pop(sortCandidates[i])\n      sum -= sortCandidates[i]\n    }\n  }\n\n  DFS(0, [], 0)\n\n  return result\n};\n")),(0,u.kt)("p",null,"解法二:"),(0,u.kt)("pre",null,(0,u.kt)("code",o({parentName:"pre"},{className:"language-js"}),"/**\n * @param {number[]} candidates\n * @param {number} target\n * @return {number[][]}\n */\nvar combinationSum2 = function (candidates, target) {\n  const result = []\n  const sorted = candidates.sort((r1, r2) => r1 - r2)\n  recurcive(sorted, target, 0, [], result)\n  return result\n};\n\nvar recurcive = function (candidates, target, start, temp, result) {\n  if (target < 0) {\n    return\n  }\n\n  if (target === 0) {\n    result.push([...temp])\n    return\n  }\n\n  for (let i = start; i < candidates.length; i++) {\n    if (candidates[i] === candidates[i - 1] && i !== start) {\n      continue\n    }\n    temp.push(candidates[i])\n    target = target - candidates[i]\n    recurcive(candidates, target, i + 1, temp, result)\n    target = target + candidates[i]\n    temp.pop(candidates[i])\n  }\n}\n")))}d.isMDXComponent=!0}}]);