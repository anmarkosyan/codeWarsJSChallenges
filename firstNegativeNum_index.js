//================== first negative num and it index =================
//write a function to find first negative and it index


function firstNegativeNum_index(arr){
    let neg;
    let index;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < 0){
            neg = arr[i];
            index = i;
            break;
        }
    }
    return [neg, index];

}
console.log(firstNegativeNum_index([1, 4, -5, 7, -3]));//-5, 2