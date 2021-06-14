// how to sort unsorted array. just for starting 1 -> 100
const sortInPlace = function (arr) {
  let i = 0;
  while (i < arr.length) {
    const j = arr[i] - 1;
    console.log(j, arr[j]);
    if (arr[i] !== arr[j]) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    i++;
  }
  return arr;
  //or for other cases we need to filter
  //return arr.filter((el) => Number.isInteger(el));
};

//console.log(sortInPlace([6, 2, 10]));//will work with filter
console.log(sortInPlace([3, 1, 5, 4, 2])); //[1, 2, 3, 4, 5]
//console.log(sortInPlace([8, 7, 9, 10, 12, 11]))//will work with filter[7, 8, 9, 10, 11, 12]
