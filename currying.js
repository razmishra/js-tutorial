// currying function in js

// function add(a,b,c,d){
//     return a+b+c+d
// }

function add(a) {
    return function(b) {
      return function(c) {
        return a + b + c;
      };
    };
  }
const result = add(1)(2)(3);
console.log(result)

