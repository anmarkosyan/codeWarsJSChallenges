//https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097/train/javascript


//================================= century =================================
//The first century spans from the year 1 up to and including the year 100,
// The second - from the year 101 up to and including the year 200, etc.
// Given a year, return the century it is in.


const century = year => Math.ceil(year / 100);


console.log(century(1986));// 20