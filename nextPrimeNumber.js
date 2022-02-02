//=============================== Get the next prime number! =======================
// You will get a number (>= 0) and your task is to find the next prime number.
// Make sure to optimize your code: there will numbers tested up to about 10^12.

const isPrime = (n) => {
  if (n % 2 === 0) return false;
  for (let i = 3; i <= n ** 0.5; i += 2) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

const nextPrime = (num) => {
  if (num < 2) return 2;
  //#1 way
  // for (let next = num + 1; ; next++) {
  //   if (isPrime(next)) {
  //     return next;
  //   }
  // }
  //#2 way
  return isPrime(num + 1) ? num + 1 : nextPrime(num + 1);
};
console.log(nextPrime(11)); //13
console.log(nextPrime(1)); //2
console.log(nextPrime(5)); //7
console.log(nextPrime(3)); //5
console.log(nextPrime(2)); //3
