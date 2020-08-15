//https://www.codewars.com/kata/58c9322bedb4235468000019/train/javascript

//=========================== "Very Even" Numbers =======================
//Write a function that returns true if the number is a "Very Even" number.
// If a number is a single digit, then it is simply "Very Even" if it itself is even.
// If it has 2 or more digits, it is "Very Even" if the sum of it's digits is "Very Even".

//example input(88) => returns false -> 8 + 8 = 16 -> 1 + 6 = 7 => 7 is odd


function isVeryEvenNumber(n) {
    let sum = (n - 1) % 9 + 1;
    return sum % 2 === 0
}

console.log(isVeryEvenNumber(88));//false
console.log(isVeryEvenNumber(24));//true
console.log(isVeryEvenNumber(4554));//false
