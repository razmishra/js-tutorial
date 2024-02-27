// Handle multiple APIs at once

// How to handle multiple promises

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("one"), 1000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("two"), 2000);
});

const p3 = new Promise((resolve, reject) => {
  reject(new Error ("Promise 3 rejected"));
});

const demo = ()=>{
  console.log("in a function")
}

Promise.allSettled([p1, p2,p3,12,10,demo])
  .then((values) => console.log(values))
  .catch((error) => console.log(error.message));
