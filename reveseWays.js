//=========================== reverseWays ==========================
//how to reverse every string within thw given array.





//at first lets see how to reverse one word
//1 way
let word = 'table';
let str1 = '';
for(let i = word.length -1; i >=0; i--){
    str1 = str1 + word[i];
}
console.log(str1); // 'e + l + b + a + t'

//2 way

let str2 = '';
for(let i = 0; i < word.length; i++){
    str2 = word[i] + str;

}
console.log(str2);//'e+l+b+a+t'

//3 way
let str3 = '';
for(let letter of word){
    str3 = letter + str3;

}
console.log(str3);

let words = ['noon', 'sun', 'table', 'door', 'happy'];
for(let i = 0; i < words.length; i++){
    let s = '';
   for(let str of words[i]) {
       s += s[i][j];
   }
   words[i] = s;
}


console.log(words);//['noon', 'nus', 'elbat', 'rood', 'yppah']
