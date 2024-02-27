// Infinite currying in js

function multiply(x) { //x=24
    return function(y) { //y=undefined
        if(y){
            return multiply(x*y); // multiply(24)
        }else{
            return x;
        }
    };
}

const result = multiply(1)(2)(3)(4)
// result = multiply(24)
console.log(result())