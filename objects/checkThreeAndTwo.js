//=======================  Check three and two ==============================
//
//Given an array with exactly 5 strings "a", "b" or "c" ,
// check if the array contains three and two of the same values.


function checkThreeAndTwo(arr) {
    //I think this is best solution!!!! yes))))))
    let obj = {};
    for(let el of arr){
        if(obj[el]) obj[el]++;
        else obj[el] = 1;
    }
    let res = []
    for(let key in obj){
        res.push(obj[key])
    }
    return res.includes(3) && res.includes(2);
}
console.log(checkThreeAndTwo(["a", "a", "a", "b", "b"]));//true
console.log(checkThreeAndTwo(["a", "c", "a", "c", "b"]));//false
console.log(checkThreeAndTwo(['a', 'a', 'a', 'a', 'a']));//false