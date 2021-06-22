class Rectangle {
  constructor(w, h) {
    this.w = w;
    this.h = h;
  }
  /*
   *  Write code that adds an 'area' method to the Rectangle class' prototype
   */

  area() {
    return this.w * this.h;
  }
}

/*
 * Create a Square class that inherits from Rectangle and implement its class constructor
 */
class Square extends Rectangle {
  constructor(w) {
    super(w, w);
  }
}

if (
  JSON.stringify(Object.getOwnPropertyNames(Square.prototype)) ===
  JSON.stringify(["constructor"])
) {
  const rec = new Rectangle(3, 4);
  const sqr = new Square(3);

  console.log(rec.area()); //12
  console.log(sqr.area()); //9
} else {
  console.log(-1);
  console.log(-1);
  console.log(-1);
}
