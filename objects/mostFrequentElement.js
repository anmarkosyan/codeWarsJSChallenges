//============================= Наиболее часто встречающийся элемент массива ====================
/*
Напишите функцию mostFrequentElement, которая принимает массив arr в качестве аргумента и возвращает элемент,
встречающийся наибольшее число раз. Если таких элементов несколько, вернуть все элементы в виде массива.
 */


function mostFrequentElement(arr){
    //count of each number convert in object
    let obj = {};
    for(let num of arr){
        if(obj[num]) obj[num]++;
        else obj[num] = 1;
    }
    //obj convert array and find max value
    let res = Object.values(obj).sort((a, b) => b - a)[0]
    //check if there is a equal value and map for convert elements string to number
    return  Object.keys(obj).filter(el => obj[el] === res).map(el => +el)
}
console.log(mostFrequentElement([5, 2, 1, 5]));//[5]
console.log(mostFrequentElement([5, 7, 1, 1, 1, 8, 7, 3, 6, 7, 1]));//[1]
console.log(mostFrequentElement([5, 5, 5, 7, 7, 7]));//[5, 7]
console.log(mostFrequentElement([]));//[]