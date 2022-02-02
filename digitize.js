//https://www.codewars.com/kata/5583090cbe83f4fd8c000051/train/javascript

//Given a random non-negative number,
//you have to return the digits of this number within an array in reverse order.


function digitize(n) {
    return (n+'').split('').reverse().map(el => +el);
}
console.log(digitize(352314));//[4, 1, 3, 2, 5, 3]