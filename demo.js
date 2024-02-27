let ans = {};

const str = "abhishek srivastava";

for (let i = 0; i < str.length; i++) {
  let charAtIndex = str[i];
  if (charAtIndex == " ") continue;
  if (ans[charAtIndex]) {
    ans[charAtIndex]++;
  } else {
    ans[charAtIndex] = 1;
  }
}

console.log(ans);
