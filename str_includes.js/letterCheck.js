//============= letter Check ===========
//
//Write a function that checks if all the letters in the second string
// are present in the first one at least once,
// regardless of how many times they appear:
//Function should not be case sensitive, as indicated in example #2.
//Note: both strings are presented as a single argument in the form of an array.

function letterCheck(arr) {
    //#1
//     let count = 0;
//     let first = arr[0].toLowerCase();
//     let second = arr[1].toLowerCase();
//     for(let el of second){
//         if(first.includes(el)){
//             count++;
//         }
//     }
//return count === arr[1].length;
    //#2
    return [...arr[1].toLowerCase()].every(el => arr[0].toLowerCase().includes(el));

}
console.log(letterCheck(["trances", "nectar"]));//true
console.log(letterCheck(["THE EYES", "they see"]));//true
console.log(letterCheck(["assert", "staring"]));//false