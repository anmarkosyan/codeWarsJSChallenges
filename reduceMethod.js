//=================== return sum of all elements multiplies of 100 ===============

let arr = [1, 2, 3, 4, 5];
let res = arr.reduce((acc, curr) => acc + curr, 100);
console.log(res);//115


//============ return sum of all elements ================
let arr1 = [1, 2, 3, 4, 5];
let res1 = arr1.reduce((acc, curr) => acc + curr, 0);
console.log(res1);//15

//================ return average  of all elements in array ==============
let arr2 = [5, 3, 10, 6, 8];
let res2 = arr2.reduce((acc, curr) => acc + curr, 0) / arr2.length;
console.log(res2);//120

//================== multi of sum 2 arrays ======================
const arr3 = [-1, 5, 0, 6];
const arr4 = [10, -10, 2, 3];
let add1 = arr3.reduce((acc, curr)=> acc + curr, 0);
let add2 = arr4.reduce((acc, curr)=> acc + curr, 0);
let multi = add1 * add2;
console.log(multi); // 50

//==================== sum of elements length =============
const arr5 = ['year', 'day', 'week', 'weekend'];
let lengthAllElem = arr5.reduce((acc, curr)=> acc + curr.length, 0);
console.log(lengthAllElem); //18

//=================== sum of squares ================
let array = [1, 2, 3, 4, 5];
let sqrt = array.reduce((sum, item) => sum + item * item, 0);
console.log(sqrt);//55

//==================== diff of square sum and cube sum =======
//true if sqrt > cube
function arrayMadness(a, b) {
    // let sqrt = a.reduce((sum, item) => sum + item * item, 0);
    // let cube = b.reduce((sum, item) => sum + item * item * item, 0);
    // return sqrt > cube;

    //or simply
    return a.reduce((sum, item) => sum + item * item, 0) > b.reduce((sum, item) => sum + item * item * item, 0)
}
console.log(arrayMadness([4,5,6],[1,2,3]));//true
console.log(arrayMadness([5,6,7],[4,5,6]));//false

//================== array plus array ==============
function arrayPlusArray(arr1, arr2) {
   // return arr1.reduce((sum, item) => sum + item, 0) + arr2.reduce((sum, item) => sum + item, 0);
      return arr1.concat(arr2).reduce((sum, item) => sum + item, 0);
}
console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]));//21
