//https://www.codewars.com/kata/59342039eb450e39970000a6/train/javascript

//================================= oddCount =======================
//Given a number n, return the number of positive odd numbers below n,

const oddCount = n => Math.round((n -1)/ 2);

console.log(oddCount(15))//7
console.log(oddCount(23))//11