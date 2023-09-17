// FIXME An import path can only end with a '.ts' extension when 'allowImportingTsExtensions' is enabled.ts(5097)
// import { fileModuleVar } from "./file_module_1.ts";

import { fileModuleLet } from "./file_module_1";
console.log(fileModuleLet);

// What JavaScript is generated from a given TypeScript file that uses external modules is driven by the compiler flag called module
/**
 * AMD: Do not use. Was browser only.
 * SystemJS: Was a good experiment. Superseded by ES modules.
 * ES Modules: Not ready yet.
 * CommonJS: Node.js uses this. It is synchronous.
 */

// 如果指定编译后的 模块 管理模式是 commonjs，但是在 ts 编码中使用 es module 的语法进行模块的 import 和 export
// 但是因为 target 是 es，所以 ts 编码中不能使用 commonjs 的语法，比如 require
// Import assignment cannot be used when targeting ECMAScript modules. Consider using 'import * as ns from "mod"', 'import {a} from "mod"', 'import d from "mod"', or another module format instead.ts(1202)
// import fileModuleVar2 = require("./file_module_1");

// ---------------------------
// import e.g.
import { someVar, SomeType } from "./file_module_1";

const someType: SomeType = {
  foo: "foo",
};

console.log(someVar, typeof someType);

import { someVar as aDifferentName } from "./file_module_1";
console.log(aDifferentName);

import * as all from "./file_module_1";
console.log(all.someVarAs);

// 触发执行 文件模块的顶层作用域代码
// Import a file only for its side effect with a single import statement:
import "core-js"; // 最普遍、最流行 的给 JavaScript 标准库打补丁的方式，兼容最新的 es 语法和 api

// ---------------------------
// Re-Exporting e.g.

export * from "./file_module_1";
export { someVar } from "./file_module_1";
export { someVar as aDifferentName } from "./file_module_1";

// ---------------------------
// default e.g.
const defaultExport = "default export";
export default defaultExport;
// A module cannot have multiple default exports.ts(2528)
// export default function () {
//   console.log("default export");
// }
// export default class SomeClass {}

import defaultImport from "./file_module_1";
// Module '"./file_module_1"' has no exported member 'defaultImport'. Did you mean to use 'import defaultImport from "./file_module_1"' instead?ts(2614)
// import { defaultImport } from "./file_module_1";
defaultImport();
// ---------------------------
