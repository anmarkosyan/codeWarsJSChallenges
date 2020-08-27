//https://www.codewars.com/kata/56269eb78ad2e4ced1000013/train/javascript

//========================== find next perfect square ====================
//Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter.
// Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.
// If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is positive.


function findNextSquare(sq) {
    //1 way
    // let root1;
    // let next;
    // if(Math.sqrt(sq) % 1 === 0){
    //     root1 = Math.sqrt(sq);
    //     //console.log(root1)
    //     next = root1 + 1;
    // }else{
    //     return -1;
    // }
    // return next ** 2;
    // or using ternary operator
    return Math.sqrt(sq) % 1 === 0 ? Math.pow(Math.sqrt(sq) + 1, 2) : -1;

}
console.log(findNextSquare(121));// 144
console.log(findNextSquare(256));// 289
console.log(findNextSquare(155));// -1