//======================== n decimal digits ======================
//Write a function nDecimalDigits that takes the number num (original number)
// and n (number of decimal places) as arguments
// and returns num with only n decimal places. The number does not need to be rounded,
// just leave only n decimal places.using toFixed() method will be not correct

function nDecimalDigits(num, n){
    return Math.trunc(num * Math.pow(10, n)) / Math.pow(10, n);

}
console.log(nDecimalDigits(6.642867, 3)); // 6.642
console.log(nDecimalDigits(4.1567, 2));//4.15


