//https://www.codewars.com/kata/570a6a46455d08ff8d001002/solutions/javascript

//============================== No zeros for heroes ============
// Write a function that return numbers without zero
//1450 -> 145
// 960000 -> 96
// 1050 -> 105
// -1050 -> -105

function noBoringZeros(n) {
    while(n % 10 === 0 && n !== 0){
        n = n / 10;
    }
    return n;
}

console.log(noBoringZeros(1450));//145
console.log(noBoringZeros(1050));//105
