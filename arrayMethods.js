// Array methods in js

// const arr = [11, 2, 3, 4, "name"];

// console.log(arr.length)
// console.log(arr.push(20))
// console.log(arr.pop())
// console.log(arr.shift())
// console.log(arr.unshift(1))
// console.log(arr.indexOf(11))
// console.log(arr.lastIndexOf(4))
// console.log(arr.includes("name"))
// console.log(arr.toString())
// arr.sort((a,b)=>a-b)
// arr.reverse()

// const newArr = arr.map((ele) => {
//   return ele * 2;
// });
const arr = [1, 2, 3, 4, 5];

// const ans = arr.some((ele) => ele ===2);
// console.log(ans);
// const ans = arr.every((ele) => ele ===2);
// console.log(ans);
const result = arr.reduce((acc, curr) => acc + curr, 0);
console.log(result);
console.log(arr);
