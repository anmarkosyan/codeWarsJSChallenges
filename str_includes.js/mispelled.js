//=================== Misspelled word ==========
//
//It checks if the word2 differs from word1 by only one character.
// This can include an extra char at the end or the beginning of either of words.
// In the tests, the misspelled word will always differ only by one character.

const misspelled = (word1, word2) => {
    //#1
    // let notIncludes1 = '';
    // let notIncludes2 = '';
    // for(let el of word2){
    //     if(!word1.includes(el)){
    //         notIncludes1 += el;
    //     }
    // }
    // for(let el of word1){
    //     if(!word2.includes(el)){
    //         notIncludes2 += el;
    //     }
    // }
    //
    // return notIncludes1.length <= 1 && notIncludes2.length <=1;

    //#2
    if(Math.abs(word1.length - word2.length) > 1) return false;
    let countDiff = 0;
    for(let  el of word2){
        if(!word1.includes(el))  countDiff++;
    }
    return countDiff <= 1;

}
console.log(misspelled('versed', 'xersed'));//true
console.log(misspelled('versed', 'v5rsed'));//true
console.log(misspelled('1versed', 'versed'));//true
console.log(misspelled('aaversed', 'versed'));//false
console.log(misspelled('versed', 'applb'));//false
console.log(misspelled('versed', 'aaversed'));//false
console.log(misspelled('versed', 'versed1'));// true