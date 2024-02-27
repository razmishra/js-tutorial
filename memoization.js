//memoization in js

let sum = 0

const calc = (n)=>{
    for(let i =0;i<=n ;i++){
        sum+=i;
    }
    return sum;
}

const memoization = (fn)=>{
    let cache = {};
    return function(...args){
        let n = args[0];
        if(n in cache){
            console.log("cache")
            return cache[n]
        }else{
            console.log("calc")
            let result = fn(n);
            cache[n] = result;
            return result
        }
    }
}

console.time()
const ans = memoization(calc)
console.log(ans(10))
console.timeEnd()

console.time()
console.log(ans(10))
console.timeEnd()

