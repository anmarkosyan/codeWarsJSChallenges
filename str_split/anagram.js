//=============================is anagram =========================
//
//An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).
// Note: anagrams are case insensitive
// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

let isAnagram = function (str1, str2){
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
    if(str1.length !== str2.length) return false;
    if(str1 === str2) return true;

    for(let el of str1){
        if(!str2.includes(el)){
            return false;
            break;
        }
    }
    return true;

    //#3 using methods
    //return str1.toLowerCase().split('').sort().join('') === str2.toLowerCase().split('').sort().join('')


}
console.log(isAnagram("foefet", "toffee"));//true
console.log(isAnagram("Buckethead", "DeathCubeK"));//true
console.log(isAnagram("Twoo", "WooT"));//true
console.log(isAnagram("dumble", "bumble"));//false
console.log(isAnagram("ound", "round"));//false
console.log(isAnagram("apple", "pale"));//false

