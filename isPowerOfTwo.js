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



//Find power of two
// N = 2 ** K
function powerOf2(n){
    let k = 0;
    while( n > 1 && n % 2 === 0){
        n /= 2;
        k++;
    }

    return k;
}
console.log(powerOf2(32));// 5
console.log(powerOf2(4));// 2
