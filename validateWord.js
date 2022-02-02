//======================= Character Counter ==================
//https://www.codewars.com/kata/56786a687e9a88d1cf00005d/train/javascript
/*
You are going to be given a word. Your job will be to make sure that each
character in that word has the exact same number of occurrences.
You will return true if it is valid, or false if it is not.
 */

function validateWord(str) {
  str = str.toLowerCase();
  let unic = "";
  for (let el of str) {
    if (str.indexOf(el) === str.lastIndexOf(el)) {
      unic += el;
    }
  }
  return unic.length === str.length || !unic;
}
console.log(validateWord("Abcabc"));//true
console.log(validateWord("Abc123"));//true
console.log(validateWord("Abcabcd"));//true
