//========================== Reverse Integer ====================
/*
Given a 32-bit signed integer, reverse digits of an integer.

Note:
Assume we are dealing with an environment that could only store
integers within the 32-bit signed integer range: [−231,  231 − 1].
For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.
 */


const  reverse = function(x) {
    //#1 with methods
    // const reversedInt = Math.abs(x).toString().split('').reverse().join('');
    // if (reversedInt > 2**31) return 0;
    // return reversedInt * Math.sign(x);


    //#2 without methods
    let  isNegative = x < 0
    if (isNegative){
        x = x * -1;
    }
    let reversed = 0;
    while(x > 0){
        reversed = (reversed * 10) + (x % 10);
        x = x - x % 10;
        x = x / 10;
    }

    if(reversed > 2**31){
        return 0;
    }
    return isNegative ? reversed * -1 : reversed;
};
console.log(reverse(123));//321
console.log(reverse(-123));//-321
console.log(reverse(120));//21

