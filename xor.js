//🔴
//find missing one number between 1-100
const missedOne = function (arr) {
  const maxLength = arr.length + 1;
  let xor = 1;
  for (let i = 2; i <= maxLength; i++) {
    xor ^= i;
  }
  let xor1 = arr[0];
    for (let i = 1; i < maxLength - 1; i++) {
        xor1 ^= arr[i]

    }
    return xor ^ xor1;
};
console.log(missedOne([1, 3, 4, 2, 6, 8, 7])); //5

//🔴
// given non-empty array, where every number appears two time, expected the one, find that number

const findSingleNumber = function (arr) {
  //1️⃣
  // return  arr.find(el => arr.indexOf(el) === arr.lastIndexOf(el));
  //2️⃣
  let xor = arr[0];
  for (let i = 1; i < arr.length; i++) {
    xor = xor ^ arr[i];
  }
  return xor;
};
console.log(findSingleNumber([1, 2, 4, 3, 2, 4, 1])); //3

//🔴
//In a non-empty array of numbers, every number appears exactly twice except two numbers that appear only once.
//Find the two numbers that appear only once.

const singleTwoNumbers = function (arr) {
  //1️⃣
  //return arr.filter(el => arr.indexOf(el) === arr.lastIndexOf(el));
  //2️⃣
  // const singleNumArr = [];
  // const obj = arr.reduce(function (obj, num) {
  //   if (!obj[num]) obj[num] = 0;
  //   obj[num]++;
  //   return obj;
  // }, {});
  //   console.log(obj)
  //
  // for (const key in obj) {
  //   if (obj[key] === 1) {
  //     singleNumArr.push(key);
  //   }
  // }
  //
  // return singleNumArr;
  //3️⃣ xor
  // get the XOR of the all the numbers
  let n1xn2 = 0;
  arr.forEach((num) => {
    n1xn2 ^= num;
  });

  // get the rightmost bit that is '1'
  let rightmost_set_bit = 1;
  while ((rightmost_set_bit & n1xn2) === 0) {
    rightmost_set_bit = rightmost_set_bit << 1;
  }
  let num1 = 0,
    num2 = 0;
  arr.forEach((num) => {
    if ((num & rightmost_set_bit) !== 0)
      // the bit is set
      num1 ^= num;
    // the bit is not set
    else num2 ^= num;
  });

  return [num1, num2];
};
console.log(singleTwoNumbers([7, 3, 8, 2, 3, 2])); //[7, 8]
