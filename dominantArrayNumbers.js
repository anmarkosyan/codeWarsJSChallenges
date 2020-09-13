//https://www.codewars.com/kata/5a04133e32b8b998dc000089/train/javascript

//An element in an array is dominant if it is greater than all elements to its right.
//You will be given an array and your task will be to return a list of all dominant elements.

const solve = arr => {
    //1 way
    // let newArr = [];
    // for(let i = 0; i < arr.length; i++) {
    //     let isDom = true;
    //     for(j = i + 1; j < arr.length; j ++) {
    //         if(arr[i] <= arr[j]) {
    //             isDom = false;
    //             break;
    //         }
    //     }
    //     if(isDom) newArr.push(arr[i]);
    // }
    // return newArr;
    //2 way
    let array = [arr[arr.length - 1]];
    for (let i = arr.length - 2; i >= 0; i--){
        if (arr[i] > array[0]) array.unshift(arr[i]);
    }
    return array;

}
console.log(solve([16,17,14,3,14,5,2]));//[ 17,14,5,2]
console.log(solve([1, 21, 4, 7, 5]));//[ 21, 7, 5]
console.log(solve([ 92,52,93,31,89,87,77,105]));//[105]
console.log(solve([ 104,18,37,9,36,47,28]));//[104,47,28]