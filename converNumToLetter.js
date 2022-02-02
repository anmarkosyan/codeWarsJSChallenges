//https://www.codewars.com/kata/559f3123e66a7204f000009f/train/javascript

const ArrowFunc = function(arr) {
    return arr.map(num => String.fromCharCode(num)).join('');
}
console.log(ArrowFunc([70,85,83,32,82,79,72,32,68,65,72]));//FUS ROH DAH
console.log(ArrowFunc([84,101,115,116]));//Test