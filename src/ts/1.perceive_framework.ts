// 编译上下文，通过 tsconfig.json 中的 compilerOptions 属性来指定

/**
 1. tslint-vue 用于检查 .vue 文件中的代码，但是检测不到 tslint 的存在，遂放弃使用
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 */

// 认知体系

// 1. ES5 和 ES6 与 JavaScript 的关系与差异

// 2. CommonJS 和 JavaScript 和 ECMAScript 的关系与差异

// 3. 浏览器和 Node.js 的关系与差异

// 4. 浏览器 DOM 和 BOM 对象模型

// 5. jsx 语法, js 和 jsx 的关系与差异

// 6. tsx 语法, ts 和 tsx 的关系与差异

// 7. 为什么只有 node(18.17.1) 就可以编译运行 ts 代码 ? 而不需要 tsc 呢 ? 换句话说 tsc 和 node 的关系与差异是什么 ? 那为什么会有 ts-node 呢 ?
// Q：node 对源码文件扩展名没要求,  但是 tsc 对源码文件扩展名有要求, 必须是 .ts 或者 .tsx 才行, 当node 执行一个 无 ES 语法错误的 ts 源文件时，是不会报错的

// 8. 指定 ts 编译后的那几种 js 规范
// tsconfig.json 中的 target 属性, 默认是 ES3, 可以指定为 ES5, ES6, ES2015, ES2016, ES2017, ES2018, ES2019, ES2020, ES2021, ESNext

// 9. 指定 ts 编译后的 模块管理方式
// tsconfig.json 中的 module 属性, 默认是 commonjs, 可以指定为 amd, commonjs, es2015, es2020, esnext, none, system, umd
// 常用的 commonjs, 的模块导入导出的方式 为 require 和 module.exports
// 常用的 es2015, 的模块导入导出的方式 为 import 和 export，而 es2015 其实就是es6

// 而 nodejs 和 浏览器 对这几种 模块的引用方式都是支持的, 但是 node.js 默认是 commonjs, 浏览器默认是 es2015 ？？？

// ------------------------------------------------------------------------------------------------------------------------------------------
// stable-diffusion 高斯模糊
// LLM Transformer 文本自注意
