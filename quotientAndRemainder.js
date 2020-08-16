//===================  quotient and remainder =================================
//write a function Using only addition and subtraction operations, find the result
// of dividing the number n by the number k (quotient),
// as well as the remainder of the division.





function quotientAndRemainder(n, k){
    let quotient = 0;
    while(n >= k){
        n = n - k;
        quotient++;
    }
    let remainder = n
    return[quotient,remainder ]

}

console.log(quotientAndRemainder(5, 5));// [1, 0] 5 - 5 = 0(n) => reminder = 0 quotient = 1, because we do 1 operation
console.log(quotientAndRemainder(12, 5));//[2, 2] 12 - 5 = 7(n) 7 - 5 = 2(n) => reminder = 2 quotient  = 2
