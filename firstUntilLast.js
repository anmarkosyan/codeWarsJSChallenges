//https://www.codewars.com/kata/56b29582461215098d00000f/train/javascript
//======================= fill numbers first until last ===================
//Task Given the a list of numbers, return the list so that the values increment
// by 1 for each index up to the maximum value.


function firstUntilLast(arr){
    let newArr = [];
    let first = arr[0];
    let last = arr[arr.length -1];
    for(let num = first; num <= last; num++){
        newArr.push(num);
    }
    return newArr;

}
console.log(firstUntilLast([1,2,3,12]));//[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]