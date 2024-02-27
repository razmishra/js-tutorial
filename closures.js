// what is closure in js

function fun1() {
  let a = 12;
  console.log(a);

  function fun2() {
    console.log(a);
  }
  return fun2;
}

const ans = fun1();
ans();