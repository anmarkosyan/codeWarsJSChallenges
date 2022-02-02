//https://www.codewars.com/kata/57eaec5608fed543d6000021/train/javascript
//Given a mixed array of number and string representations of integers,
//add up the string integers and subtract this from the total of the non-string integers.
// Return as a number.


const divCon = x => {
    let numSum = 0, strSum = 0;
    for(let num of x){
        if(typeof num === 'number') numSum += num;
        else strSum += +num;
    }
    return numSum - strSum;
}
console.log(divCon([9, 3, '7', '3']));// 2  => 9+3=12 7+3=10 12-10=2