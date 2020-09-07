// https://www.codewars.com/kata/5abd66a5ccfd1130b30000a9/train/javascript
//Given an array of positive integers (the weights of the people), return a new array/tuple of two integers,
//where the first one is the total weight of team 1, and the second one is the total weight of team 2.

const rowWeights = arr => {
    let sum1 = 0;
    let sum2 = 0;
    for(let i = 0; i < arr.length; i++){
        if(i % 2 === 0) sum1 += arr[i]
        else sum2 += arr[i]
    }
    return [sum1, sum2]
}

console.log(rowWeights([50,60,70,80]));//[120, 140] => 50+70 and 60+80
console.log(rowWeights([50]));//[50, 0]