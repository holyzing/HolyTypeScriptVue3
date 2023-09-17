// Namespaces provide you with a convenient syntax around a common pattern used in JavaScript:

const something = {}; // 要加 ; 不然格式化会将下一行代码当成参数

console.log(something);

// Basically something || (something = {}) allows an anonymous function function(something) {} to add stuff to an existing object (the something || portion)
// or start a new object then add stuff to that object (the || (something = {}) portion). This means that you can have two such blocks split by some execution boundary:
(function (something) {
  something.foo = 123;
})(something || (something = {}));

console.log(something); // {foo:123}

(function (something) {
  something.bar = 456;
})(something || (something = {}));

console.log(something); // {foo:123, bar:456}
