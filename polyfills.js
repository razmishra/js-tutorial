const details = {
    fName: "Rajneesh",
    lNmame: "Mishra"
}

const printDetails = function(){
    console.log(this.fName + " " + this.lNmame)
}

// console.log(printDetails.call(details))
const returnedFunction = printDetails.bind(details)
returnedFunction()