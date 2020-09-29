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

