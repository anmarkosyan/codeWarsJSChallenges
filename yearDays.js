//https://www.codewars.com/kata/56d6c333c9ae3fc32800070f/train/javascript

//============================== Days in the year +=======================
//Write a function which will return the days in the year and the year entered in a string.
// For example 2000, entered as an integer, will return as a string 2000 has 366 days

function yearDays(year){
    if(year % 4 === 0 && year % 100 !== 0 || !(year % 400))  return `${year} has 366 days`
    else return `${year} has 365 days`;
}

console.log(yearDays(-64)); //'-64 has 366 days'
console.log(yearDays(2016));//'2016 has 366 days'