//https://www.codewars.com/kata/5546180ca783b6d2d5000062/train/javascript
//============================ squares ====================
//Complete the function that returns an array of length n,
// starting with the given number x and the squares of the previous number.
// If n is negative or zero, return an empty array/list.


function squares(x, n){
    let arr = [];
    for(let i = 0; i < n; i++){
        arr.push(x);
        x = Math.pow(x, 2);
    }
    return arr;

}
console.log(squares(3, 3));//[3, 9, 81]
console.log(squares(2, 5));//[2, 4, 16, 256,65536]