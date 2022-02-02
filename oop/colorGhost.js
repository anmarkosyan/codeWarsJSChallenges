const Ghost = function () {
  const colors = ["white", "yellow", "purple", "red"];
  this.color = colors[Math.trunc(Math.random() * colors.length)];
};
const ghost = new Ghost();
console.log(ghost.color);

//2 way using ES6 class
// class Ghost {
//   constructor() {
//     this.colors = ["white", "yellow", "purple", "red"];
//   }
//
//   get color() {
//     const randomColor = Math.trunc(Math.random() * this.colors.length);
//     return this.colors[randomColor];
//   }
// }
//
// const ghost = new Ghost();
// console.log(ghost.color);
// console.log(ghost.color);
