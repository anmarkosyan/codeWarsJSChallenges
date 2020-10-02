//========================== Sentences should start with capital letters. =======================
//
//In English, all words at the beginning of a sentence should begin with a capital letter.
// You will be given a paragraph that does not use capital letters.
// Your job is to capitalise the first letter of the first word of each sentence.

const fix = text => {
    if(text === '') return '';
    let str =  text.split('. ').map(el => el[0].toUpperCase() + el.slice(1))
    return str.join('. ')


}
console.log(fix("hello. my name is inigo montoya. you killed my father. prepare to die."));
                    //"Hello. My name is inigo montoya. You killed my father. Prepare to die."
console.log(fix(''));//''