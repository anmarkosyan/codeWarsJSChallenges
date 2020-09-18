//================= is the given word palindrome ========

let word = 'abc'
let str = '';
for(let el of word){
    str = el + str;

}
console.log(str === word)//false

//================= is the given words of string palindrome ==
//!!!!!!!!!!without using any methods
function isPalindrome(str){
    //at first delete all spaces
    let newStr = '';
    let rev = '';
    for(let el of str){
        if(el !== ' '){
            newStr += el;
        }
    }
    //second reverse the word
    for(let el of newStr){
        rev = el + rev;
    }
    return rev === newStr

}
console.log(isPalindrome("every moment is life"));//false
console.log(isPalindrome("pull up if i pull up"));//true


//================ count palindrome words in array =========
function countPalindrome(arr){
    let count = 0;
    for(let el of arr){
        let rev = '';
        for(let letter of el){
            rev = letter + rev;
        }
        if(rev === el) count ++;

    }
    return count;

}
console.log(countPalindrome(["abc", "dad", "noon"]));//2
console.log(countPalindrome(["mother"]));// 0

//===================== Is it a palindrome? ===============
//Write function isPalindrome that checks if a given string (case insensitive) is a palindrome.

function isItPalindrome(x) {
    x = x.toLowerCase();
    let rev = '';
    for(let el of x){
        rev = el + rev;
    }
    return rev === x;
}
console.log(isItPalindrome("Abba"));//true
console.log(isItPalindrome("hello"));//false

