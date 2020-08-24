//=================== count infinity ==================
//write a function to count all infinity values in a given array


function countInfinity(arr){
    let count = 0;
    for(let elem of arr){
        if(!Number.isFinite(elem)) count++;
    }
     return count;
}
console.log(countInfinity([Infinity, 1/0, -10/0, 12, NaN, 100]));// 4