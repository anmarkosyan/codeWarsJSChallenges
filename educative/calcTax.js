"use strict";

const amountAfterTaxes = function (amount, ...taxes) {
  return  +taxes
    .map((tax) => (amount * tax) / 100)
    .reduce((sum, num) => sum + num, amount)
    .toFixed(2);
};
const amount = 25.12;
const fedTax = 10;
const stateTax = 2;
const localTax = 0.5;

console.log(amountAfterTaxes(amount, fedTax));
console.log(amountAfterTaxes(amount, fedTax, stateTax));
console.log(amountAfterTaxes(amount, fedTax, stateTax, localTax));
