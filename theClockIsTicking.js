//
//You need to write a function in Javascript which will accept the radius "r" (in centimetres) of the clock and the angle "alpha" (in degrees) of the hour hand shown .
// Based on these parameters your function will calculate the position of the minute hand and return the area "S" (in square centimetres) of the smaller sector between the two hands .
//You can be sure that the hour hand angle will always be an integer (not a fraction). Good luck!


function clock (r, alpha) {
    let hourHand = alpha * (1 / 30);
    let minHand =  hourHand * 60 % 60 / 5;
    return  Math.PI * (r ** 2) * Math.abs(minHand - hourHand) / 12;

}
console.log(clock(10, 45));

