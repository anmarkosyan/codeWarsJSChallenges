//========================= palindrome Chain Length ================================
//
//Write a method palindrome_chain_length which takes a positive number and returns
// the number of special steps needed to obtain a palindrome.
// The special step is: "reverse the digits, and add to the original number".
// If the resulting number is not a palindrome,
// repeat the procedure with the sum until the resulting number is a palindrome.
// If the input number is already a palindrome, the number of steps is 0.
// Input will always be a positive integer.

//For example, start with 87:
//
// 87 + 78 = 165; 165 + 561 = 726; 726 + 627 = 1353; 1353 + 3531 = 4884
//
// 4884 is a palindrome and we needed 4 steps to obtain it

const palindromeChainLength = function(n) {
    //#1 using methods
    let count = 0;
    let rev = parseInt((n + '').split('').reverse().join(''));
    while(rev !== n){
        n += rev;
        rev = parseInt((n + '').split('').reverse().join(''))
        count++;
    }
    return count;

    //#2
    // let count = 0, rev = 0;
    // while(n !== (rev = parseInt((n+'').split('').reverse().join('')))) {
    //     n += rev;
    //     count++;
    // }
    // return count;

    //#3 using recursion
    // let x = parseInt( (""+n).split('').reverse().join(''));
    //     if(n !== x){
    //         return  1 + palindromeChainLength (n + x);
    //     }
    //     return 0;
};
console.log(palindromeChainLength(87));//4