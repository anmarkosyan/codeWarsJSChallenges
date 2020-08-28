//======================= count powers in array ===========================
//Write a function countPowersInArray that takes an array arr as an argument and returns
// the number of elements of a number that is a power of 2 or a power of 10.


function countPowersInArray(arr){
    let count = 0;
    for(let pow of arr){
        if(Math.log2(pow) % 1 === 0 || Math.log10(pow) % 1 === 0){
            count++;
        }
    }
    return count;

}
console.log(countPowersInArray([10, 100, 0.1, 4, 8]))//5   => 10, 100, 0.1 is a power of 10 and 4, 8 is a power of 2