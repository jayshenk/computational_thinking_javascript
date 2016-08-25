// 1

var a = 'outer';

function testScope() {
  var a = 'inner';
  console.log(a);
}

console.log(a); // outer
testScope();    // inner
console.log(a); // outer

// 2

var a = 'outer';

function testScope() {
  a = 'inner';
  console.log(a);
}

console.log(a); // outer
testScope();    // reassigns a to inner, logs out inner
console.log(a); // inner

// 3

var basket = 'empty';

function goShopping() {
  function shop1() {
    basket = 'tv';
  }

  console.log(basket); // empty

  function shop2() {
    basket = 'computer';
  }

  function shop3() {
    var basket = 'play station';
    console.log(basket); // play station
  }

  shop1();
  shop2();
  shop3();

  console.log(basket); // computer
}

goShopping(); 
// empty
// play station
// computer

// 4

console.log(a); // undefined due to hoisting

var a = 1;

// 5

console.log(a); // error because a is not in scope

function hello() {
  a = 1;
}

// 6

function hello() {
  a = 'hello';
}

hello();
console.log(a); // hello

// 7

function hello() {
  var a = 'hello' // local variable
}

hello();
console.log(a) // undefined because a is not in global scope
