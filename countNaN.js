// ===================== count NaN ===================
//write a function to return count of all NaN elements in
// a given array


function countNaN(arr){
 let count = 0;
   for(let elem of arr){
      if(elem !== elem)  count++;
   }
    return count;
}
console.log(countNaN([NaN, 1, 'hello', true, NaN + 1]));


