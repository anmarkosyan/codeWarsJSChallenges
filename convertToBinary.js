//https://www.codewars.com/kata/59fca81a5712f9fa4700159a/train/javascript

//========================= convert to Binary ===========================
//convert non-negative integer to Binary format

const convertToBinary = n => +n.toString(2);


console.log(convertToBinary(3));//11
console.log(convertToBinary(2));//10


//========== convert numbers ========
const convertNumbers = num => {
    let decimal = +num.toString();
    let binary = +num.toString(2);
    let octal = +num.toString(8);
    let hex = num.toString(16);
    return [decimal, binary, octal, hex];
}
console.log(convertNumbers(5));//[ 5, 101, 5, '5' ]
console.log(convertNumbers(12))//[ 12, 1100, 14, 'c' ]

