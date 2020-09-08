//
//Given an array of integers, remove the smallest value. Do not mutate the original array/list.
// If there are multiple elements with the same value, remove the one with a lower index.
// If you get an empty array/list, return an empty array/list.


const removeFirstMin = arr => {
    let res = [];
    let min = arr[0];
    let minInd = 0;
    for(let i = 1; i < arr.length; i++){
        if(arr[i] <  min){
            min = arr[i];
            minInd = i;
        }
    }
    for(let i = 0; i < arr.length; i++){
        if(i !== minInd){
            res.push(arr[i]);
        }
    }
    return res;

}
console.log(removeFirstMin([ 2, 3, 1, 4, 5]));//[2, 3, 4, 5];
console.log(removeFirstMin([]));//[]