// 1

function say() {
  if (false) {
    var a = 'hello from inside a block';
  }

  console.log(a);
}
say(); // undefined

// 2

function hello() {
  a = 'hello';
  console.log(a); // hello

  if (false) {
    var a = 'hello again';
  }
}

hello(); // hello
console.log(a); // Uncaught ReferenceError: a is not defined

// 3

var a = 'hello';

for (var i = 0; i < 5; i++) {
  var a = i;
}

console.log(a); // 4

// 4

var a = 1;

function foo() {
  a = 2;
  function bar() {
    a = 3;
    return 4;
  }

  return bar();
}

console.log(foo()); // 4
console.log(a);     // 3

// 5

a = 'global'

function checkScope() {
  var a = 'local';
  function nested() {
    var a = 'nested';
    function supernested() {
      a = 'supernested';
      return a;
    }

    return supernested();
  }

  return nested();
}

console.log(checkScope()); // supernested
console.log(a);            // global

// 6

var a = 'outer';
var b = 'outer';

console.log(a); // outer
console.log(b); // outer
setScope(a);
console.log(a); // outer
console.log(b); // inner

function setScope(foo) {
  foo = 'inner';
  b = 'inner';
}

// 7

var total = 50;
var increment = 15;

function incrementBy(increment) {
  total += increment;
}

console.log(total);     // 50
incrementBy(10);
console.log(total);     // 60
console.log(increment); // 15

// 8

var a = 'outer';

console.log(a); // outer
setScope(a);    // Uncaught TypeError: setScope is not a function(...)
console.log(a); 

var setScope = function() {
  a = 'inner';
}
