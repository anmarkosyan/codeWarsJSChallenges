//https://www.codewars.com/kata/57274562c8dcebe77e001012/train/javascript

//Coding in function cutIt, function accept 1 parameter:arr. arr is a string array.
// The first mission: Traversing arr, find the shortest string length.
// The second mission: Traversing arr again, intercept all strings to
// the shortest string length(Start from index0). you can use one of slice() substring() or substr() do it.
// return the result after finished the work.

const cutIt = arr => {
    let min = Math.min(...arr.map(el => el.length));
    return arr.map(el => el.slice(0, min));
}
console.log(cutIt(["ab","cde","fgh"]));//["ab","cd","fg"]
console.log(cutIt(["abc","defgh","ijklmn"]))//["abc","def","ijk"]