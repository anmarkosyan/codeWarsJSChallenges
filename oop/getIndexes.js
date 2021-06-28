Array.prototype.only = function (keys) {
  //1way
  //return keys.sort((a, b) => a - b).map((el) => this[el]);
    return this.filter((el, i)=> keys.includes(i))
};
const array = ["a", "b", "c", "d", "e"];

console.log(array.only([0, 3])); // ['a', 'd']);
console.log(array.only([1])); // ['b']);
console.log(array.only([0, 1, 3, 4])); // ['a', 'b', 'd', 'e']);
