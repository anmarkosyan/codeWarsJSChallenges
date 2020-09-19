//https://www.codewars.com/kata/56a946cd7bd95ccab2000055/train/javascript
//Your task is count the total number of lowercase letters in a string.

const lowerCaseCount = str => {
    let regExp = str.match(/[a-z]/g);
    return regExp ? regExp.length : 0;

}
console.log(lowerCaseCount("abcABC123"));//3
console.log(lowerCaseCount("ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"));//0



//================== Fix string case =================
//https://www.codewars.com/kata/5b180e9fedaa564a7000009a/train/javascript

function solve(s){
    let regExp = s.match(/[A-Z]/g);
    return regExp !== null && regExp.length > s.length / 2 ? s.toUpperCase() : s.toLowerCase()
}
console.log(solve("code"));//'code'
console.log(solve("CODe"));//CODE
console.log(solve('COde'));//code












