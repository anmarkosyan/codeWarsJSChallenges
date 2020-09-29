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

//============== check start point : simple regex ==========
//https://www.codewars.com/kata/56a25ba95df27b7743000016/train/javascript
//Basic regex tasks. Write a function that takes in a numeric code of any length.
//The function should check if the code begins with 1, 2, or 3 and return true if so.
//Return false otherwise.

function validateCode (code) {
    //#1
    // let str = code + ''
    // return  str.startsWith('2') || /^1/.test(code) || /^3/.test(code);

    //#2
    return /^[123]/.test(code);
}
console.log(validateCode(123));//true
console.log(validateCode(345667));//true
console.log(validateCode(67834));//false
console.log(validateCode(23411));//true

//================ check end point ============

function correctTail(bod, tail ){
    return bod.endsWith(tail)
}
console.log(correctTail('Fox','x'));//true
console.log(correctTail("Rhino", "o"));//true

//================ String ends with? ===================
function solution(str, ending){
    return str.endsWith(ending);
}
console.log(solution('abcd','bcd'));//true
console.log(solution('abcde','ab'));//false

//============== filter numbers =============
//Your task is to return a number from a string.

const FilterString = function(value) {
    //#1 its has a slow run time
    // let regExp = value.match(/\d/g).join('');
    // return parseInt(regExp);
    //2 faster
    return parseInt(value.replace(/\D/g,''))

}
console.log(FilterString("a1b2c3"));//123
console.log(FilterString("aa1bb2cc3dd"));//123
console.log(FilterString("aa15bb27cc3dd"))//15273













