// ========================== totalPrice ===================
//Find total price in restaurant , if we have price, tipPercent, taxPercent
//(100 + 15% + 14%) = total
//=================================================


function totalPrice(price, tipPercent, taxPercent){

    let total = price + (tipPercent / 100 ) * price + (taxPercent / 100) * price;
    return +total.toFixed(2);
}
console.log(totalPrice(100, 15, 12));
console.log(totalPrice(122,  13, 8));