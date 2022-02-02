//==============Don't give me five! ================
//https://www.codewars.com/kata/5813d19765d81c592200001a/train/javascript
//In this kata you get the start number and the end number of a
// region and should return the count of all numbers except numbers with a 5 in it.
// The start and the end number are both inclusive!

const dontGiveMeFive = (start, end) => {
    let count = 0;
    for(let x = start; x <= end; x++){
        if(!(x + '').includes('5')){
            count++;
        }
    }
    return count;

}
console.log(dontGiveMeFive(1, 9));//8
console.log(dontGiveMeFive(4, 66));//47