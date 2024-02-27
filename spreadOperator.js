//spread operators in js
const person = {
  name: "John",
  age: 30,
  city: "New York",
};

const person1 = {
  ...person,
  job: "Engineer",
};

// console.log(person1)

// const arr = [1,2,3,4,6]
// const arr1 = [...arr]
// console.log(arr1)

const arr = [1,[2,3],4]
const newArr = [...arr]
newArr[1][0] = "a"
newArr[0] = "b"
// console.log(arr)

// deep copy of top level
// shallow copy of level2


const dataFromAPI = {
    name:"approach",
    age:23,
    email:"approach@gmail.com",
    password:"xxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    city:"Mumbai"
}

const {password, ...newdata} = dataFromAPI
console.log(newdata)
