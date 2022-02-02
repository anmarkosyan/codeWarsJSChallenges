//https://www.codewars.com/kata/5890d8bc9f0f422cf200006b/train/javascript
//============================== excluding VAT price ===================
//Write a function that calculates the original product price, without VAT.


const excludingVatPrice = price => {
    let prec = 100 + 15;
    let diff = price * 15 / prec;
    return price === null ? -1 : +(price - diff).toFixed(2);

};

console.log(excludingVatPrice(230)); // 200  => + 15% = 230