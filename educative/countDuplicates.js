/*
 * Given an array of integers, return the element that appears more than n/2 times where n is length
 * of array
 * */

const countMaxDuplicates = function (arr) {
  const minLength = arr.length / 2;
  const countObj = arr.reduce(function (acc, num) {
    acc[num] ? acc[num]++ : (acc[num] = 1);
    return acc;
  }, {});

  for (const key in countObj) {
    if (countObj[key] > minLength) return key;
  }

  return -1;
};
console.log(countMaxDuplicates([2, 2, 1, 8, 2, 3, 8]));
