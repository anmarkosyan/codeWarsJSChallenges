//===================== fill array ========================
//write a function a fill array using a given number, except
//given x number


function fillArray(n, x){
    let arr = [];

    for(let i = 1; i <= n; i++){
        if(i === x) continue;
        else arr.push(i);
    }
    return arr;
}
console.log(fillArray(5, 2));//[1, 3, 4, 5]