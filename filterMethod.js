//return each elements one time, without duplicates
//delete duplicates

let arr = [1, 2, 3, 1, 2, 3, 4, 1, 2, 3];//[1, 2, 3, 4]
let res = arr.filter((el, i) => i === arr.indexOf(el));
console.log(res);

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
console.log(well(['good', 'bad', 'bad', 'good', 'bad']));//'Publish!'
console.log(well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good']));//'I smell a series!'

//============================ Find the lucky numbers ===================
//Write a function filterLucky/filter_lucky() that accepts a list of
//integers and filters the list to only include the elements that contain the digit 7.

const filterLucky = arr => {
    return arr.filter(num => (num + '').includes('7'));

}
console.log(filterLucky([1,2,3,4,5,6,7,68,69,70,15,17]));//[7,70,17]
console.log(filterLucky([71,9907,69]));//[71, 9907]


//======================= Array diff =====================
//Your goal in this kata is to implement a difference function, which subtracts one list
//from another and returns the result.
// It should remove all values from list a, which are present in list b.

const diffArray = (a, b) => {
    //1 way
    // let arr = a.concat(b)//[1, 2, 3, 4, 2, 3]
    // let arr1 = arr.filter((el) => arr.indexOf(el) === arr.lastIndexOf(el));
    // return arr1;
    //2 way
    return a.filter(el => !b.includes(el));

}
console.log(diffArray([1, 2, 3, 4], [2, 3]));//[1, 4]

























