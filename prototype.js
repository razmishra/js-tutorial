const obj = {
  name: "Raj",
  age: 23,
  greet: function () {
    console.log(this.name + " is " + this.age + " years old");
  },
};
// obj.greet();

console.log(Object.getPrototypeOf(obj))
