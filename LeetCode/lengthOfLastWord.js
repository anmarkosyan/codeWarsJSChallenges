/*
                           📍58. Length of Last Word
Given a string s consists of some words separated by spaces, return the length of the last word in the string.
If the last word does not exist, return 0.
A word is a maximal substring consisting of non-space characters only.
 */

const lengthOfLastWord = (str) => {
  let arr = str.split(" ").filter((el) => el.length !== 0);
  return arr.length ? arr[arr.length - 1].length : 0;
};
console.log(lengthOfLastWord("hello world")); // world => 5
console.log(lengthOfLastWord("my name is aram")); //aram => 4
console.log(lengthOfLastWord("m "));
