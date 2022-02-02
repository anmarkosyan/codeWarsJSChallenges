
//https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a/train/javascript
//============================ Clock  =============================================
//Clock shows 'h' hours, 'm' minutes and 's' seconds after midnight.
//Your task is to make 'Past' function which returns time converted to milliseconds.
//================================================================================



function past(h, m, s){
    const milliseconds = 1000;
    return (h * 3600  + m * 60  + s) *  milliseconds;
}


console.log(past(0, 1, 1, ));//61000
console.log(past(1,1,1))//3661000
console.log(past(0,0,0));// 0
console.log(past(1,0,1));//3601000
console.log(past(1,0,0));//3600000