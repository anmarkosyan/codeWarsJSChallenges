//================= =============== change Digits Order ===========================
//Дано натуральное четырехзначное число. Найдите минимальное натуральное четырехзначное число,
// состоящее из тех же цифр, что и заданное. Заметим, что четырехзначные числа не могут
// начинаться с нуля.
// Напишите функцию с именем changeDigitsOrder, которая принимает четырехзначное число
// num в качестве аргумента и возвращает минимальное четырехзначное число, состоящее из тех же цифр,
// что и заданное число.


const changeDigitsOrder = num => {
    let arr = (num+'').split('').map(el => +el).sort((a, b) => a - b);
    let first = 0;
    let indFirst = 0;

    for(let i = 0; i < arr.length; i++){
        if(arr[i] > 0){
           first = arr[i];
           indFirst = i;
            break;
        }
    }

    let res = first + arr.slice(0,indFirst) + arr.slice(indFirst+1)
    return parseInt(res.replace(/,/g, ''))
}
console.log(changeDigitsOrder(1513));//1135
console.log(changeDigitsOrder(1500));//1005