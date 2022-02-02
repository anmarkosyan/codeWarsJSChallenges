//=================== 🔴 Two pointers pattern ==============
/*Given an unsorted array of numbers and a target ‘key’,
 remove all instances of ‘key’ in-place and return the new length of the array.
 */

const removeDuplicatesFromUnsortedArr = function (arr, num) {
  let counter = 0;
  let i = 0;
  while (i < arr.length) {
    if (arr[i] !== num) {
      counter++;
    }
    i++;
  }
  return counter;
};
console.log(removeDuplicatesFromUnsortedArr([4, 2, 1, 2, 6, 2], 2)); //3 => [4, 1, 6].length
console.log(removeDuplicatesFromUnsortedArr([3, 2, 3, 6, 3, 10, 9, 3], 3)); //4 => [2, 6, 10, 9]
