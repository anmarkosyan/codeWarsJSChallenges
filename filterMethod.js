//

//==================== Find numbers which are divisible by given number===========
//Complete the function which takes two arguments and returns all numbers which are
//divisible by the given divisor. First argument is an array of numbers and the second is the divisor.

const divisibleBy = (num, div) => {
    return num.filter(el => el % div === 0);

}
console.log(divisibleBy([1,2,3,4,5,6], 2));//[2, 4, 6]
console.log(divisibleBy([1,2,3,4,5,6], 3));//[3, 6]
console.log(divisibleBy([1], 4));//[]

//============================ Removing Elements ==============================
//Take an array and remove every second element from the array.
//Always keep the first element and start removing with the next element.

const removeEveryOther = arr => {
    return arr.filter((el, i) => i % 2 === 0);

}
console.log(removeEveryOther(['Hello', 'Goodbye', 'Hello Again']));//['Hello','Hello Again' ]
console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));//[1, 3, 5, 7, 9]

//=============================== Well of Ideas ==================
//In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'.
//If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'.
//If there are no good ideas, as is often the case, return 'Fail!'.

const well = x => {
    let arr = x.filter(el => el === 'good');
    return arr.length < 1 ? 'Fail!' :
           arr.length < 3 ? 'Publish!' : 'I smell a series!' ;

}
console.log(well(['bad', 'bad', 'bad']));//'Fail!'
console.log(well(['good', 'bad', 'bad', 'bad', 'bad']));//'Publish!'
console.log(well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good']));//'I smell a series!'














