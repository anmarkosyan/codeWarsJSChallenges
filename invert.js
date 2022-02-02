//================== invert numbers ==========================
//write a function to invert a numbers ina given array


// function invert(arr){
//     let newArr = [];
//     for(let num of arr){
//         if(num === 0)  newArr.push(num);
//             else newArr.push(-num);
//             console.log(newArr)
//     }
//     return newArr;
// }
// console.log(invert([1, -3, 5, -23, -4]));//[-1, 3, -5, 23, 4]
// console.log(invert([0]));//[0]


//write a function to return an index of opposite number for a given number in array
function oppositeInArray(arr, num){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === -num){
            return i;
        }
    }
    return undefined;
}
console.log(oppositeInArray([1, -2, 3, -5], 5));// 3 (the opposite num 5 is -5, and index in array is 1)
console.log(oppositeInArray([1, -2, 3, -5], 4));//undefined