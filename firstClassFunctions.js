

function sayHello(){
    return "Hello";
}

// sayHello();

var fun = function(){
    console.log("Assigned to fun variable")
}

//passing function as a parameter
var fun2 = function(fun){
    console.log(fun())
}

//return a function
var fun3 = function(){
    return sayHello();
}

console.log(fun3())
// fun2(sayHello);

