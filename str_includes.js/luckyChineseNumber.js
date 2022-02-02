//============== lucky Chinese Number ============


const luckyChineseNumber = arr => {
    // let newArr = [];
    // for(let i = 0; i < arr.length; i++){
    //     if((arr[i] + '').includes('8')){
    //         newArr.push(arr[i])
    //     }
    //
    // }
    // return newArr;
    return arr.filter(el => (el + '').includes('8'));
}
console.log(luckyChineseNumber([123, 34, 18, 8, 23, 88, 128]));//[18, 8, 88, 128]
