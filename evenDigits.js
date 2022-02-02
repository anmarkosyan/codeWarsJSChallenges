//===================== even digits ========================
//find in a given number all even digits , using do while loop



function evenDigits(n){
    let arr = [];
    do{
        let last = n % 10;
        if(last % 2 === 0)
            arr.unshift(last);
        n = Math.floor(n / 10)
    }while(n > 0)
    return arr;
}

console.log(evenDigits(1234678));//[2, 4, 6, 8]