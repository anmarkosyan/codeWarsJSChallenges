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