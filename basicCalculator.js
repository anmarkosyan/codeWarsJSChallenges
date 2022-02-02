//https://www.codewars.com/kata/5296455e4fe0cdf2e000059f/solutions/javascript

//=========================== basic Calculator ===================


//using switch statement
function calculate(num1, operation, num2) {
    switch(operation){
        case '+': return num1 + num2;
        case '-': return num1 - num2;
        case '/': return (num1 / num2 === -Infinity) ? null :num1 / num2;
        case '*': return num1 * num2;
        default: return null;
    }

}


console.log(calculate(5, '/', 0));// null