//https://www.codewars.com/kata/589478160c0f8a40870000bc/train/javascript

//======================= arrowArea ================================
//An arrow is formed in a rectangle with sides a and b by joining the
// bottom corners to the midpoint of the top edge and the centre of the rectangle.


function arrowArea(a,b) {
    let arrow = (a * b / 2 ) / 2;
    return arrow;


}
console.log(arrowArea(7,6)); // 10.5