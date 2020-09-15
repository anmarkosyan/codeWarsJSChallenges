//https://www.codewars.com/kata/570597e258b58f6edc00230d/train/javascript

//============ Remove First and Last Character ===========

const array  = arr => {
    return arr.split(',').slice(1, -1).join(' ') || null;
}
console.log(array(''));//null
console.log(array('1'))//null
console.log(array('1, 3'));//null
console.log(array('1,2,3'));// 2
console.log(array('1,2,3,4,5,6'));// 2 3 4 5


