//https://www.codewars.com/kata/57f6ad55cca6e045d2000627/train/javascript

//====================== square or square root =====================
//Write a function that will get an integer array as parameter and will process every number from this array.
//Return a new array with processing every number of the input-array


function squareOrSquareRoot(arr) {
    //1 way
    // let newArr = [];
    // for(let num of arr){
    //     if(Math.sqrt(num) === Math.floor(Math.sqrt(num))){
    //         newArr.push(Math.sqrt(num))
    //     }else {
    //         newArr.push(Math.pow(num, 2))
    //     }
    // }
    // return newArr;
    //2 way
    return arr.map(num => {
        if(Number.isInteger(Math.sqrt(num))){
            return Math.sqrt(num);
        }
        return num ** 2;

    });

}

console.log(squareOrSquareRoot([ 4, 3, 9, 7, 2, 1 ]));// [ 2, 9, 3, 49, 4, 1 ]