// =========================== sum of nested array ====================
//write a function to find sum of all nested array


function sumOfNestedArray(arr){
    let res = [];
    for(let i = 0; i < arr.length; i++){
        let sum = 0;
        for(let j = 0; j < arr[i].length; j++){
            sum = sum + arr[i][j];
        }
        res.push(sum)
    }
    return res;
}
console.log(sumOfNestedArray([[1,2,3], [2,2,2], [0, 1, -1, 5]]));//[6, 6, 5]