//============== blood Alcohol Content ==============================
//
//BAC% = (A × 5.14 / W × r) - .015 × H
//
// A: Total alcohol consumed, in ounces (oz)
// W: Body weight, in pounds (lbs)
// r: The alcohol distribution ratio, 0.73 for man, and 0.66 for women
// H: Time passed since drinking, in hours


function bloodAlcoholContent(drinks, weight, sex, time){
    let ratio = sex === 'male' ? 0.73 : 0.66;
    let total = drinks.ounces * drinks.abv;
    let bac = (total * 5.14 / weight * ratio) - 0.015 * time;

    return +bac.toFixed(4);
}
console.log(bloodAlcoholContent({ounces:12.5, abv:0.4}, 190, 'male', 1));//0.0837