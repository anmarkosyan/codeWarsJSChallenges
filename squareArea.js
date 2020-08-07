//https://www.codewars.com/kata/5748838ce2fab90b86001b1a/train/javascript

//===========================  squareArea ========================================
//Complete the function that calculates the area of the red square, when the length of the circular arc A is given as the input.
// Return the result rounded to two decimals.

function squareArea(A){
    let r = (A / (Math.PI / 2)) ** 2;
    return +r.toFixed(2);

    //or in this way
    // return +Math.pow((4 * A) / (Math.PI * 2), 2).toFixed(2)

}
console.log(squareArea(2));//1.62
console.log(squareArea(14.05));//80