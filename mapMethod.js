//================== all numbers in square ================

let arr = [1, 2, 3, 4, 5];
let numSqrt = arr.map(el => el ** 2);
console.log(numSqrt);//[ 1, 4, 9, 16, 25 ]

//=============== each number of array increasing by 2 ============
let arr1 = [1, 2, 3, 4, 5];
let numUp = arr1.map(el => el + 2);
console.log(numUp);//[ 3, 4, 5, 6, 7 ]

//============== return all even index elements rounded and odd index elements 0========
let arr2 = [1.57, 2.1, 3.8, 10.67, 25.6];
let res = arr2.map((el, i) => i % 2 === 0 ? Math.round(el) : 0);
console.log(res);//[ 2, 0, 4, 0, 26 ]

//========== convert elements to number =========
let arr3 = ['34', '48', '0', 'true', '12d', '-7'];
let res1 = arr3.map(el => el * 1);
console.log(res1);//[ 34, 48, 0, NaN, NaN, -7 ]

//========= convert elements to string ==========
let arr4 =  [-37, -8, 56.3, 0, 18.9];
let res2 = arr4.map(el => el + '');//String(el)
console.log(res2);//[ '-37', '-8', '56.3', '0', '18.9' ]
console.log(arr4)


//=============== find  Maximum area of a rectangle =========

const maxS = arr => {
    return arr.length === 0 ? null : Math.max(...arr.map(el => el[0] * el[1]));
}
console.log(maxS([[3, 4], [2, 1], [8, 3]]));// 24
console.log(maxS([]));//null

//============ find maximum perimeter of rectangle ======
const maxP = arr => {
    return arr.length === 0 ? null : Math.max(...arr.map(el => 2 * (el[0] + el[1])));
}
console.log(maxP([[3, 4], [2, 1], [8, 3]]));//22
