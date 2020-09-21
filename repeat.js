//================== repeat word word.length time with whitSpaces =========

function repeatWord(word){
    let length = word.length;
    let newStr = '';
    let i = 1;
    while(i <= length){
       newStr += word;
       if(i < length ) newStr += " ".repeat(1)
       i++;

    }
    return newStr;
}
console.log(repeatWord('abc'));//abc abc ab