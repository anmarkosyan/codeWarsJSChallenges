//================================ number of digits ===========================
//writ a function that return sum of numbers digit

function numberOfDigits(n){
    let sum = 0;
    while(n > 0){
        n = (n - n % 10) / 10
        sum++;
    }
    return sum;
}
console.log(numberOfDigits(234));//3
console.log(numberOfDigits(1986));//4
