// Explain this keyword in js

// function abc() {
//   console.log(this);
// }

// abc()

const person = {
    details:function(fname,lname){
        this.fname = fname
        this.lname = lname
        return `Hello ${person.fname} ${person.lname}`;
    }
}

const greet = person.details("approach","junction")
console.log(greet)