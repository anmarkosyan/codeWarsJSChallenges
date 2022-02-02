//========================  count of negative lines in nested array ===============
//[[1, 2], [2, -2, -3], [3, 5], [3, 4, 5, -1, 8]]// 2
//[[1, -2], [2, -2, -3], [3, 5], [3, 4, 5, -1, 8], [-3, -1]] // 4

function countLinesWithNegativeElements(arr){
    let res = [];
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr[i].length; j++){
            if(arr[i][j] < 0){
                res.push(arr[i]);
                break;
            }
        }
    }
    return res.length;
}

console.log(countLinesWithNegativeElements([[1, 2], [2, -2, -3], [3, 5], [3, 4, 5, -1, 8]]));// 2
console.log(countLinesWithNegativeElements([[1, -2], [2, -2, -3], [3, 5], [3, 4, 5, -1, 8], [-3, -1]]));// 4