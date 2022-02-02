//============================ sum of digits ====================
//write a function to return sum of digits in the given number
//============================================================


function sumOfDigits(n){
    let sum = 0;
    while(n > 0){
        sum = sum + (n % 10);
        n = Math.floor(n / 10);

    }
    return sum ;
}

console.log(sumOfDigits(123));// 6 => 1 + 2+ 3
console.log(sumOfDigits(226));// 10 => 2 + 2+ 6