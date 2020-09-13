//https://www.codewars.com/kata/56f7493f5d7c12d1690000b6/train/javascript
//==========================
//Return an array of length 2 with a[0] representing the mean of the ten integers
// as a floating point number. There will always be 10 integers and 10 characters.
// Create a single string with the characters and return it as a[1] while maintaining the original order.

function mean(arr){
    let num = [];
    let res = arr.filter(el => !isNaN(el)).forEach(el => num.push(+el));
    return  [num.reduce((sum, item) => sum + item, 0) / num.length, arr.filter(el => isNaN(el)).join('')]
}
console.log(mean(["u", "6", "d", "1", "i", "w", "6", "s", "t", "4", "a", "6", "g", "1", "2", "w", "8", "o", "2", "0"]));
// [3.6, "udiwstagwo"]

//!!!!!! work but something  wrong with res, because I dont use it