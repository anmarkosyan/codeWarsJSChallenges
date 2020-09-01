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

