//================== repeat word word.length time with whitSpaces =========

function repeatWord(word){
    let length = word.length;
    let newStr = '';
    let i = 1;
    while(i <= length){
       newStr += word;
       if(i < length )
           newStr += " ".repeat(1)
       i++;
    }
    return newStr;
}
console.log(repeatWord('abc'));//abc abc abc

//================== valid password ================
//if password length less than 7 , add $ , else return password

const validPassword = str => {
    return str.length < 7 ? str + '$'.repeat(7 - str.length) : str;
}
console.log(validPassword('abc'));//'abc$$$$'
console.log(validPassword('Null'));//'Null$$$'
console.log(validPassword('StrongPassword1234567'));//'StrongPassword1234567'

//====================== Name on billboard ====================
//https://www.codewars.com/kata/570e8ec4127ad143660001fd/train/javascript
//You can print your name on a billboard ad. Find out how much it will cost you.
//Each letter has a default price of £30, but that can be different if you are given 2 parameters instead of 1.
//You can not use multiplier "*" operator.
//If your name would be Jeong-Ho Aristotle's, ad would cost £600. 20 letters * 30 = 600 (Space counts as a letter).

function billboard(name, price = 30){
    //return name.length * price;
    //return name.length/(1/price)
    let sum = 0;
    for(let i = 0; i < name.length; i++){
        sum += price;
    }
    return sum;
}
console.log(billboard('Anush Markosyan'));//450
console.log(billboard('"Hadufuns John",20'));// 540

//============= Jumping Dutch act ============
//
//Mr. despair wants to jump off Dutch act, So he came to the top of a building.
// Scientific research shows that a man jumped from the top of the roof,
// when the floor more than 6, the person will often die in an instant;
// When the floor is less than or equal to 6, the person will not immediately die, he would scream. (without proof)
// Input: floor, The height of the building (floor)

function sc(floor){
    let str = '';
    let i = 0;
    while(i < floor) {
        if (floor > 1) {
            str = 'Aa~ '.repeat(floor - 1) + 'Pa! ' + 'Aa!';
        }
        if (floor > 6) {
            str = 'Aa~ '.repeat(floor - 1) + 'Pa!';
        }
        i++;
    }
    return str;
}
console.log(sc(2));//"Aa~ Pa! Aa!"
console.log(sc(6));//"Aa~ Aa~ Aa~ Aa~ Aa~ Pa! Aa!"
console.log(sc(7));//"Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Pa!"
console.log(sc(''));//''
