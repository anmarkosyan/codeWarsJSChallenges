//https://www.codewars.com/kata/57d448c6ba30875437000138/train/javascript

//============================= roots =============================
//Implement function which will return sum of roots of a quadratic equation rounded to 2 decimal places,
// if there are any possible roots, else return None/null/nil/nothing. If you use discriminant,
// when discriminant = 0, x1 = x2 = root => return sum of both roots. There will always be valid arguments.

function roots(a,b,c){
    let d = Math.pow(b, 2) - 4 * a * c;
    let sum = -b / a
    return d  < 0 ?  null : +sum.toFixed(2)

}
console.log(roots(1, -35, -23)); //35
console.log(roots(6, 4, 8));//null
console.log(roots(1,5,-24)); // -5