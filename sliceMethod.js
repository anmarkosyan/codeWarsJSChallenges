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


