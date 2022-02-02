//============================ Interweaving strings and removing digits ====================
//
//Write a function interweave(s1, s2) that reverses this operation to decode his message!
//Example 1: interweave("hlo", "el") -> "hello" Example 2: interweave("h3lo", "el4") -> "hello"

let interweave = function (str1, str2){
    let str = '';
    let maxLen = Math.max(str1.length, str2.length);
    for(let i = 0; i < maxLen; i++){
        if(str1[i]) str += str1[i];
        if(str2[i]) str += str2[i];
    }
    return str.replace(/\d/g, '');

}
console.log(interweave("", ""));//''
console.log(interweave("hlo", "el"));//'hello'
console.log(interweave("h3lo", "el4"));//'hello'