//1️⃣ JS Native objects
/*
Built-in Objects are standard built-in objects provided by Javascript.
Native objects is sometimes referred to as ‘Global Objects’
 * String()
 * Boolean()
 * Number()
 * Array()
 * Object()
 * Function()
 * Date()
 * RegExp()
 * Error()
 * Image()
 * */

//2️⃣ JS Host objects
/*
 * Host Objects are objects supplied by a certain environment.
 * They are not always the same because each environment differs and contains
 * host objects that accommodates execution of ECMAScript.
 * Example, browser environment supplies objects such as window.
 * While a node.js/server environment supplies objects such as NodeList.
 * exp: console
 * */
//========================== 🔴 coding challenges ==============
//1️⃣
// const str = new Function("x", "y", "return x * y"); => native object
// console.log(str instanceof Object, str(3, 4)); //str instanceof Function and Object
// const answer = console instanceof Function; // => false
// //const answer = console instanceof Object => true => host object
// console.log(answer);

//2️⃣
// length = 10;
// function func() {
//   console.log(this.length);
// }
//
// const obj = {
//   length: 5,
//   thisFunc(func) {
//     func(); //10 => global object length = 10
//     arguments[0]();//2 => length of arguments (func, 3)
//   },
// };
//
// obj.thisFunc(func, 3);
//3️⃣
// const MyDate = function (date) {
//   this.date = date;
// };
//
// const obj4 = {};
// obj4.foo = new Date();
// obj4.bar = new MyDate(obj4.foo);
// console.log(obj4.bar);//MyDate { date: 2021-06-23T09:56:12.402Z }
//4️⃣
// function isPrototype() {
//   const obj1 = { x: 1 };
//   const obj2 = Object.create(obj1); //write-your-code-here
//
//   console.log(
//     obj1.isPrototypeOf(obj2) //should evaluate to true
//   );
// }
// isPrototype();
//5️⃣ make it work!!
// function Human(name, age) {
//   this.name = name;
//   this.age = age;
// }
//
// function Man(name, age) {
//   //write-your-code-here
//   Human.call(this, name, age);
// }
// //write-your-code-here
// Man.prototype = Object.create(Human.prototype);
// Man.prototype.constructor = Man;
//
// function check() {
//   const obj = new Man("Tommy Tan", 20);
//   console.log(obj.name); //should print name
//   console.log(obj instanceof Human); //should be true
// }
// check();
//6️⃣
class Vehicle {
  constructor(fuel) {
    this.fuel = fuel;
  }
  turnOn() {
    //write-code-here
    console.log("Turned on");
  }
  turnOff() {
    //write-code-here
    console.log("Turned off");
  }
}

class Car extends Vehicle {
  //write-code-here
  constructor(fuel, isParked) {
    super(fuel, isParked);
    this.isParked = isParked;
  }

  turnOn() {
    this.isParked && this.fuel < 500
      ? console.log("Refill Fuel")
      : super.turnOn();
  }

  turnOff() {
    !this.isParked ? console.log("Car not parked") : super.turnOff();
  }
}

const car1 = new Car(1000, true);
const car2 = new Car(400, true);
const car3 = new Car(1500, false);
car1.turnOn(); //"Turned on"
car1.turnOff(); //"Turned off"
car2.turnOn(); //"Refill Fuel"
car2.turnOff(); //"Turned off"
car3.turnOn(); //Turned on"
car3.turnOff(); //"Car not parked"
