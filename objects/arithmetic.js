//=========================== Make a function that does arithmetic! ===================================
//
//Given two numbers and an arithmetic operator (the name of it, as a string),
// return the result of the two numbers having that operator used on them.
// a and b will both be positive integers, and a will always be the first number in the operation,
// and b always the second.
// The four operators are "add", "subtract", "divide", "multiply".

function arithmetic(a, b, operator){
    //#1 long solution
    // let math = {add: '+', subtract: '-', multiply: '*', divide: '/'};
    // if(math[operator] === '+') return a + b;
    // if(math[operator] === '-') return a - b;
    // if(math[operator] === '*') return a * b;
    // if(math[operator] === '/') return a / b;

    //#2 short way
    return {
        'add': a + b,
        'subtract': a - b,
        'divide': a / b,
        'multiply': a * b
     }[operator]

}
console.log(arithmetic(1, 2, "add"));//3
console.log(arithmetic(8, 2, "subtract"));//6
console.log(arithmetic(5, 2, "multiply"));//10
console.log(arithmetic(8, 2, "divide"));//4