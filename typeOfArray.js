//https://www.codewars.com/kata/582c81d982a0a65424000201/train/javascript

//======================== Is every value in the array an array? =================
//This should only test the second array dimension of the array.
// The values of the nested arrays don't have to be arrays.

const arrCheck = arr => {
    let count = 0;
    for(let elem of arr){
        if(Array.isArray(elem)) count++;
    }
    return count === arr.length ? true : false;
}
console.log(arrCheck([[1],[2]]));//true
console.log(arrCheck(['1','2']));//false
console.log(arrCheck([[],{}]));//false
console.log(arrCheck([]));//true