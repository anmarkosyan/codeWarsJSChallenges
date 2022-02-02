//======================== Permute a Palindrome ==============================
/*
In thWrite a function that will check whether the permutation of an input string is a palindrome.
Bonus points for a solution that is efficient and/or that uses only built-in language functions.
Deem yourself brilliant if you can come up with a version that does not use any function whatsoever.
Example:
madam -> True
adamm -> True
junk -> False

Hint:
The brute force approach would be to generate all the permutations of the string and check
each one of them whether it is a palindrome. However, an optimized approach will not require this at all.
*/


function permuteAPalindrome(str){
    if(str.length === 1) return true;
    //count of each letter
    let obj = {};
    for(let el of str){
        if(obj[el])  obj[el]++;
        else obj[el] = 1;
    }
    //count only odd letters
    let count = 0;
    for(let key in obj){
        if(obj[key] % 2 !== 0) count++;
    }
    return count < 2;

}
console.log(permuteAPalindrome("aab"));//true
console.log(permuteAPalindrome('a'));//true
console.log(permuteAPalindrome('aba'));//true
console.log(permuteAPalindrome("baabcd"));//false
console.log(permuteAPalindrome("racecars"));//false
console.log(permuteAPalindrome("kyfxslkyrjkcisylsygykjriykxsfkgcgkc"));

