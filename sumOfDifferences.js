//https://www.codewars.com/kata/5b73fe9fb3d9776fbf00009e/train/javascript

//Your task is to sum the differences between consecutive pairs in the array in descending order.
//If the array is empty or the array has only one element the result should be 0

const sumOfDifferences = arr => {
    //1 way using loop
    // arr.sort((a, b) => b - a);
    // let sum = 0;
    // for(let i = 0; i < arr.length - 1; i++){
    //     sum += arr[i] - arr[i + 1];
    // }
    // return sum;

    // 2 way
    return arr.length ? Math.max(...arr) - Math.min(...arr) : 0;
}
console.log(sumOfDifferences([1, 2, 10]));//9 => (10 - 2) + (2-1)
console.log(sumOfDifferences([2]));// 0
console.log(sumOfDifferences([2, 5, 8, 1, 23, 12])); //22

