let a = "rajneesh mishra good"

let remainingString = a.split(" ")

function capitalizeFirstLetter(letter){
  let char  = letter.charAt(0)
  let secondPartOfString = letter.substring(1,letter.length)
//   console.log("object",secondPartOfString)
  char = char.toUpperCase();
  a = char+secondPartOfString
  return a;
}

let completeWord="";
for(let i=0;i<remainingString.length;i++){
  let word = capitalizeFirstLetter(remainingString[i])
  completeWord+=`${word} `;
}
console.log(completeWord)
// console.log(char)
// console.log(remainingString)

// console.log(a)

// let a = "rajneesh mishra good";

// const capitalize = str => 
//     str.replace(/\b([a-z]{3,})/g, (w) => w.charAt(0).toUpperCase() + w.slice(1));

//     console.log(capitalize(a))