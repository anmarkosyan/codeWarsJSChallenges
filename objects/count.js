//============================ Counting Array Elements ==========================================================
//
//Write a function that takes an array and counts the number of each unique element present.

function count(array){
    let obj = {};
    for(let el of array){
        if(obj[el]) obj[el]++;
        else obj[el] = 1;
    }
    return obj;

}
console.log(count(['a', 'a', 'b', 'b', 'b']));//{ 'a': 2, 'b': 3 }
console.log(count(['james', 'james', 'john']));//{ 'james': 2, 'john': 1}

