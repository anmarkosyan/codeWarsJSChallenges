//https://www.codewars.com/kata/558f9f51e85b46e9fa000025/train/javascript

//============================= Difference Of Squares =====================
//Hence the difference between square of the sum of the first ten natural numbers
// and the sum of the squares of those numbers
//For example, when n = 10:
//
// The square of the sum of the numbers is:
// (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10)2 = 552 = 3025
// The sum of the squares of the numbers is:
// 12 + 22 + 32 + 42 + 52 + 62 + 72 + 82 + 92 + 102 = 385
//3025 - 385 = 2640

function differenceOfSquares(n){
    let sum1 = 0;
    let sum2 = 0;
    let i = 1;
    while(i <= n)   {
        sum1 += Math.pow(i, 2);
        sum2+= i
        i++;
    }
    return Math.pow(sum2, 2) - sum1 ;
}

console.log(differenceOfSquares(10));//2640
console.log(differenceOfSquares(5));//170


