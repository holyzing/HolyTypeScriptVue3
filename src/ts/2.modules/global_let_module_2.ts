// 全局可用的全局命名空间内的变量
console.log(global_var);
console.log(global_let);

// Cannot redeclare block-scoped variable 'global_let'.ts(2451)
// let global_let = "global_let";

// 在全局命名空间中定义大量的 变量和类型，会导致全局命名空间变得混乱，而且很容易引发命名冲突，所以需要使用模块来组织代码
// 为此引入了 文件模块，也称为外部模块，外部模块的定义方式有很多种，这里使用的是 commonjs 规范

declare module "declareModuleInGlobalNS" {
  export var someVar: string;
}
