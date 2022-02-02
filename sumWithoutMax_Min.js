//
//Sum all the numbers of the array (in F# and Haskell you get a list) except the highest and the
// lowest element (the value, not the index!).
// (The highest/lowest element is respectively only one element at each edge,
// even  if there are more than one with the same value!)

//solving without methods!!!

const sumWithoutMax_Min = arr => {
    if(!arr  || arr.length <= 2) return 0 ;
    let min = arr[0];
    let max = arr[0];
    let minInd = 0;
    let maxInd = 0;
    let sum = 0;
    for(let i = 1; i < arr.length; i++){
        if(arr[i] < min){
            min = arr[i];
            minInd = i;
        } else if (arr[i] > max){
            max = arr[i];
            maxInd = i;
        }
    }
    for(let i = 0; i < arr.length; i++){
        if(i !== minInd && i !== maxInd){
            sum += arr[i]
        }
    }
    return  sum;
}
console.log(sumWithoutMax_Min([6, 2, 1, 8, 10]));//16
console.log(sumWithoutMax_Min([1, 1, 2, 4, 3]));//6