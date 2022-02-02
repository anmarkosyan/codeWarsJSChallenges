//https://www.codewars.com/kata/580777ee2e14accd9f000165/train/javascript
//Your task is to generate the Fibonacci sequence to n places, with each alternating value as "skip".
// For example:
// "1 skip 2 skip 5 skip 13 skip 34"
//
// Return the result as a string

const skiponacci = num => {
    let arr = [1, 1];
    for(let i = 2; i < num; i++){
        arr[i] = arr[i - 1] + arr[i - 2];
    }
return arr.map((n, i) =>  i % 2 !== 0 ? 'skip' : n).join(' ');
}
console.log(skiponacci(5));// "1 skip 2 skip 5"