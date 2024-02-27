// scope and scope chain in js

// 1. Global
// 2. Local
// const a = 12;

// function sayHI() {
//   var greet = "Hi there";
//   console.log(a);
// }

// sayHI();
// console.log(greet);

// if (true) {
//   var oldLocalVariable = "Old Hi";
//   let newLocalVariable = "New Hi";
//   console.log(oldLocalVariable);
//   console.log(newLocalVariable);
// }

// console.log(oldLocalVariable);
// console.log(newLocalVariable);

// ---scope chain-------

const global = 12;

function testFunction() {
  function innerFunction() {
    console.log(global);
  }
  innerFunction();
}

testFunction();
