"use strict";
/*In this challenge, we practice using throw and catch statements to work with custom error messages.
Task
Complete the isPositive function below. It has one integer parameter, .
If the value of  is positive, it must return the string YES.
Otherwise, it must throw an Error according to the following rules:
If  is , throw an Error with  Zero Error.
If  is negative, throw an Error with  Negative Error.
*/

/*
 * Complete the isPositive function.
 * If 'a' is positive, return "YES".
 * If 'a' is 0, throw an Error with the message "Zero Error"
 * If 'a' is negative, throw an Error with the message "Negative Error"
 */
function isPositive(a) {
  try {
    if (a > 0) return "YES";
    else if (a === 0) throw new Error("Zero Error");
    else throw new Error("Negative Error");
  } catch (err) {
    return err.message;
  }
}

console.log(isPositive(-4));
console.log(isPositive(0));
console.log(isPositive(3));
