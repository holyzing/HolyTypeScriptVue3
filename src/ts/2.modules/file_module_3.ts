// 动态导入

import { Promise } from "core-js/shim";

// Overturning dynamic lookup just for types

// Import assignment cannot be used when targeting ECMAScript modules. Consider using 'import * as ns from "mod"', 'import {a} from "mod"', 'import d from "mod"', or another module format instead.ts(1202)
// import someModuleInGlobalNamespac = require("someModuleInGlobalNamespac");

// ---------------------------

declare module "declareModuleInGlobalNS" {
  // Some variable declarations
  export var bar: number; /*sample*/
}

// import foo = require('foo');
/**
actually does two things:

    Imports the type information of the foo module.
    Specifies a runtime dependency on the foo module.

    You can pick and choose so that only the type information is loaded and no runtime dependency occurs.
    Before continuing you might want to recap the declaration spaces section of the book.

    If you do not use the imported name in the variable declaration space then the import is completely removed from the generated JavaScript.
    This is best explained with examples. Once you understand this we will present you with use cases.
*/

/**
 * import foo = require('foo');
 *
 * // will generate the JavaScript:
 * An empty file as foo is not used.
 */

/**
 * import foo = require('foo');
 * var bar: foo;
 *
 * // will generate the JavaScript:
 * var bar;
 * // This is because foo (or any of its properties e.g. foo.bas) is never used as a variable.
 */

/**
 * import foo = require('foo');
 * var bar = foo;
 * // will generate the JavaScript: (assuming commoonjs)
 * var foo = require('foo');
 * var bar = foo;
 * // This is because foo is used as a variable.
 */

// 懒加载, 仅仅导入类型
// Use case: Lazy loading
/**
 * // Type inference needs to be done upfront. This means that if you want to use some type from a file foo in a file bar you will have to do:
 * import foo = require('foo');
 * var bar: foo.SomeType;
 * // However, you might want to only load the file foo at runtime under certain conditions.
 * // For such cases you should use the imported name only in type annotations and not as a variable.
 * // This removes any upfront runtime dependency code being injected by TypeScript.
 * // Then manually import the actual module using code that is specific to your module loader.
 *
 * // As an example, consider the following commonjs based code where we only load a module 'foo' on a certain function call:
 *
 * import foo = require('foo');
 * export function loadFoo() {
 *   // This is lazy loading `foo` and using the original module *only* as a type annotation
 *   var _foo: typeof foo = require('foo');
 *   // Now use `_foo` as a variable instead of `foo`.
 * }
 *
 * // A similar sample in amd (using requirejs) would be:
 * import foo = require('foo');
 * export function loadFoo() {
 *   // This is lazy loading `foo` and using the original module *only* as a type annotation
 *   require(['foo'], (_foo: typeof foo) => {
 *   // Now use `_foo` as a variable instead of `foo`.
 *   });
 * }
 *
 * // This pattern is commonly used:
 * // in web apps where you load certain JavaScript on particular routes,
 * // in node applications where you only load certain modules if needed to speed up application bootup.
 */

// 破除循环依赖
// Use case: Breaking Circular dependencies
/**
 * // Similar to the lazy loading use case certain module loaders (commonjs/node and amd/requirejs) don't work well with circular dependencies.
 * // In such cases it is useful to have lazy loading code in one direction and loading the modules upfront in the other direction.
 */

// 确保导入
// Use case: Ensure Import
/**
 * // Sometimes you want to load a file just for the side effect (e.g. the module might register itself with some library like CodeMirror addons etc.).
 * // However, if you just do a import/require the transpiled JavaScript will not contain a dependency on the module and
 * // your module loader (e.g. webpack) might completely ignore the import.
 * // In such cases you can use a ensureImport variable to ensure that the compiled JavaScript takes a dependency on the module e.g.:
 *
 * import foo = require('./foo');
 * import bar = require('./bar');
 * import bas = require('./bas');
 * const ensureImport: any = foo && bar && bas;
 */

// Promise.resolve().then(() =>
//   import("moment")
//     .then((moment) => {
//       const time = moment().format();
//       console.log(time);
//     })
//     .catch((err) => {
//       console.log(err);
//     })
// );
