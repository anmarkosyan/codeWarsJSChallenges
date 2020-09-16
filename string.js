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

