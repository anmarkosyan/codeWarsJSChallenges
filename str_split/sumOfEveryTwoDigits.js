//=================== Every possible sum of two digits ======================================
//
//Given a long number, return all the possible sum of two digits of it.


const digit = num => {
     let arr = (num + '').split('');
    let res = [];
    for(let i = 0; i < arr.length; i++){
        for(let y = i + 1; y < arr.length; y++){
            res.push(+arr[i] + +arr[y]);
        }
    }
    return res;
}
console.log(digit(156));//[6, 7, 11]
console.log(digit(3852));//[11, 8, 5, 13, 10, 7]