/*
          ---------------------- 27. Remove Element --------------------
Given an array nums and a value val, remove all instances of that value ❗️in-place❗️ and return the new length.
Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
The order of elements can be changed. It doesn't matter what you leave beyond the new length.
 */

const removeElement = (arr, val) => {
  //1) way
  // let count = 0;
  // for (let el of nums) {
  //   if (el !== val) count++;
  // }
  // return count;

  //2) way
  // return arr.filter(el => el !== val).length;

  //3) way in-place
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== val) {
      arr[count++] = arr[i];
      //count++;
    }
  }
  return count;
};
console.log(removeElement([3, 2, 2, 3], 3)); // [2,2] => length = 2
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)); // [0, 1, 4, 0, 3] => length = 5
console.log(removeElement([3, 4, 5, 6], 2)); //4
console.log(removeElement([3, 3], 3)); //[] => length 0
console.log(removeElement([], 3)); // 0
