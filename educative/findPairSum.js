//=================== 🔴 Two Pointer Pattern ================
/*
 * Given an array of sorted numbers and a targetSum sum,
 * find a pair in the array whose sum is equal to the given targetSum.
 * Write a function to return the indices of the two numbers (i.e. the pair)
 * such that they add up to the given targetSum.
 * */

const findPairSum = function (arr, targetSum) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const currentSum = arr[left] + arr[right];
    if (currentSum === targetSum) {
      return [left, right];
    }
    if (currentSum > targetSum) {
      right--;
    } else {
      left++;
    }
  }

  return [-1, -1];
};
console.log(findPairSum([1, 2, 3, 4, 6], 6)); //[0, 4] => index of nums
console.log(findPairSum([2, 5, 9, 11], 11));//[0, 2]
console.log(findPairSum([1, 2, 6], 11));// [-1, -1] => no such sum
