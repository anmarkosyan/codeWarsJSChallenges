//https://www.codewars.com/kata/57a049e253ba33ac5e000212/solutions/javascript

//=============================== Factorial =========================
//write a function that return factorial of n number


function factorial(n){
    let sum = 1;
    let i = 1;
    while(i <= n){
        sum = sum * i;
        i++;

    }
    return sum;
}

console.log(factorial(7));//5040