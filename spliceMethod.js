
//============== array.splice(start, deleteCount[, item1[, item2[, ...]]]) ========

//============== delete 2 items at index 2========
const arr = ['year', 'day', 'week', 'minute', 'second'];
let removed = arr.splice(2, 2);
console.log(removed);//['week', 'minute']
console.log(arr);//[ 'year', 'day', 'second' ] !!!!! change original array

//============== add element 'life' at index 3 ==========
let arr1 = ['year', 'day', 'week', 'minute', 'second']
let removed1 = arr1.splice(3, 0, 'life');
console.log(removed1);// noting deleted
console.log(arr1);//[ 'year', 'day', 'week', 'life', 'minute', 'second' ]

//============ Remove 2 items at index 1 and replace them with '365' and '7'=====
let arr2 = ['year', 'day', 'week', 'minute', 'second'];
let removed2 = arr2.splice(1, 2, '365', '7');
console.log(removed2);//[ 'day', 'week' ]
console.log(arr2);//[ 'year', '365', '7', 'minute', 'second' ]

//=========== Remove all items starting at index 1===========
let arr3 =  ['year', 'day', 'week', 'minute', 'second'];
let removed3 = arr3.splice(1);
console.log(removed3);//[ 'day', 'week', 'minute', 'second' ]
console.log(arr3);//[ 'year' ];

//============ Remove 2 elements from the end of the array =========
let arr4 = ['year', 'day', 'week', 'minute', 'second'];
let removed4 = arr4.splice(-2);
console.log(removed4);//[ 'minute', 'second' ]
console.log(arr4);//[ 'year', 'day', 'week' ]

//================ delete elements below n =============
let arr5 = [0, 1, 2, 3, 5, 8, 13];
let n = 3;
//1 way
//console.log(arr5.splice(0, n));//[ 0, 1, 2 ]
//2 way
arr5.splice(n);
console.log(arr5);//[ 0, 1, 2 ]







