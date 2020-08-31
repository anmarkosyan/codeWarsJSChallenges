// ========================== format Array ===================
//Write a function named formatArray that takes an array arr as an
// argument and returns an array with each element formatted according to the given rule.

//element with index 0 - up to 0 decimal places;
// element with index 1 - up to 1 decimal places;
// element with index 2 - up to 2 decimal places;
// element with index 3 - up to 3 decimal places; etc.

const formatArray = arr => {
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        newArr.push(+arr[i].toFixed(i))
    }
    return newArr;
}
console.log(formatArray([1.345, 2.234, 3.1234, 4.56789]));//[ 1, 2.2, 3.12, 4.568 ]