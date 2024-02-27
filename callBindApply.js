// Explain call apply and bind methods
obj1 = {
    name:"Rajneesh",
    age:23
}

obj2 = {
    name:"Saurabh",
    age:21
}

function detail(country){
    return this.name+" "+this.age+" "+country
}

const ans = detail.bind(obj1,"India")
console.log(ans())