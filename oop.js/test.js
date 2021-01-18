//==================== 📍OOP ==================

// 1) way
function Rectangle1() {
  this.a = 3;
  this.b = 8;
}
const area1 = new Rectangle1();
console.log(area1.a * area1.b);

//2) way using CLASS DECLARATION
class Rectangle2 {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
}
const area2 = new Rectangle2();
console.log(area2.a * area2.b);

//3) way using CLASS DECLARATION
class Rectangle3 {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
  get area() {
    return this.calcArea();
  }

  calcArea() {
    return this.a * this.b;
  }
}
const square = new Rectangle3(3, 8);

console.log(square.area);
