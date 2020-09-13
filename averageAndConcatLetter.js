//https://www.codewars.com/kata/56f7493f5d7c12d1690000b6/train/javascript
//==========================
//Return an array of length 2 with a[0] representing the mean of the ten integers
// as a floating point number. There will always be 10 integers and 10 characters.
// Create a single string with the characters and return it as a[1] while maintaining the original order.

function mean(arr){
    //1 way
    // let str = '', sum = 0;
    // for(let el of arr){
    //     if(!isNaN(el)) sum += +el;
    //     else str += el;
    // }
    //     return [sum / 10, str]

    //2 way
    return  [arr.filter(el => !isNaN(el)).reduce((sum, item) => sum + +item, 0) / 10, arr.filter(el => isNaN(el)).join('')]

}
console.log(mean(["u", "6", "d", "1", "i", "w", "6", "s", "t", "4", "a", "6", "g", "1", "2", "w", "8", "o", "2", "0"]));
// [3.6, "udiwstagwo"]

