//https://www.codewars.com/kata/56a946cd7bd95ccab2000055/train/javascript
//Your task is count the total number of lowercase letters in a string.

const lowerCaseCount = str => {
    let regExp = str.match(/[a-z]/g);
    return regExp ? regExp.length : 0;

}
console.log(lowerCaseCount("abcABC123"));//3
console.log(lowerCaseCount("ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"));//0














