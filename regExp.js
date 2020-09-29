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
    return parseInt(value.replace(/\D/g,''))// or return +value.replace(/\D/g, '');

}
console.log(FilterString("a1b2c3"));//123
console.log(FilterString("aa1bb2cc3dd"));//123
console.log(FilterString("aa15bb27cc3dd"))//15273


//====================Remove String Spaces========
//https://www.codewars.com/kata/57eae20f5500ad98e50002c5/train/javascript

function noSpace(x){
    //#1 slow time
    //return x.split(' ').join('');
    //#2 faster
    return x.replace(/\s/g, '');

}
console.log(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'));//8j8mBliB8gimjB8B8jlB

//======================== Vowel remover ==============

function shortcut(string){
    return string.replace(/[aeiou]/g, '')

}
console.log(shortcut('codewars'));//cdwrs
console.log(shortcut('how are you today?'));//hw r y tdy?


//==================== Polish alphabet=========================
//There are 32 letters in the Polish alphabet: 9 vowels and 23 consonants.
// Your task is to change the letters with diacritics:
//ą -> a,
// ć -> c,
// ę -> e,
// ł -> l,
// ń -> n,
// ó -> o,
// ś -> s,
// ź -> z,
// ż -> z

function correctPolishLetters (str) {
    let polish = {
        ą: 'a',
        ć: 'c',
        ę: 'e',
        ł: 'l',
        ń: 'n',
        ó: 'o',
        ś: 's',
        ź: 'z',
        ż: 'z'
    };
    //#1 time:slow O(n^2)
    //return str.split('').map(el => polish[el] || el).join('');
    //#2 time: O(1)
    return str.replace(/[ąćęłńóśźż]/g, el => polish[el])
}
console.log(correctPolishLetters("Jędrzej Błądziński"));//Jedrzej Bladzinski
console.log(correctPolishLetters("Lech Wałęsa"));//Lech Walesa


//==================== fake binary =================
//https://www.codewars.com/kata/57eae65a4321032ce000002d/train/javascript
function fakeBin(x){
    let binary = {0:0, 1:0, 2:0, 3:0, 4:0, 5:1, 6:1, 7:1, 8:1, 9:1};
    return x.replace(/[0-9]/g, num => binary[num])
}
console.log(fakeBin('45385593107843568'));//01011110001100111


//======================= remove all exclamation marks from the end =========

function remove(s){
    return s.replace(/!+$/g, '')

}
console.log(remove("Hi!!!"));//Hi
console.log(remove("Hi! Hi!"));//Hi! Hi












