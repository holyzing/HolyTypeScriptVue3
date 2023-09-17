//  If you have an import or an export at the root level of a TypeScript file then it creates a local scope within that file.
export let fileModuleLet = "fileModuleLet";

// 在这里可以定义和全局变量同名的变量，不会报错，它会在这个文件的作用域内覆盖全局变量, 因为 export 会创建一个局部作用域
let global_let = "global_let2";
console.log(global_let);

// ---------------------------
// export e.g.
export var fileModuleVar2 = "fileModuleVar2";
export type someType = {
  foo: string;
};

let someVar = 123;
type SomeType = {
  foo: string;
};

export { someVar, SomeType };

export { someVar as someVarAs };

export default function () {}

// ---------------------------
// Relative path modules
// if file bar.ts does import * as foo from './foo'; then place foo must exist in the same folder.
// if file bar.ts does import * as foo from '../foo'; then place foo must exist in a folder up.
// if file bar.ts does import * as foo from '../someFolder/foo'; then one folder up, there must be a folder someFolder with a place foo

// ---------------------------
// Dynamic lookup
// When the import path is not relative, lookup is driven by node style resolution. Here I only give a simple example:

// You have import * as foo from 'foo', the following are the places that are checked in order
// ./node_modules/foo
// ../node_modules/foo
// ../../node_modules/foo
// Till root of file system

// You have import * as foo from 'something/foo', the following are the places that are checked in order
// ./node_modules/something/foo
// ../node_modules/something/foo
// ../../node_modules/something/foo
// Till root of file system

// If the place is a file, e.g. foo.ts, hurray!
// else if the place is a folder and there is a file foo/index.ts, hurray!
// else if the place is a folder and there is a foo/package.json and a file specified in the types key in the package.json that exists, then hurray!
// else if the place is a folder and there is a package.json and a file specified in the main key in the package.json that exists, then hurray!

// ---------------------------
// Invalid module name in augmentation, module 'someModuleInModuleNamespac' cannot be found.ts(2664)
// declare module "someModuleInModuleNamespac" {
//   export var someVar: string;
// }
