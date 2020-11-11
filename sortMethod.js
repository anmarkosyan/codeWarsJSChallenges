//========== Two Oldest Ages ====================

function twoOldestAges(ages) {
  ages.sort((a, b) => b - a); //if b - a > 0 a <--> b
  return [ages[1], ages[0]];
}
console.log(twoOldestAges([1, 2, 10, 8])); //[8, 10]

//==================== Largest pair sum in array ===========
function largestPairSum(numbers) {
  numbers.sort((a, b) => b - a);
  return numbers[0] + numbers[1];
}
console.log(largestPairSum([-10, -8, -16, -18, -19])); // -18

//=======================Sum of two lowest positive integers ==============

function sumTwoSmallestNumbers(numbers) {
  numbers.sort((a, b) => a - b);
  return numbers[0] + numbers[1];
}
console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22])); //13

//=================== Find Maximum and Minimum Values of a List =====

const min = function (list) {
  //1 way
  // let minNum = list[0];
  // for(let i = 1; i < list.length; i++ ){
  //   if(list[i] < minNum){
  //     minNum = list[i];
  //   }
  // }
  //   return minNum;
  //2 way
  //return Math.min(...list);
  //3 way
  list.sort((a, b) => a - b);
  return list[0];
};
console.log(min([-52, 56, 30, 29, -54, 0, -110])); //-110

const max = function (list) {
  //1 way
  //   let maxNum = list[0];
  //   for(let i = 1; i < list.length; i++){
  //     if(list[i] > maxNum){
  //       maxNum = list[i];
  //     }
  //   }
  //   return maxNum;
  //2 way
  //return Math.max(...list)
  //3 way
  list.sort((a, b) => b - a);
  return list[0];
};
console.log(max([4, 6, 2, 1, 9, 63, -134, 566])); //566

//==================== Sort array by string length ==============

function sortByLength(arr) {
  //#1 with looping
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i].length > arr[j].length) {
        let swap = arr[i];
        arr[i] = arr[j];
        arr[j] = swap;
      }
    }
  }
  return arr;

  //#2 solution with sort() method
  //return array.sort((a, b) => a.length - b.length);
}
console.log(sortByLength(["Beg", "Life", "I", "To"])); //[ 'I', 'To', 'Beg', 'Life' ]

//============== other tasks ========================================

const words = ["Beg", "Life", "Home", "To"];

//=================== sort words by alphabet =========
let sort = words.sort();
console.log(sort); //[ 'Beg', 'Home', 'Life', 'To' ]

//============== reverse sorted ========
let revSort = words.sort().reverse();
console.log(revSort); //[ 'To', 'Life', 'Home', 'Beg' ]

//============= sort by each word last letter ===
function lastSort(a, b) {
  if (a[a.length - 1] > b[b.length - 1]) return 1;
  else if (a[a.length - 1] < b[b.length - 1]) return -1;
  else return 0;
}
let last = words.sort(lastSort);
console.log(last); //[ 'Life', 'Home', 'Beg', 'To' ]

//============= with nested array sort by age ==============
let arr = [
  ["Alice", 28],
  ["Bob", 20],
  ["Aaron", 24],
];
let nestedSort = arr.sort((a, b) => a[1] - b[1]);
console.log(nestedSort); //[ [ 'Bob', 20 ], [ 'Aaron', 24 ], [ 'Alice', 28 ]

//===================== sort by age using object array =======
let obj = [
  { name: "Bob", age: 25 },
  { name: "Sam", age: 19 },
  { name: "Alla", age: 24 },
];
let objSort = obj.sort((a, b) => a.age - b.age);
console.log(objSort); //[{ name: 'Sam', age: 19 }, { name: 'Alla', age: 24 },  { name: 'Bob', age: 25 }]
console.log(objSort[0].age); //19
