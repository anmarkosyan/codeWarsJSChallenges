//============= Find the position! ============
//When provided with a letter, return its position in the alphabet.

function position(letter){
    let alphabet = ' abcdefghijklmnopqrstuvwxyz'
    return alphabet.indexOf(letter)
}
console.log(position('a'));//1