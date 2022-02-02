/*
                         📍1. Two Sum
 Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.
 */

const twoSum = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [i, j];
      }
    }
  }
};
console.log(twoSum([2, 7, 11, 15], 9)); //[0,1]
console.log(twoSum([2, 3, 4], 6)); //[0, 2]
console.log(twoSum([3, 2, 4], 6)); //[1, 2]
console.log(twoSum([2, 7, 11], 18)); //[1, 2]
console.log(twoSum([1, 3, 4, 2], 6)); //[2, 3]
