//==================  above Average Score ====================
//The array contains the marks of the students in the class.
// How many students have a higher than average score?
//(That is, how many students have a score that is higher than the arithmetic mean of the array elements).


const aboveAverageScore = arr => {
    let sum = 0;
    let length = arr.length;
    let count = 0;
    for(let num of arr){
        sum += num;
    }
     for(let num of arr){
         if(num > sum / length){
             count++;
         }
     }
     return count;

}
console.log(aboveAverageScore([3, 4, 5]));//1 ====> (3+4+5) / 3 = 4 => 5 > 4