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