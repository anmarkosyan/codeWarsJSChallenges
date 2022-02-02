//======================== power N ============================
//You are given an array with positive numbers and a number N.
// You should find the N-th power of the element in the array with the index N.
// If N is outside of the array, then return -1. Don't forget that the first element has the index 0.



function powerN(arr, n){
    // 1 way
    let res = 0;
    for(let i = 0; i < arr.length; i++){
        if(i === n) res = arr[i]
    }
    return arr.length > n ? Math.pow(res, n) : -1;
    //2 way
    //return arr.length > n ? Math.pow(arr[n],n) : -1;
}
console.log(powerN([1, 2, 3, 4], 2));// 9  Math.pow(3, 2)