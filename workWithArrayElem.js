//count of positive numbers in array
const countPositive = arr => {
    let count = 0;
    for(let num of arr){
        if(num > 0) count++;
    }
    return count;
}
console.log(countPositive([1, 7, -4, 56, -2]));//3

//================= count of even numbers in array===========================

const countEven = arr => {
    let count = 0;
    for(let num of arr){
        if(num % 2 === 0) count ++;
    }
    return count;
}
console.log(countEven([1, 2, 5, 6, 10, 12, 7, 9]));//4

//====================== count numbers ================
const countNumber = arr => {
    let count = 0;
    for(let elem of arr){
        if(typeof elem === 'number') count++;
    }
    return count;
}
console.log(countNumber([0, 4.1, 'Alice', true, 1, false, 'hohoho']));//3

//================== count Integers =======================

const countIntegers = arr => {
    let count = 0;
    for(let elem of arr){
        if(typeof elem === 'number' && elem % 1 === 0) count++;
    }
return count;
}
console.log(countIntegers([0, 4.1, 'f', true, 1, false, 'h', -3]));//3

//================== count of squares ===================
const countOfSquares = arr => {
    let count = 0;
    for(let elem of arr){
        if(typeof elem === 'number' && Math.sqrt(elem) % 1 === 0) count++;
    }
    return count;

}
console.log(countOfSquares([0, 25, 'f', true, 9, 7, false, 'h']));//3

//=================== count of positive pairs ===============
const countOfPositivePairs = arr => {
    let count = 0;
    let index = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > 0 ) index.push(i);
    }
    for(let j = 0; j < index.length; j++){
        let first = index[j];
        let second = index[j + 1];
        if(second - first === 1) count++;
    }
return count;
}
console.log(countOfPositivePairs([0, 25, 3, -2, 5]));//1 => 25 and 3
console.log(countOfPositivePairs( [1,7,4,-1]));//2 => 1,7 and 7,4

//================= first non-consecutive number ============
//https://www.codewars.com/kata/58f8a3a27a5c28d92e000144/train/javascript
//Your task is to find the first element of an array that is not consecutive.
//By not consecutive we mean not exactly 1 larger than the previous element of the array.

const firstNonConsecutive = arr => {
    for(let i = 0; i < arr.length; i++){
        //#1
        // if(arr[i  - 1] + 1 !== arr[i]) {
        //     return arr[i];}

        //#2
        if(arr[i] + 1 !== arr[i + 1]){
            return arr[i + 1];
        }
    }
    return null
}
console.log(firstNonConsecutive([1,2,3,4,6,7,8]));//6

//======================= count Opposite Signs Pairs ==========

const countOppositeSignsPairs = arr => {
    let count = 0;
    for(let i = 0; i < arr.length; i++){
        if( arr[i] > 0 && arr[i + 1] < 0 || arr[i] < 0 && arr[i + 1] >0) {
            count++;
        }

    }
    return count ;
}
console.log(countOppositeSignsPairs([1, 25, 3, -2, 5]));//2 => 3,-2 and -2,5

//=================== number Of Ordered Triples =======================
const numberOfOrderedTriples = arr => {
    let count = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < arr[i + 1] && arr[i] > arr[i -1]){
            count++;
        }
    }
    return count;
}
console.log(numberOfOrderedTriples([1, 25, 3, 7, 15, 12]));// 1 =>3,7,15
console.log(numberOfOrderedTriples([1, 25, 3, 20, 15, 12]));// 0

//============================= first Negative and it index =============================
//find first negative number and return its [element, index]
const firstNegative = arr => {
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < 0){
            return [arr[i], i];
        }

    }
    return undefined;

}
console.log(firstNegative([0, 25, -3, 7, 15, -1, 12]));// [-3, 2]

//================= first Bigger ==========================

const firstBigger = arr => {
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > arr[i + 1]){
            return arr[i];
        }
    }
    return undefined;
}
console.log(firstBigger([0, 8, 4, 1]));// 8 => 8 > 4

//========================= last Even Element ===============
//return last even [element, index]

const lastEvenElement = arr => {
    for(let i = arr.length -1; i >= 0; i--){
        if(arr[i] % 2 === 0){
            return [arr[i], i];
        }
    }
    return undefined;


}
console.log(lastEvenElement([0, 8, 4, 1]));// [4, 2]

//========================= fahrenheit =================

const fahrenheit = (t1, t2) => {
    let arr = [];
    for(let i = t1; i <= t2; i++){
        let f = (9 / 5) * i + 32;
        arr.push(+f.toFixed(1));
    }
    return arr;

}
console.log(fahrenheit(1, 10));//[33.8, 35.6, 37.4, 39.2, 41, 42.8, 44.6, 46.4, 48.2, 50]
console.log(fahrenheit(20, 25));//[68, 69.8, 71.6, 73.4, 75.2, 77]

//================== double prices ======================

const doublePrices = prices => {
    let double = [];
    for(let num of prices){
        double.push(num * 2)
    }
    return double;
}
console.log(doublePrices([20, 50, 55]));//[ 40, 100, 110 ]

//================== find first Negative In Array ===================

const isNegativeInArray = arr => {
    for(let dig of arr){
        if(dig < 0){
            return true;
        }
    }
   return false;
}
console.log(isNegativeInArray([20, -24, -56, 7]));//true
console.log(isNegativeInArray([20, 2, 4, 6,  7]));//false

//================= find first  zero in array =================

const isZeroInArray = arr => {
    for(let dig of arr){
        if(dig === 0){
            return true;
        }
    }
    return false;
}
console.log(isZeroInArray([20, -26, 0, 13]));// true
console.log(isZeroInArray([20, -26, 13]));// false

//==================== find first number equal sum of left and right numbers ======
//Write a function isElementInArray that takes an array arr as an argument and,
//if the array contains at least one element equal to the sum of its neighbors on
//the left and right, finds the first such element and returns a string like this:

const isElementInArray = arr => {
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === arr[i - 1] + arr[i + 1]){
            return `true: it is ${arr[i]}`;
        }
    }
    return false;

}
console.log(isElementInArray([1, 5, 4, 1, 0, -1]));//"true: it is 5" 1 + 4 = 5
console.log(isElementInArray([1, 2, 4, 1, 0, -1]));//"true: it is 0" 1 + -1 = 0
console.log(isElementInArray([1, 2, 4, 1, 3, -1]));//false

//====================== count of Names ================
//return count of names that they length is 5

const countOfNames = arr => {
    let count = 0;
    for(let word of arr){
        if(word.length === 5){
            count++;
        }
    }
    return count;
}
let names = ['Noah', 'Liam', 'William', 'Mason', 'James']
console.log(countOfNames(names));//2

//find words that length is 5
const arrFilter = arr => {
    // #1 using loop
    // let res = [];
    // for(let word of arr){
    //     if(word.length === 5){
    //         res.push(word);
    //     }
    // }
    // return res;
    //#2 using filter() method
    return arr.filter(el => el.length === 5);


}
console.log(arrFilter(names));//['Mason', 'James']

//====================== find first equal elements in array ========================

const equalElementsInArray = arr => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = arr.length - 1; j > arr[i]; j--) {
            if (arr[i] === arr[j]) {
                return [arr[i], arr[j]];
            }
        }
    }
    return arr.length === 0 ? [] : "All elements are different";
}
console.log(equalElementsInArray([1, 3, 1, 9, 2, 5, 3, 10]));//[1, 1]