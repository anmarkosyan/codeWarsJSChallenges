//
//==================== tortoise race ======================
//Two tortoises named A and B must run a race. A starts with an average speed of 720 feet per hour.
// Young B knows she runs faster than A, and furthermore has not finished her cabbage.
// When she starts, at last, she can see that A has a 70 feet lead but B's speed is 850 feet per hour.
// How long will it take B to catch A?
// More generally: given two speeds v1 (A's speed, integer > 0) and v2 (B's speed, integer > 0)
// and a lead g (integer > 0) how long will it take B to catch A?
// The result will be an array [hour, min, sec] which is the time needed in hours, minutes and
// seconds (round down to the nearest second) or a string in some languages.


function tortoiseRace(a, b, g){
    if(a >= b) return null;
    let time = Math.trunc(g * 3600 / (b - a))
    let hour = Math.trunc(time / 3600);
    let min = Math.trunc(time % 3600 / 60);
    let sec = Math.trunc(time % 60);
    return [hour, min, sec]


}
console.log(tortoiseRace(720, 850, 70));//[0, 32, 18]
console.log(tortoiseRace(80, 91, 37));//[3, 21, 49]