// 类型声明空间
class Foo {}
interface Bar {}
type Bas = {};

// 类型声明空间类型作为变量声明
var foo: Foo;
var bar: Bar;
var bas: Bas;

// interface 和 type 均不在变量声明空间中，不能作为变量值使用，
// 'Bar' only refers to a type, but is being used as a value here.ts(2693),
// var bar2 = Bar;
// var bus2 = Bas;

// 但是 class 可以，也就是说class可以作为参数传递，而 interface 和 type 则只能在类型声明空间中使用，见后续类型系统
var foo2 = Foo;
console.log(foo2);

// 相似地 变量声明空间中的变量也不能作为类型使用, 也就是不被定义在类型声明空间中
// 'foo2' refers to a value, but is being used as a type here. Did you mean 'typeof foo2'?ts(2749)
// var foo3: foo2;

// ------------------------------------------------------------------------------------------------------------------------------------
