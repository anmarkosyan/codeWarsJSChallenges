//================ 🔴 Two pointer pattern =================

/*Given an array of sorted numbers, remove all duplicates from it.
You should not use any extra space; after removing the duplicates in-place
return the length of the subarray that has no duplicate in it.
*/

const removeDuplicatesInPlace = function (arr) {
  // let counter = 0;
  // let first = 0;
  // let second = 1;
  // while (second <= arr.length) {
  //   if (arr[first] !== arr[second]) {
  //     counter++;
  //   }
  //   first++;
  //   second++;
  // }
  // return counter;

  //2way
  let count = 1;
  let i = 1;
  while (i < arr.length) {
    if (arr[count - 1] !== arr[i]) {
      arr[count] = arr[i];
      count++;
    }
    i++;
  }
  return count;
};
console.log(removeDuplicatesInPlace([1, 1, 1, 2, 3, 3])); // 3 => [1, 2, 3].length
console.log(removeDuplicatesInPlace([2, 3, 3, 3, 6, 9, 9])); // 4 => [2, 3, 6, 9].length
console.log(removeDuplicatesInPlace([2, 2, 2, 2, 3, 11]));
