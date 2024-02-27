//Argument objects in js

function sum() {
  let sum = 0;
  arguments[0] = 12;
  arguments[1] = 10;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  console.log(sum);
  // console.log(arguments)
  // console.log(arguments[0])
  // console.log(arguments.length)
}

// sum(1,2)
// sum(1,2,3,4)

function abc(a=10,b=2) {
  console.log(a,b);
  console.log(arguments);
}

// abc();

function call(...nums){
  console.log(typeof nums)
  console.log(nums[1]);
}

call(1,2,3)
