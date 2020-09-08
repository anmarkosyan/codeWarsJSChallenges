// =============================== max min ========================

//=================== MIN ==========
const min = arr => {
    let minimum = arr[0];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < minimum ) minimum = arr[i];
    }
  return minimum;

    //or simply Math.min(...arr);
}

console.log(min([1, 5, 3, 8])); // 1

//======================= MAX ===========
const max = arr => {
    let minimum = arr[0];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > minimum) minimum = arr[i];
    }
    return minimum;

    // or simply Math.max(...arr);
}
console.log(max([1, 5, 3, 8])) // 8

//================== diff max- min in array ============
const diffInArray = arr => {
    let diff = [];
    for (let elem of arr){
       diff.push(max(elem) - min(elem));

    }
return diff;
}
console.log(diffInArray([[2, 5, 8, 1], [3, 6, 7], [4, 9, 2]]));//[7, 4, 7]

//============== longest word ===========
//we should return first longest word by alphabet

const longestWord = text => {
    let arr = text.toLowerCase().split(' ');
    let len = [];
    let long = [];
    for(let word of arr){
        len.push(word.length);
    }
    let max = Math.max(...len);
    for(let elem of arr){
        if(elem.length === max) long.push(elem) ;
    }
    return min(long);

}
console.log(longestWord('hi my name is bnushi so what is your name my friend anushi '));// anushi

//==================== replace first max and min ========================

const changeMaxAndMin = arr => {
    let min = arr[0];
    let max = arr[0];
    let minInd = 0;
    let maxInd = 0;
    for(let i = 1; i < arr.length; i++){
        if(arr[i] < min){
            min = arr[i];
            minInd = i;
        }else if(arr[i] > max){
            max = arr[i];
            maxInd = i;
        }
    }
    arr[minInd] = max;
    arr[maxInd] = min;
    return arr;
}
console.log(changeMaxAndMin([3, 4, 8, 4, 1, 2, 1]));// [3, 4, 1, 4, 8, 2, 1]

//================== largest word in array ========================

const theLongestWord = arr => {
    let maxLength = arr[0].length,  maxWord = arr[0];
    for(let i = 1; i < arr.length; i++){
        if(arr[i].length > maxLength){
            maxLength = arr[i].length;
            maxWord = arr[i];
        }
    }
    return maxWord;
}
console.log(theLongestWord(["a", "big", "elephant"])); //'elephant'
console.log(theLongestWord(["test"]));//'test'

//============== shortest and largest word in array =====================

const words = arr => {
    let maxLength = arr[0].length;
    let minLength = arr[0].length;
    let maxWord = arr[0];
    let minWord = arr[0];
    for(let i = 1; i < arr.length; i++){
       if(arr[i].length < minLength){
           minLength = arr[i].length;
           minWord = arr[i];
       }else if(arr[i].length > maxLength){
           maxLength = arr[i].length;
           maxWord = arr[i];
       }
    }
    return [minWord, maxWord];
}
console.log(words(["a", "big", "elephant"]));//[ 'a', 'elephant' ]

//=============================== max abs value ================

const maxAbsValue = arr => {
    let maxAbs = Math.abs(arr[0]);
    let maxWord = arr[0];
    for(let i = 1; i < arr.length; i++){
        if(Math.abs(arr[i]) > maxAbs){
            maxAbs = Math.abs(arr[i]);
            maxWord = arr[i];
        }
    }
return maxWord
}
console.log(maxAbsValue([3, 7, -8, 1]));// -8
console.log(maxAbsValue([-11, 6, 12]));//12

//====================== max Even Number ===================

const maxEven = arr => {
   let even = [];
   for(let num of arr){
       if(num % 2 === 0){
           even.push(num);
       }
   }
   let max = even[0];
   for(let i = 1; i < even.length; i++){
       if(even[i] > max){
           max = even[i];
       }
   }
   return max;
}
console.log(maxEven([11, 12, 3, 35]));//12
console.log(maxEven([29,18]));//18
console.log(maxEven( [17,13,9,15,17]));//undefined

//===================== min Odd number ===================

const minOdd = arr => {
    let odd = [];
    for(let num of arr){
        if(num % 2 !== 0){
            odd.push(num);
        }
    }
    let min = odd[0];
    for(let i = 1; i < odd.length; i++){
        if(odd[i] < min){
            min = odd[i];
        }
    }
    return min;

}
console.log(minOdd([2, 3, 4, 8, 17, 18]));//3
console.log(minOdd([3, 3]));//3
console.log(minOdd([2, 4]));//undefined

//====================== most Expensive Car ==================


const mostExpensiveCar = arr => {
    let maxPrice = arr[0][1];
    let bestCar = arr[0][0];
    for(let i = 1; i < arr.length; i++){
        if(arr[i][1] > maxPrice){
            maxPrice = arr[i][1];
            bestCar = arr[i][0]
        }

    }
    return  bestCar;
}
console.log(mostExpensiveCar([["Honda", 18500], ["Toyota", 21200], ["BMW", 19900]]));//'Toyota'

//============================ largest Number Of Mushrooms ==========================

const largestNumberOfMushrooms = arr => {
    let number = arr[0][1];
    let name = arr[0][0];
    for(let i = 1; i < arr.length; i++){
        if(arr[i][1] > number){
            number = arr[i][1];
            name = arr[i][0];
        }
    }
    return `${name}: ${number}`;

}
console.log(largestNumberOfMushrooms([["Maria", 15], ["Anna", 21], ["Ivan", 32]]));//'Ivan: 32'

//========================== the Coldest Day =============================
//find first cold day
const theColdestDay = arr => {
    let min = arr[0];
    let minInd = 0;
    for(let i = 1; i < arr.length; i++){
        if(arr[i] < min){
            min = arr[i];
            minInd = i;
        }
    }
    return `April ${minInd + 1} was the coldest day of the month: it was ${min} degrees.`;

}
console.log(theColdestDay([12, 10, 20, 23]));//"April 2 was the coldest day of the month: it was 10 degrees."

//find last cold day

const theLastColdDay = arr => {
    let min = arr[arr.length -1];
    let minInd = arr.length;
    for(let i  = arr.length - 1; i >= 0; i--){
        if(arr[i] < min){
            min = arr[i];
            minInd = i;
            console.log(arr.length )
        }
    }
    return `April ${minInd + 1} was the coldest day of the month: it was ${min} degrees.`;
}
console.log(theLastColdDay([15, 10, 20, 23, 10, 14, 13, 10]));//"April 9 was the coldest day of the month: it was 10 degrees."


































