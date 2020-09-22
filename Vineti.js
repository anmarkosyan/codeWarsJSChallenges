//You have a list of numbers from one to one million and there is a missing number. How would you find the missing number?

// const missNum = arr => {
//     for(let i = 0; i < arr.length - 1; i++){
//         if(arr[i] + 1 !== arr[i + 1]){
//             return arr[i] + 1;
//         }
//     }
//     return null;
// }
// //console.log(missNum([1, 2, 3, 4, 5, 6, 7,8, 9, 10, 11, 13]));
//
// //===================How would you determine if a number is a power of two? *
//
// const powOfTwo = num => {
//     // while(num % 2 === 0 && num > 1) {
//     //     num /= 2;
//     // }
//     // return num === 1
//     return Math.log2(num) % 1 === 0
// }
// //console.log(powOfTwo(122));//
//
// //===================How would you remove duplicates from a list? *
// const removeDup = arr => {
//     //return arr.filter((el, i) => i === arr.indexOf(el));
//     let uniq = [];
//     for(let i = 0; i < arr.length; i++){
//         if(i === arr.indexOf(arr[i])){
//             uniq.push(arr[i])
//         }
//     }
//     return uniq;
// }
// //console.log(removeDup([1, 2, 3, 1, 3, 6, 7, 1, 9]));
//
//
// //================How would you reverse a string? *
// const reverse = str => {
//     //return str.split("").reverse().join("")
//     let rev = '';
//     for(let el of str){
//         rev = el + rev
//     }
//     return rev;
// }
// //console.log(reverse('abrakatabra'));//'arbatakarba'

//===========How would you compress a string such that 'AAABCCDDDD' becomes 'A3BC2D4'?
// Only compress the string if it saves space. *

// const compressStr = str => {
//     let newStr = '';
//
//     for(let i = 0; i < str.length; i++){
//         let count = 1;
//         while (i < str.length -1 && str[i] === str[i + 1]){
//             count++;
//             i++;
//         }
//         console.log(count)
//
//         if(count === 1) {
//             count = str[i];
//             newStr += str[i];
//         }
//         else  {
//             count = str[i] + count;
//             newStr += count;
//         }
//     }
//
// return newStr;

//}
//console.log(compressStr('AAABCCDDDD'));//A3BC2D4


//=============Given an array of 0's and 1's, how would you move all of the 0's to
// the beginning of the array and all of the 1's to the end of the array? *

const selectionSort = arr => {
    //return arr.sort((a, b) => a - b);
    for(let i = 0; i < arr.length; i ++){
        let lowest = i;
        for(let j = i + 1; j < arr.length; j++){
            if(arr[j] < arr[lowest]) {
                lowest = j;
            }
        }
        if(i !== lowest){
            let swap = arr[i];
            arr[i] = arr[lowest];
            arr[lowest] = swap;

        }

    }
    return arr;


}
console.log(selectionSort([0, 1, 0, 1, 1, 0, 0, 1]));//[0, 0, 0, 0, 1, 1, 1, 1]

