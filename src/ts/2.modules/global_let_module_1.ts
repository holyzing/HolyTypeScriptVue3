// 模块 相关

// var 声明的变量名称可以在同一命名空间被被重新定义, var 在 ts 中的 存在是为了兼容 js 参与编译
var global_var = "global_var1";
var global_var = "global_var2";

// 全局命名空间：ts 项目中，所有源文件中在 顶级作用域内 直接定义的 类型或者变量全局可见, 前提条件是顶层作用域内没有使用 export 或者 import 关键字
let global_let = "global_let";

// Cannot redeclare block-scoped variable 'global_let'.ts(2451)
// let global_let = "global_let2";
