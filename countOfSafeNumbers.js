//================ count of Safe numbers ====================
//write a function to count all safe numbers in a given array


function countOfSafeNumbers(arr){
    let count = 0;
    for(let num of arr){
        if(Number.isSafeInteger(num)) count ++;
    }
    return count;
}
console.log(countOfSafeNumbers([Infinity, 9007199254740991, -Infinity, 0]));//2
console.log(countOfSafeNumbers([1, 3, 10, -10, NaN]));//4