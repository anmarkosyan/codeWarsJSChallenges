//https://www.codewars.com/kata/580dda86c40fa6c45f00028a/train/javascript
//========================= Sum of Odd Cubed Numbers =====================
//Find the sum of the odd numbers within an array, after cubing the initial integers.
//The function should return undefined/None/nil/NULL if any of the values aren't numbers.


const cubeOdd = arr => {
    let sum = 0;
    for(let elem of arr){
        if(typeof elem !== 'number'){
            return undefined;
            break;
        }else if(typeof elem === 'number' && elem % 2){
            sum += elem ** 3;
        }
    }
    return sum;
}
console.log(cubeOdd([1, 2, 3, 4]));// 28
console.log(cubeOdd(['1', 2, '3', 4]));// undefined