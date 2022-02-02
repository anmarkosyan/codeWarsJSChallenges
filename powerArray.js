//===================== power array =======================
//write a function to return every number ina given array of power
// if number is even , return square power, if odd return cube power

// function powerArray(arr){
//     let newArr= [];
//     for(let num of arr){
//         if(num % 2 === 0)  newArr.push(Math.pow(num, 2))
//         else newArr.push(Math.pow(num, 3))
//     }
//     return newArr;
// }
// console.log(powerArray([1, 4, 3, 5, 2]));//[1, 16, 27, 125, 4]

//write a function a find a power of given n, and collect it into array
//count of power started with 0;

function powerOfTwo(n){
    let arr = [];
    let p = 0;
    while(p <= n){
        arr.push(Math.pow(2, p));
        p++;
    }
return arr;
}
console.log(powerOfTwo(2));//[1, 2, 4]
console.log(powerOfTwo(4));//[1, 2, 4, 8, 16]


function sumOfSquare(n){
    let sum = 0;
    let int = 1;
    while(int <= n){
        sum += Math.pow(int, 2);
        int++;
    }
    return sum;
}
console.log(sumOfSquare(3));// 14