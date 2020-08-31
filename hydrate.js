// ======================= hydrate ================================
//How much liquid did Claudia drink in a day?
// Write a hydrate function that takes an array arr containing strings of
// the name and number of glasses of drink you drink and returns the total amount of liquid you drink in ml.
//
// 1 glass = 200 ml


const hydrate = arr => {
    let ml = 200;
    let sum = 0;
    for(let elem of arr){
        sum += parseInt(elem ,10)
    }
    return sum * ml + ' ml' ;
}
console.log(hydrate(["3 glasses of water", "1 glass of milk", "2 glasses of juice", "1 glass of wine"]));// '1400 ml'