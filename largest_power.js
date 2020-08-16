//======================== largest power of 3 ====================
//write a function that return 3 ^ k < n

function largest_power(n){
    let i = 0;
    let k = 1;
    while(k < n){
        k*=3;
        i++;

    }
    return i - 1;
}

console.log(largest_power(7));//1