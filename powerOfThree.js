//=================== power of three =========================
//write a function to find power of three, without using a ** n || Math.pow(a, n);



function power(a, n){
    let result = a;
    for(let i = 1; i < n; i++){
        result = result * a;

    }
    if(n === 0) return 1;
   return result;
}

console.log(power(3, 3));// 27 3*3*3=27
console.log(power(2, 5 ));// 32  2*2*2*2*2= 32