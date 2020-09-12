//https://www.codewars.com/kata/56b7f2f3f18876033f000307/train/javascript

//Are the numbers in order?

const inAscOrder = arr => {
    //1 way
    // for(let i = 0; i < arr.length -1; i++){
    //     if(arr[i] > arr[i + 1]){
    //         return false;
    //     }
    // }
    // return true;

    //2 way
    console.log(arr.every((num, i) => !i || num > arr[i - 1])) ;
}
console.log(inAscOrder([1, 2, 9, 4, 20, 55, 12]));//false
console.log(inAscOrder([1, 5, 8, 9, 12, 34]));//true

