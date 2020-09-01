//========================== vowel letters ================

const isVowel = c => {
    c = c.toLowerCase();
    let vowels = 'aeiou';
    return vowels.includes(c);
}
console.log(isVowel('e'));//true
console.log(isVowel('c'))//false

const containsVowels =  str => {
    for(let letter of str){
        if(isVowel(letter)) return true;
    }
  return false;
}
console.log(containsVowels('home'));//true
console.log(containsVowels('brdbrd'))//false

const countOfStringsWithoutVowels = arr => {
    let count = 0;
    for(let elem of arr){
        if(!containsVowels(elem)) count ++;
    }
    return count;

}
console.log(countOfStringsWithoutVowels(['anush', 'mrbr', 'sr', 'room', 'hlp' ]));// 3