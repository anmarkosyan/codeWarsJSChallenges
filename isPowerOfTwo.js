//https://www.codewars.com/kata/534d0a229345375d520006a0/solutions/javascript

//=============================== Power of two ===================
//write a function that check if a given non-negative integer is power of two
//


function isPowerOfTwo(n){
    while(n % 2 === 0  && n > 1){
        n = n / 2;

    }
    return n === 1 ;
}

console.log(isPowerOfTwo(5))// false
console.log(isPowerOfTwo(16))// true
console.log(isPowerOfTwo(2096))// true
