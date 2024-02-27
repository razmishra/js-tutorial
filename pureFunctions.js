
function sum(a,b){
    return a+b;
}

let total = 13;

function modifySum(a){
    return total+a;
}

let somethingGlobal;

function abc(a,b){
    somethingGlobal = 10;
    return a+b;
}

//some inbuilt pure functions
Math.sqrt(x);
String.toLowerCase()
String.toUpperCase()

//some impure functions
Array.push();
Math.random();
