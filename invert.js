//================== invert numbers ==========================
//write a function to invert a numbers ina given array


function invert(arr){
    let newArr = [];
    for(let num of arr){
        if(num === 0)  newArr.push(num);
            else newArr.push(-num);
            console.log(newArr)
    }
    return newArr;
}
console.log(invert([1, -3, 5, -23, -4]));//[-1, 3, -5, 23, 4]
console.log(invert([0]));//[0]