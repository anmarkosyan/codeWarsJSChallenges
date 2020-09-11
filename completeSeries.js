//
//You are given an array of non-negative integers,
//your task is to complete the series from 0 to the highest number in the array.
//If the numbers in the sequence provided are not in order you should order them,
//but if a value repeats, then you must return a sequence with only one item, and the value of that item must be 0.

const completeSeries = arr => {
    let res = [0];
    let total = arr.filter(el => arr.indexOf(el) === arr.lastIndexOf(el));
    if(total.length === arr.length){
        for(let x = 1; x <= Math.max(...total); x++){
            res.push(x);
        }
    }
    return res;
}
console.log(completeSeries([1,4,6]));//[0, 1, 2, 3, 4, 5, 6 ]
console.log(completeSeries([5, 3]))//[0, 1, 2, 3, 4, 5]
console.log(completeSeries([5, 3, 3]));//[0]