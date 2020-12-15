//You have a list of numbers from one to one million and there is a missing number.
// How would you find the missing number?

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

// const selectionSort = arr => {
//     //return arr.sort((a, b) => a - b);
//     for(let i = 0; i < arr.length; i ++){
//         let lowest = i;
//         for(let j = i + 1; j < arr.length; j++){
//             if(arr[j] < arr[lowest]) {
//                 lowest = j;
//             }
//         }
//         if(i !== lowest){
//             let swap = arr[i];
//             arr[i] = arr[lowest];
//             arr[lowest] = swap;
//         }
//     }
//     return arr;
// }
// console.log(selectionSort([0, 1, 0, 1, 1, 0, 0, 1]));//[0, 0, 0, 0, 1, 1, 1, 1]

//========Given 9 balls all of which weigh the same except for one, what is the minimum of weightings necessary to find the ball weighs more (or less)*
//For find the diff min weight ball ,we divide 9 for three parts, and take 2 part for checking-  3 and 3 (lets say a and b), and measure them.  if(a === b) weight is equal,
//we add 1 ball from 3rd part in a part , and 1 in b part, and check, if(a === b) its say that the 3 rd ball from 3 rd part has diff weight. else if(a > b) so the second
//ball from 3rd part  lighter, and the same we do from the beginning with a and b, if(a < b )a balls within a is lighter, now we check each ball in a part.


// const balls = arr => {
//     let diff =  arr.find(el => arr.indexOf(el) === arr.lastIndexOf(el));
//     for(let el of arr){
//         if(diff > el) return 'ball is heavier'
//     }
//     return  'ball is lighter'
// }
// console.log(balls([12, 12, 12, 12, 23, 12, 12, 12, 12]))

//===========  How would you find the longest palindrome in a string?


//we create helper function that check if given word is palindrome or not
// function isPalindrome(str) {
//     //s =  s.replace(/\s/g,"");//to remove spaces
//     let rev = '';
//     for(let el of str){
//         rev = el + rev;
//     }
//     return  rev === str;
// }
// //main function
// function longestSubstrPalindrome(str) {
//     let maxlength = 0;
//     let maxStr = '';
//     for (let i = 0; i < str.length; i++) {
//         let subStr = str.slice(i, str.length);
//         if (subStr.length <= maxlength) break;//Stop Loop for smaller strings
//
//         for (let j = subStr.length; j >= 0; j--) {
//
//             let sub_subStr = subStr.slice(0, j);
//             if (sub_subStr.length <= maxlength) break; // Stop loop for smaller strings
//             if (isPalindrome(sub_subStr)) {
//                 maxlength= sub_subStr.length;
//                 maxStr = sub_subStr;
//             }
//         }
//     }
//     return maxStr;
//
// }
// console.log(longestSubstrPalindrome('ababa'));//'ababa'
// console.log(longestSubstrPalindrome('hello'));//'ll'
// console.log(longestSubstrPalindrome('banana'));//'anana'
// //console.log(expand('ababa', 0, 3));//


//============How would you solve the N Queens problem
//The n-queens puzzle is the problem of placing n queens on
// an n×n chessboard such that no two queens attack each other.
//Given an integer n, return all distinct solutions to the n-queens puzzle.
//Each solution contains a distinct board configuration of the n-queens' placement,
//where 'Q' and '.' both indicate a queen and an empty space respectively.
//Input: 4
// Output: [
//  [".Q..",  // Solution 1
//   "...Q",
//   "Q...",
//   "..Q."],
//
//  ["..Q.",  // Solution 2
//   "Q...",
//   "...Q",
//   ".Q.."]
// ]
//Explanation: There exist two distinct solutions to the 4-queens puzzle as shown above.

const solveNQueens = n =>{
    let  board = Array(n).fill(0).map( _ => Array(n).fill(0));
    return board;

};
console.log(solveNQueens(4));//












































