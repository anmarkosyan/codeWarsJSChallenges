//https://www.codewars.com/kata/515e271a311df0350d00000f/train/javascript
//============================ better Than Average ================
//You receive an array with your peers' test scores. Now calculate the average and compare your score!
// Return True if you're better, else False!
//
// Note:
// Your points are not included in the array of your class's points. For calculating
// the average point you may add your point to the given array!

const betterThanAverage = (classPoint, yourPoint) => {
    classPoint.push(yourPoint);
    let sum = 0;
    let length = classPoint.length;
    for(let num of classPoint){
        sum += num;
    }
    return sum  / length < yourPoint;

}
console.log(betterThanAverage([2, 3], 5)); //true => (2+3+5) / 3 < 5;