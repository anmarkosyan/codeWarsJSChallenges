/*
Two arrays are called similar if one can be obtained from another by
swapping at most one pair of elements in one of the arrays.

Given two arrays a and b, check whether they are similar.

 * */

function areSimilar(a, b) {
  if (a.toString() === b.toString()) return true;
  let arr1 = [];
  let arr2 = [];

  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      arr1.push(a[i]);
      arr2.push(b[i]);
    }
  }
  arr2 = arr2.reverse();

  return arr1.length === 2 && arr1.toString() === arr2.toString();
}

console.log(areSimilar([1, 2, 3], [1, 2, 3])); //true
console.log(areSimilar([1, 2, 2], [1, 1, 2])); //false
console.log(areSimilar([1, 2, 3], [1, 10, 2])); //false
console.log(areSimilar([1, 2, 3], [2, 1, 3])); //true
