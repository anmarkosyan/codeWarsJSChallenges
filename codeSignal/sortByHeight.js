/*Some people are standing in a row in a park. There are trees between them which cannot be moved.
Your task is to rearrange the people by their heights in a non-descending order
without moving the trees. People can be very tall!
*/

const sortByHeight = function (arr) {
  const sortedArr = arr.filter((num) => num > -1).sort((a, b) => a - b);
  let index = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== -1) {
      arr[i] = sortedArr[index];
      index++;
    }
  }
  return arr;
};
console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180])); //[-1, 150, 160, 170, -1, -1, 180, 190]
console.log(sortByHeight([-1, 3, 2, -1, 1])); //[-1, 1, 2, -1, 3]
