//=================== count Positives Sum Negatives ====================
//
//Return an array, where the first element is the count of positives numbers
// and the second element is sum of negative numbers.
// If the input array is empty or null, return an empty array.

const countPositivesSumNegatives = arr => {
    if (arr === null || arr.length === 0) return [];
    let count = 0;
    let sum = 0;
    for (let el of arr){
        if (el > 0) count++;
        else sum = sum + el
    }
    return [count, sum]

}
console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));//[10, -65]
console.log(countPositivesSumNegatives([]));//[]
