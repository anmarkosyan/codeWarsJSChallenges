//https://www.codewars.com/kata/544aed4c4a30184e960010f4/train/javascript

//=========================== find divisors =====================
//writ a function to find all divisors of a given number, and if a
// number is not prime return array of divisors, if prime return '3 is prime'


function divisors(n){
    let arr = [];
    for(let i = 2; i < n; i++){
        if(n % i === 0) arr.push(i);
    }
    //1 way
    //return n === 3 || n % 2 > 0 && n % 5 > 0 && n % 11 > 0 && n % 3 > 0  ? `${n} is prime` : arr;
    //way 2
    return arr.length ? arr : `${n} is prime`;
}
console.log(divisors(12));//[2, 3, 4, 6]
console.log(divisors(3));//'3 is prime'

