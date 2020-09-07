// =============================== max min ========================

//=================== MIN ==========
const min = arr => {
    let minimum = arr[0];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < minimum ) minimum = arr[i];
    }
  return minimum;

    //or simply Math.min(...arr);
}

console.log(min([1, 5, 3, 8])); // 1

//======================= MAX ===========
const max = arr => {
    let minimum = arr[0];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > minimum) minimum = arr[i];
    }
    return minimum;

    // or simply Math.max(...arr);
}
console.log(max([1, 5, 3, 8])) // 8

//================== diff max- min in array ============
const diffInArray = arr => {
    let diff = [];
    for (let elem of arr){
       diff.push(max(elem) - min(elem));

    }
return diff;
}
console.log(diffInArray([[2, 5, 8, 1], [3, 6, 7], [4, 9, 2]]));//[7, 4, 7]

//============== longest word ===========
//we should return first longest word by alphabet

const longestWord = text => {
    let arr = text.toLowerCase().split(' ');
    let len = [];
    let long = [];
    for(let word of arr){
        len.push(word.length);
    }
    let max = Math.max(...len);
    for(let elem of arr){
        if(elem.length === max) long.push(elem) ;
    }
    return min(long);

}
console.log(longestWord('hi my name is bnushi so what is your name my friend anushi '));// anushi

//==================== replace first max and min ========================

const changeMaxAndMin = arr => {
    let min = arr[0];
    let max = arr[0];
    let minInd = 0;
    let maxInd = 0;
    for(let i = 1; i < arr.length; i++){
        if(arr[i] < min){
            min = arr[i];
            minInd = i;
        }else if(arr[i] > max){
            max = arr[i];
            maxInd = i;
        }
    }
    arr[minInd] = max;
    arr[maxInd] = min;
    return arr;
}
console.log(changeMaxAndMin([3, 4, 8, 4, 1, 2, 1]));// [3, 4, 1, 4, 8, 2, 1]

//================== largest word in array ========================

const theLongestWord = arr => {
    let maxLength = arr[0].length,  maxWord = arr[0];
    for(let i = 1; i < arr.length; i++){
        if(arr[i].length > maxLength){
            maxLength = arr[i].length;
            maxWord = arr[i];
        }
    }
    return maxWord;
}
console.log(theLongestWord(["a", "big", "elephant"])); //'elephant'
console.log(theLongestWord(["test"]));//'test'

//============== shortest and largest word in array =====================

const words = arr => {
    let maxLength = arr[0].length;
    let minLength = arr[0].length;
    let maxWord = arr[0];
    let minWord = arr[0];
    for(let i = 1; i < arr.length; i++){
       if(arr[i].length < minLength){
           minLength = arr[i].length;
           minWord = arr[i];
       }else if(arr[i].length > maxLength){
           maxLength = arr[i].length;
           maxWord = arr[i];
       }
    }
    return [minWord, maxWord];
}
console.log(words(["a", "big", "elephant"]));//[ 'a', 'elephant' ]


































