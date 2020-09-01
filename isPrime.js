//========================== is Prime =========================
//write a function to check if a given number is prime or not
//prime is a whole number that cannot be made by multiplying other whole numbers
//=======================================================


const isPrime = n => {
    if(n < 2) return false;
    //if we have big number so we should i <= n / 2 , for fast solution
    for(let i = 2; i <= n / 2; i++){
        if(n % i === 0){
            return false;
        }
    }
    return true;
}
console.log(isPrime(2));// true
console.log(isPrime(1));// false
console.log(isPrime(30));//false
console.log(isPrime(5));// true
console.log(isPrime(2567));// false

const countOfPrimeNumbers = (n, m) => {
    let count = 0;
    for(let i = n; i <= m; i++){
        if(isPrime(i)) count++;
    }
    return count;

}

console.log(countOfPrimeNumbers(10, 90));// 20
console.log(countOfPrimeNumbers(1, 10));// 4