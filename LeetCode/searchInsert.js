/*
                  📍35. Search Insert Position
 Given a sorted array of distinct integers and a target value, return the index if the target is found.
 If not, return the index where it would be if it were inserted in order.
 */

const searchInsert = (arr, target) => {
  if (arr.indexOf(target) !== -1) {
    return arr.indexOf(target);
  } else {
    arr.push(target);
    arr.sort((a, b) => a - b);
  }
  return arr.indexOf(target);
};
console.log(searchInsert([1, 3], 2)); //1
console.log(searchInsert([1, 3, 6], 4)); // 2
console.log(searchInsert([1, 3, 5, 6], 5)); //2
console.log(searchInsert([1], 0)); // 0
console.log(searchInsert([3, 6, 8, 10], 5)); //1
console.log(searchInsert([1, 3, 5, 6], 7)); //4
