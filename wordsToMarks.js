//================= words to marks ===========================
//
//If　a = 1, b = 2, c = 3 ... z = 26

const wordsToMarks = str => {
    let alphabet = ' abcdefghijklmnopqrstuvwxyz';
    let sum = 0;
    for(let el of str){
        sum += alphabet.indexOf(el);
    }
    return sum;

}
console.log(wordsToMarks('family'));//66