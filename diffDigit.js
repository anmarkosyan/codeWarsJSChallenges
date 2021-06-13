//========================== diffDigit ===============
//write a function , and give a number , return true if all digits are different,
//and false if some of them have same digit
//

function diffDigit(num) {
  let first = Math.floor(num / 100);
  let middle = Math.floor((num % 100) / 10);
  let last = num % 10;
  return last !== middle && middle !== first && last !== first;
}

console.log(diffDigit(123)); //true
console.log(diffDigit(223)); //false
