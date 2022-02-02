//https://www.codewars.com/kata/57b58827d2a31c57720012e8/train/javascript

//====================== fuelPrice =======================
//In this kata you will have to write a function that takes litres and pricePerLiter as arguments.
// Purchases of 2 or more litres get a discount of 5 cents per litre, purchases of 4 or more litres
// get a discount of 10 cents per litre, and so on every two litres, up to a maximum discount of 25 cents per litre.
// But total discount per liter cannot be more than 25 cents.
// round answer to 2 decimal places. Also you can guess that there will not be negative or non-numeric inputs.


function fuelPrice(litres , pricePerLiter) {
    let totalPrice;
    if (litres < 2) {
        totalPrice = litres * pricePerLiter;
    } else if (litres < 4) {
        totalPrice = litres * (pricePerLiter - 0.05);
    } else if (litres < 6) {
        totalPrice = litres * (pricePerLiter - 0.1);
    } else if (litres < 8) {
        totalPrice = litres * (pricePerLiter - 0.15);
    } else if (litres < 10) {
        totalPrice = litres * (pricePerLiter - 0.2);
    } else {
        totalPrice = litres * (pricePerLiter - 0.25);
    }

    return +totalPrice.toFixed(2);

}

console.log(fuelPrice(5, 1.23));//5.65
console.log(fuelPrice(8, 2.5));// 18.40