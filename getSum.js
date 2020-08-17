//https://www.codewars.com/kata/55f2b110f61eb01779000053/train/javascript
//====================== get sum =============================
//Given two integers a and b, which can be positive or negative,
// find the sum of all the numbers between including them too and return it.
// If the two numbers are equal return a or b.
// Note: a and b are not ordered!


function getSum( a,b ){
    let max = Math.max(a, b);
    let min = Math.min(a, b);
    let sum = 0;
    if(min === max) return min;
    for(let i = min; i <= max; i++){
        sum = sum + i;

    }
    return sum;
}
console.log(getSum(2, 5));//14
console.log(getSum(5, 2));//14