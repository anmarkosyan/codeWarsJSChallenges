/**
 *   Return the second largest number in the array.
 *   //@param {Number[]} nums - An array of numbers.
 *   //@return {Number} The second largest number in the array.
 **/
function getSecondLargest(nums) {
  //1way
  //return [...new Set(nums)].sort((a, b) => b - a)[1];

  //2way
  // const sortedArr = [...nums].sort((a, b) => b - a);
  // for (let i = 0; i < sortedArr.length; i++) {
  //   if (sortedArr[i] !== sortedArr[i + 1]) {
  //     return sortedArr[i + 1];
  //   }
  // }

  //3way
  const maxNum = Math.max(...nums);
  return nums.filter((el) => el < maxNum).sort((a, b) => b - a)[0];
}

console.log(getSecondLargest([2, 3, 1, 4, 6, 8, 6, 3, 8]));
