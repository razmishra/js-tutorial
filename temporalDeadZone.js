// console.log(age)
// let age;

//temporal dead zone
// console.log(age)
// let age;

const arr = [, , ,];
console.log(arr.length);
console.log(arr[0]);

function swap(a,b){
    [a, b] = [b, a];
    console.log(a)
    console.log(b)
}
let a = 2;
let b = 3;
swap(a,b)
console.log("-----------")
console.log(a)
console.log(b)