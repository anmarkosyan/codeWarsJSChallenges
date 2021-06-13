/*Given a sorted array,
create a new array containing squares of all the numbers of the input array in the sorted order.
*/

const make_squares = function (arr) {
  // return arr.map(num => Math.pow(num, 2)).sort((a, b) => a - b);
  //📍the main way
  const length = arr.length;
  const squaresArr = Array(length).fill(0);

  let lastIndex = length - 1;
  let first = 0;
  let last = length - 1;
  while (first <= last) {
    const firstSquare = arr[first] ** 2;
    const lastSquare = arr[last] ** 2;
    if (firstSquare > lastSquare) {
      squaresArr[lastIndex] = firstSquare;
      first++;
    } else {
      squaresArr[lastIndex] = lastSquare;
      last--;
    }
    lastIndex--;
  }
  return squaresArr;
};
console.log(make_squares([-2, -1, 0, 2, 3])); //[0, 1, 4, 4, 9]
console.log(make_squares([-3, -1, 0, 1, 2])); // [0, 1, 1, 4, 9]
