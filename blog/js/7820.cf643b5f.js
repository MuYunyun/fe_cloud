(self.webpackChunkblog=self.webpackChunkblog||[]).push([[7820],{70627:n=>{n.exports="# 探寻 JavaScript 精度问题\n\n阅读完本文可以了解到 `0.1 + 0.2` 为什么等于 `0.30000000000000004` 以及 JavaScript 中最大安全数是如何来的。\n\n### 十进制小数转为二进制小数方法\n\n拿 173.8125 举例如何将之转化为二进制小数。\n\n①. 针对整数部分 173, 采取`除 2 取余, 逆序排列`;\n\n```js\n173 / 2 = 86 ... 1\n86 / 2 = 43 ... 0\n43 / 2 = 21 ... 1   ↑\n21 / 2 = 10 ... 1   | 逆序排列\n10 / 2 = 5 ... 0    |\n5 / 2 = 2 ... 1     |\n2 / 2 = 1 ... 0\n1 / 2 = 0 ... 1\n```\n\n得整数部分的二进制为 `10101101`。\n\n②. 针对小数部分 0.8125, 采用`乘 2 取整, 顺序排列`;\n\n```js\n0.8125 * 2 = 1.625  |\n0.625 * 2 = 1.25    | 顺序排列\n0.25 * 2 = 0.5      |\n0.5 * 2 = 1         ↓\n```\n\n得小数部分的二进制为 `1101`。\n\n③. 将前面两部的结果相加, 结果为 `10101101.1101`;\n\n### 小心, 二进制小数丢失了精度！\n\n根据上面的知识, 将十进制小数 `0.1` 转为二进制:\n\n```js\n0.1 * 2 = 0.2\n0.2 * 2 = 0.4 // 注意这里\n0.4 * 2 = 0.8\n0.8 * 2 = 1.6\n0.6 * 2 = 1.2\n0.2 * 2 = 0.4 // 注意这里, 循环开始\n0.4 * 2 = 0.8\n0.8 * 2 = 1.6\n0.6 * 2 = 1.2\n...\n```\n\n可以发现有限十进制小数 `0.1` 却转化成了无限二进制小数 `0.00011001100...`, 可以看到精度在转化过程中丢失了！\n\n能被转化为有限二进制小数的十进制小数的最后一位必然以 5 结尾(因为只有 0.5 * 2 才能变为整数)。所以十进制中一位小数 `0.1 ~ 0.9` 当中除了 `0.5` 之外的值在转化成二进制的过程中都丢失了精度。\n\n### 推导 0.1 + 0.2 为何等于 0.30000000000000004\n\n在 JavaScript 中所有数值都以 IEEE-754 标准的 `64 bit` 双精度浮点数进行存储的。先来了解下 IEEE-754 标准下的[双精度浮点数](https://zh.wikipedia.org/wiki/%E9%9B%99%E7%B2%BE%E5%BA%A6%E6%B5%AE%E9%BB%9E%E6%95%B8)。\n\n![](http://with.muyunyun.cn/dda7d5b38676abfa13afb344f8a792ed.jpg-300)\n\n这幅图很关键, 可以从图中看到 IEEE-754 标准下双精度浮点数由三部分组成, 分别如下:\n\n* sign(符号): 占 1 bit, 0 表示正, 1 表示负;\n* exponent(指数): 占 11 bit, 表示范围;\n* mantissa(尾数): 占 52 bit, 表示精度, 多出的末尾如果是 1 需要进位;\n\n推荐阅读 [JavaScript 浮点数陷阱及解法](https://github.com/camsong/blog/issues/9), 阅读完该文后可以了解到以下公式的由来。\n\n![](http://with.muyunyun.cn/5c268e4bd6e0bf2466598d9d5cb58a16.jpg-200)\n\n> 精度位总共是 53 bit, 因为用科学计数法表示, 所以首位固定的 1 就没有占用空间。即公式中 (M + 1) 里的 1。另外公式里的 1023 是 2^11 的一半。小于 1023 的用来表示小数, 大于 1023 的用来表示整数。\n\n> 指数可以控制到 2^1024 - 1, 而精度最大只达到 2^53 - 1, 两者相比可以得出 JavaScript 实际可以精确表示的数字其实很少。\n\n`0.1` 转化为二进制为 `0.0001100110011...`, 用科学计数法表示为 `1.100110011... x 2^(-4)`, 根据上述公式, `S` 为 `0`(1 bit), `E` 为 `-4 + 1023`, 对应的二进制为 `01111111011`(11 bit), `M` 为 `1001100110011001100110011001100110011001100110011010`(52 bit, 另外注意末尾的进位), `0.1` 的存储示意图如下:\n\n![](http://with.muyunyun.cn/5b7c0dcc0b1770b6eed238e288eb4c0e.jpg-300)\n\n同理, `0.2` 转化为二进制为 `0.001100110011...`, 用科学计数法表示为 `1.100110011... x 2^(-3)`, 根据上述公式, `E` 为 `-3 + 1023`, 对应的二进制为 `01111111100`, `M` 为 `1001100110011001100110011001100110011001100110011010`, `0.2` 的存储示意图如下:\n\n![](http://with.muyunyun.cn/cb0ef89aa0ed6e8d32b90d1a29cfc9e1.jpg-300)\n\n`0.1 + 0.2` 即 2^(-4) x 1.1001100110011001100110011001100110011001100110011010 与 2^(-3) x 1.1001100110011001100110011001100110011001100110011010 之和\n\n```js\n// 计算过程\n0.00011001100110011001100110011001100110011001100110011010\n0.0011001100110011001100110011001100110011001100110011010\n\n// 相加得\n0.01001100110011001100110011001100110011001100110011001110\n```\n\n`0.01001100110011001100110011001100110011001100110011001110` 转化为十进制就是 `0.30000000000000004`。验证完成!\n\n### JavaScript 的最大安全数是如何来的\n\n根据双精度浮点数的构成, 精度位数是 `53 bit`。安全数的意思是在 `-2^53 ~ 2^53` 内的整数(不包括边界)与唯一的双精度浮点数互相对应。举个例子比较好理解:\n\n```js\nMath.pow(2, 53) === Math.pow(2, 53) + 1 // true\n```\n\n`Math.pow(2, 53)` 竟然与 `Math.pow(2, 53) + 1` 相等！这是因为 Math.pow(2, 53) + 1 已经超过了尾数的精度限制(53 bit), 在这个例子中 `Math.pow(2, 53)` 和 `Math.pow(2, 53) + 1` 对应了同一个双精度浮点数。所以 `Math.pow(2, 53)` 就不是安全数了。\n\n> 最大的安全数为 `Math.pow(2, 53) - 1`, 即 `9007199254740991`。\n\n### 业务中碰到的精度问题以及解决方案\n\n了解 JavaScript 精度问题对我们业务有什么帮助呢？举个业务场景: 比如有个订单号后端 Java 同学定义的是 long 类型, 但是当这个订单号转换成 JavaScript 的 Number 类型时候精度会丢失了, 那没有以上知识铺垫那就理解不了精度为什么会丢失。\n\n解决方案大致有以下几种:\n\n1.针对大数的整数可以考虑使用 BigInt 类型(目前在 ~~stage 3~~ stage4 阶段)；\n\n2.使用 [bigNumber](https://github.com/MikeMcl/bignumber.js), 它的思想是转化成 string 进行处理, 这种方式对性能有一定影响;\n\n3.可以考虑使用 [long.js](https://github.com/dcodeIO/long.js), 它的思想是将长度为 64 位的 long 类型值转化成两个精度为 32 位的双精度类型的值。\n\n4.针对小数的话可以使用 [number-precision](https://github.com/nefe/number-precision), 该库将小数转为整数后再作处理;\n\n### 相关链接\n\n* [代码之谜系列](http://justjavac.com/codepuzzle/2012/11/11/codepuzzle-float-who-stole-your-accuracy.html)\n* [JavaScript 浮点数陷阱及解法](https://github.com/camsong/blog/issues/9): 推荐阅读\n* [javascript 里最大的安全的整数为什么是 2 的 53 次方减一](https://www.zhihu.com/question/29010688)\n* [IEEE-754 进制转换图生成](http://www.binaryconvert.com/convert_double.html): 工具\n* [在线进制转换工具](https://www.sojson.com/hexconvert.html): 工具\n\n"}}]);