//====================== Short Long Short =============

function solution(a, b){
    return a.length > b.length ? b + a + b : a + b + a;
}
console.log(solution('45', '1'));//1451
console.log(solution('13', '200'))//1320013

//===================== Abbreviate a Two Word Name =============

function abbrevName(name){
    return name.split(' ').filter(el => el[0].toUpperCase()).join('.')

}
console.log(abbrevName("Sam Harris"));//S.H
console.log(abbrevName("Patrick Feenan"));//P.F


//============== length of decimal digits =======
function digits(n) {
    return (n + '').length
}
console.log(digits(12345));//5
console.log(digits(1133));//4

//============= Triple Trouble ========================
//Create a function that will return a string that combines all of the letters of
//the three inputed strings in groups. Taking the first letter of all of the inputs
//and grouping them next to each other. Do this for every letter
//Note: You can expect all of the inputs to be the same length.

const tripleTrouble = (one, two, three) => {
    //1 way
    // let arr = [];
    // for(let i = 0; i < one.length; i++){
    //     arr.push(one[i]);
    //     arr.push(two[i]);
    //     arr.push(three[i]);
    // }
    // return arr.join('');
    //2 way
    return one.split('').map((el, i) => el + two[i] + three[i]).join('')

}
console.log(tripleTrouble("this","test","lock"));//"ttlheoiscstk"
console.log(tripleTrouble("Bm", "aa", "tn"));//"Batman"


//============== remove spaces ================

const noSpace = str => {
    return str.split(' ').join('');
}
console.log(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'));//8j8mBliB8gimjB8B8jlB

//=========  add spaces ====================

const spaces = str => {
    return str.split('').join(' ');

}
console.log(spaces('hello world'));//h e l l o   w o r l d

//================== repeat each element once ============
const doubleChar = str => {
    return str.split('').map(el => el + el).join('');
}
console.log(doubleChar('abcd'));//'aabbccdd'
console.log(doubleChar("Adidas"));//"AAddiiddaass"
console.log(doubleChar('123'));//'112233'











