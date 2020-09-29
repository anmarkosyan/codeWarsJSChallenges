//https://www.codewars.com/kata/570597e258b58f6edc00230d/train/javascript

//============ Remove First and Last Character ===========

const array  = arr => {
    return arr.split(',').slice(1, -1).join(' ') || null;
}
console.log(array(''));//null
console.log(array('1'))//null
console.log(array('1, 3'));//null
console.log(array('1,2,3'));// 2
console.log(array('1,2,3,4,5,6'));// 2 3 4 5

//=============== Remove the time =======================
//https://www.codewars.com/kata/56b0ff16d4aa33e5bb00008e/train/javascript
//Write a function, shortenToDate, that takes the Website date/time in its original string format,
//and returns the shortened format.

function shortenToDate(longDate) {
    //#1
    //let endInd = longDate.search(',');
    //#2
    //let endInd = longDate.indexOf(',');
    // return longDate.slice(0,endInd);
    //#3
    //return longDate.slice(0, longDate.indexOf(','));
    //#4
    return longDate.split(',')[0];

}
console.log(shortenToDate("Friday May 2, 9am"));//Friday May 2"
console.log(shortenToDate("Tuesday January 29, 10pm"));//Tuesday January 29


//============================ Tail Swap ==============================
//
//You'll be given a list of two strings, and each will contain exactly one colon (":") in the middle (but not at beginning or end).
//The length of the strings, before and after the colon, are random.
// Your job is to return a list of two strings (in the same order as the original list), but with the characters after each colon swapped.


function tailSwap(arr) {
    //#1
    // let first = arr[0].slice(arr[0].indexOf(':'));
    // let second = arr[1].slice(arr[1].indexOf(':'));
    // return [arr[0].slice(0, arr[0].indexOf(':')) + second,
    //         arr[1].slice(0, arr[1].indexOf(":")) + first];
    //#2
    let a =  arr[0].split(':');
    let b = arr[1].split(':');
    return [`${a[0]}:${b[1]}`, `${b[0]}:${a[1]}`]
}
console.log(tailSwap(['abc:123', 'cde:456']));//['abc:456', 'cde:123']
console.log(tailSwap(['a:12345', '777:xyz']));//['a:xyz', '777:12345']

//============================= Credit Card Mask ==================
//
//Usually when you buy something, you're asked whether your credit card number,
// phone number or answer to your most secret question is still correct.
// However, since someone could look over your shoulder,
// you don't want that shown on your screen. Instead, we mask it.
// Your task is to write a function maskify, which changes all but the last four characters into '#'

function cardMask(cc) {
    //return  (cc.length < 5) ? cc : cc.slice(0, -4).replace(/[0-9]/g,'#') + cc.slice(-4);
    //#2
    return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
}
console.log(cardMask('4556364607935616'));//'############5616'
console.log(cardMask('1'));//'1'
console.log(cardMask('11111'));//#1111

//======================= Create Phone Number ======================
//
//Write a function that accepts an array of 10 integers (between 0 and 9),
//that returns a string of those numbers in the form of a phone number.
//createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"

function createPhoneNumber(numbers){
    numbers = numbers.join('')
    let match = numbers.match(/^(\d{3})?(\d{3})?(\d{4})/)
    return `(${match[1]}) ${match[2]}-${match[3]}`

}
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));//"(123) 456-7890";
console.log(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]));//"(111) 111-1111"

