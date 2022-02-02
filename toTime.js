//https://www.codewars.com/kata/5865cff66b5699883f0001aa/train/javascript
//=================== convert seconds to hour and minute ==================
//Create a function called toTime() that takes an integer argument of seconds and
//converts the value into a string describing how many hours and minutes comprise that many seconds.


function toTime(sec){
    let hour = Math.floor(sec / 3600);
    let min = Math.floor(sec % 3600 / 60);
    return `${hour} hour(s) and ${min} minute(s)`;

}
console.log(toTime(3600));//'1 hour(s) and 0 minute(s)'
console.log(toTime(3500));//'0 hour(s) and 58 minute(s)'
console.log(toTime(323500));//'89 hour(s) and 51 minute(s)'