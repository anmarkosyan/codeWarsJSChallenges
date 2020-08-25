//===================== power array =======================
//write a function to return every number ina given array of power
// if number is even , return square power, if odd return cube power

function powerArray(arr){
    let newArr= [];
    for(let num of arr){
        if(num % 2 === 0)  newArr.push(Math.pow(num, 2))
        else newArr.push(Math.pow(num, 3))
    }
    return newArr;
}
console.log(powerArray([1, 4, 3, 5, 2]));//[1, 16, 27, 125, 4]