//=========================== is negative in array ======================
//write a function to find a first negative number in a given array, and return true
//if exist , otherwise false;


function isNegativeInArray(arr){
    let exist = false;
    for(let num of arr) {
        if (num < 0) {
            return !exist;
            break;
        }


    }
    return exist;

}
console.log(isNegativeInArray([1, 4, -2, 6, -6, 3]));// true
console.log(isNegativeInArray([1, 4, 12,  6, 3, 67]));// false
