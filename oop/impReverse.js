Array.prototype.reverse = function () {
  let first = 0,
    last = this.length - 1;
  while (first < last) {
    [this[first], this[last]] = [this[last], this[first]];
    first++;
    last--;
  }
  return this;
};
console.log([1, 2, 3, 4].reverse())//, [4,3,2,1]);
console.log(["a", "b", "c"].reverse())//, ["c", "b", "a"]);
console.log([].reverse())//, []);
