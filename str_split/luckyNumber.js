//================ find your lucky number ================

const luckyNum = date => {
    //#1 using for loop , time: 3 step
    let sum = 0;
    for(let num of date){
        if(/[0-9]/.test(num)){  // if(parseInt(num))
            sum += +num;
        }
    }
    return sum % 9 === 0 ? 9 : sum % 9;

}
console.log(luckyNum('12/22/1986'));//4
console.log(luckyNum('6/1/1993'));//2
console.log(luckyNum('5/28/1948'))//1

