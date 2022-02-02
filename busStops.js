//https://www.codewars.com/kata/5648b12ce68d9daa6b000099/train/javascript
//write a function to find how many people is still in bus after last bus station(last array)
//we have how many people get into bus, and get off.the result should sum of into + sum of out
//and difference will be how many people probably sleeping there))

const busStops = arr => {
    let sum = 0;
    for(let el of arr){
        sum += el[0] - el[1];
    }
    return sum;
}
console.log(busStops([[10, 0],[3,5],[5,8]])); //5