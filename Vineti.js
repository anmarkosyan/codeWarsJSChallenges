//You have a list of numbers from one to one million and there is a missing number. How would you find the missing number?

const missNum = arr => {
    for(let i = 0; i < arr.length - 1; i++){
        if(arr[i] + 1 !== arr[i + 1]){
            return arr[i] + 1;
        }
    }
    return null;
}
console.log(missNum([1, 2, 3, 4, 5, 6, 7,8, 9, 10, 11, 13]));

//===================How would you determine if a number is a power of two? *

const powOfTwo = num => {
    // while(num % 2 === 0 && num > 1) {
    //     num /= 2;
    // }
    // return num === 1
    return Math.log2(num) % 1 === 0
}
console.log(powOfTwo(122));//

//===================How would you remove duplicates from a list? *
const removeDup = arr => {
    //return arr.filter((el, i) => i === arr.indexOf(el));
    let uniq = [];
    for(let i = 0; i < arr.length; i++){
        if(i === arr.indexOf(arr[i])){
            uniq.push(arr[i])
        }
    }
    return uniq;
}
console.log(removeDup([1, 2, 3, 1, 3, 6, 7, 1, 9]));


//================How would you reverse a string? *
const reverse = str => {
    //return str.split("").reverse().join("")
    let rev = '';
    for(let el of str){
        rev = el + rev
    }
    return rev;
}
console.log(reverse('abrakatabra'));//'arbatakarba'

