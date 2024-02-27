//Promise.race() and Promise.any()
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("one"), 1000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("two"), 2000);
});

const p3 = new Promise((resolve, reject) => {
  reject(new Error("Promise 3 rejected"));
});

Promise.race([12,13,23,p1, p2, p3])
  .then((value) => {
    console.log(value);
  })
  .catch((e) => console.log(e.message));
