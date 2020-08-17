//========================== is Prime =========================
//write a function to check if a given number is prime or not
//=======================================================


function isPrime(n){
    for(let i = 2; i < n; i++){
        if(n % i === 0){
            return false;
        }
    }
    return n > 1;
}
console.log(isPrime(2));// true
console.log(isPrime(1));// false
console.log(isPrime(30));//false
console.log(isPrime(5));// true