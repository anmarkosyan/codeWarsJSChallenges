//https://www.codewars.com/kata/57a386117cb1f31890000039/train/javascript

//====================== parse float =====================================

//Write function parseF which takes an input and returns a number or null
//if conversion is not possible. The input can be one of many different types so be aware.

const  parseF = s => isNaN(parseFloat(s)) ? null : parseFloat(s);


console.log(parseF('1'))//1.0
console.log(parseF('an123b'))//null instead of NaN
console.log(parseF('+123'))//123
console.log(parseF('33.5an34.7ar'))//33.5
