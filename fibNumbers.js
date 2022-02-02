//================== fibonacci numbers ===========================
//write a function a return array of n  Fibonacci numbers


function fibNum(n){
    let arr = [0, 1];
    if(n === 1) return [arr[0]];
    if(n <= 0) return [];
    for(let i = 2; i < n; i++){
        arr[i] = arr[i - 1] + arr[i - 2];

    }
    return arr;
}

console.log(fibNum(7));//[0, 1, 1, 2, 3, 5, 8]
console.log(fibNum(2));//[0, 1]
console.log(fibNum(5));//[0, 1, 1, 2, 3]
console.log(fibNum(1));//[0]

