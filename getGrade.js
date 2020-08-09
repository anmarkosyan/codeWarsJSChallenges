//https://www.codewars.com/kata/55cbd4ba903825f7970000f5/train/javascript

//============================ getGrade ===================================
//Complete the function so that it finds the mean of the three scores passed to it and returns
// the letter value associated with that grade.
//Numerical Score	Letter Grade
// 90 <= score <= 100	'A'
// 80 <= score < 90	'B'
// 70 <= score < 80	'C'
// 60 <= score < 70	'D'
// 0 <= score < 60	'F'

function getGrade (s1, s2, s3) {
    let mean = (s1 + s2 + s3) / 3;

    if(mean < 60 ) return 'F';
    else if(mean < 70) return 'D';
    else if(mean < 80) return 'C';
    else if(mean < 90) return 'B';
    else return 'A'

}

console.log(getGrade(95,90,93));//'A'
console.log(getGrade(70,70,100));//'B'