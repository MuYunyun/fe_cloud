(self.webpackChunkblog=self.webpackChunkblog||[]).push([[4065],{64065:n=>{n.exports="### 120. Triangle\n\nGiven a triangle array, return the `minimum path sum` from top to bottom.\n\nFor each step, you may move to an adjacent number of the row below. More formally, if you are on index i on the current row, you may move to either `index i` or `index i + 1` on the next row.\n\nExample 1:\n\n```js\nInput: triangle = [[2], [3,4], [6,5,7], [4,1,8,3]]\n2 3 6 1\n2 3 5 1\nOutput: 11\nExplanation: The triangle looks like:\n   2\n  3 4\n 6 5 7\n4 1 8 3\nThe minimum path sum from top to bottom is 2 + 3 + 5 + 1 = 11 (underlined above).\n```\n\nExample 2:\n\n```js\nInput: triangle = [[-10]]\nOutput: -10\n```\n\n* Constraints:\n  * 1 <= triangle.length <= 200\n  * triangle[0].length == 1\n  * triangle[i].length == triangle[i - 1].length + 1\n  * -104 <= triangle[i][j] <= 104\n \nFollow up: Could you do this using only O(n) extra space, where n is the total number of rows in the triangle?\n\n### Analyze\n\n```js\n2\n3 4\n6 5 7\n4 1 6 8\n```\n\n根据题意如果当前值的下标为 `(m, n)`, 则其下一个数的下标为 `(m + 1， n)` 或者 `(m + 1, n + 1)`。\n\n```js\n/**\n * @param {number[][]} triangle\n * @return {number}\n */\nvar minimumTotal = function(triangle) {\n  const cache = { smallest: Infinity }\n  getSmaller(triangle, 0, 0, 0, cache)\n  return cache.smallest\n}\n\n// m: witch row\n// n: witch column\n// result: current min value\nvar getSmaller = function(triangle, m, n, result, cache) {\n  const sum = result + (triangle[m][n] ? triangle[m][n] : 0)\n  if (m === triangle.length - 1) {\n    cache.smallest = Math.min(cache.smallest, sum)\n    return\n  }\n\n  getSmaller(triangle, m + 1, n, sum, cache)\n  getSmaller(triangle, m + 1, n + 1, sum, cache)\n}\n```\n\n此时提交的时候执行时间超时, 开始优化!\n\n首先使用 `f(m, n) = Math.min(f(m + 1, n), f(m + 1, n + 1)) + triangle[m][n]` 优化、精简代码如下:\n\n```js\n/**\n * @param {number[][]} triangle\n * @return {number}\n */\nvar minimumTotal = function(triangle) {\n  return getSmaller(triangle, 0, 0)\n}\n\n// m: witch row\n// n: witch column\nvar getSmaller = function(triangle, m, n) {\n  console.log('m', m, 'n', n, 'triangle', triangle[m][n])\n  if (m === triangle.length - 1) {\n    return triangle[m][n]\n  }\n  const a = getSmaller(triangle, m + 1, n)\n  const b = getSmaller(triangle, m + 1, n + 1)\n  return (a < b ? a : b) + triangle[m][n]\n}\n```\n\n以 `var triangle = [[2], [3,4], [6,5,7], [4,1,8,3]]` 为例, 当前 `getSmaller` 函数执行次数为 15。调用栈如下:\n\n```js\n2\n3 4\n6 5 7\n4 1 8 3\n\nm 0 n 0 triangle 2\nm 1 n 0 triangle 3\nm 2 n 0 triangle 6\nm 3 n 0 triangle 4\nm 3 n 1 triangle 1\nm 2 n 1 triangle 5 <-\nm 3 n 1 triangle 1 <-\nm 3 n 2 triangle 8 <-\nm 1 n 1 triangle 4\nm 2 n 1 triangle 5 <-\nm 3 n 1 triangle 1 <-\nm 3 n 2 triangle 8 <-\nm 2 n 2 triangle 7\nm 3 n 2 triangle 8\nm 3 n 3 triangle 3\n```\n\n此时可以发现箭头处的调用是相似的, 故而可以使用缓存减少调用栈的次数。缓存优化如下:\n\n```js\n/**\n * @param {number[][]} triangle\n * @return {number}\n */\nvar minimumTotal = function(triangle) {\n  return getSmaller(triangle, 0, 0, {})\n}\n\n// m: witch row\n// n: witch column\nvar getSmaller = function(triangle, m, n, cache) {\n  console.log('m', m, 'n', n, 'triangle', triangle[m][n])\n  if (m === triangle.length - 1) {\n    return triangle[m][n]\n  }\n  const a = typeof cache[`${m + 1}_${n}`] === 'number'\n    ? cache[`${m + 1}_${n}`]\n    : getSmaller(triangle, m + 1, n, cache)\n  const b = typeof cache[`${m + 1}_${n + 1}`] === 'number'\n    ? cache[`${m + 1}_${n + 1}`]\n    : getSmaller(triangle, m + 1, n + 1, cache)\n  const result = (a < b ? a : b) + triangle[m][n]\n  cache[`${m}_${n}`] = result\n  return result\n}\n```\n\n执行优化后式子, 调用栈如下, 可以发现此前箭头处重复的调用现已缩小为一次。\n\n```js\nm 0 n 0 triangle 2\nm 1 n 0 triangle 3\nm 2 n 0 triangle 6\nm 3 n 0 triangle 4\nm 3 n 1 triangle 1\nm 2 n 1 triangle 5 <-\nm 3 n 1 triangle 1 <-\nm 3 n 2 triangle 8 <-\nm 1 n 1 triangle 4\nm 2 n 2 triangle 7\nm 3 n 2 triangle 8\nm 3 n 3 triangle 3\n```\n\n接着使用动态规划的思路来解题, 因为其递归方向为至底向上, 因此可以减少缓存记忆化的环节。\n\n大体思路是遍历 `triangle` 最后一行数据, 向上查找数据。取和为最小的那次数据。\n\n```js\n2\n3 4\n6 5 7\n4 1 6 8\n```\n\n```js\n/**\n * @param {number[][]} triangle\n * @return {number}\n */\nvar minimumTotal = function(triangle) {\n  let result = Infinity\n  for (let n = 0; n < triangle[triangle.length - 1].length; n++) {\n    const value = getSmaller(triangle, triangle.length - 1, n)\n    result = Math.min(value, result)\n    console.log(`start${n}`)\n    console.log('result', value, n)\n  }\n  return result\n}\n\nvar getSmaller = function(triangle, m, n) {\n  console.log('triangle[m][n]', triangle[m][n], 'm', m, 'n', n)\n  if (m === 0) {\n    return triangle[m][n]\n  }\n\n  if (triangle[m - 1][n - 1] === undefined) {\n    return getSmaller(triangle, m - 1, n) + triangle[m][n]\n  }\n\n  const a = getSmaller(triangle, m - 1, n) + triangle[m][n]\n  const b = getSmaller(triangle, m - 1, n - 1) + triangle[m][n]\n  // console.log('value', a < b ? a : b)\n  return (a < b ? a : b) + triangle[m][n]\n}\n```\n\n```js\n33\n输入：\nvar triangle =\n[\n  [-3],\n  [-9,7],\n  [3,2,-4],\n  [4,6,-1,9],\n  [8,1,6,6,-4],\n  [5,-5,5,7,-7,5],\n  [-2,8,-5,1,0,-9,-9],\n  [9,-5,0,-4,-5,-3,5,6],\n  [-1,-1,-1,4,-2,-3,-4,-8,-7],\n  [-2,3,-5,-6,-3,-6,5,4,-8,-9],\n  [-8,-1,7,9,-2,-8,-1,3,-4,5,-5]\n]\n\n4\n输出：\n-26\n预期：\n-41\n```"}}]);