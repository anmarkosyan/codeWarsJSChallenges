//https://www.codewars.com/kata/546e2562b03326a88e000020/train/javascript

//===================== square of digits ====================
//write a function to square every digit of a number and concat it

function squareDigits (num){
    let str = num + '';
    let res = '';
    for(let el of str){
        res += el ** 2;
    }
    return +res;
}
console.log(squareDigits(9119));//811181