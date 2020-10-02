//==================== add length ===============================
//
//Your task is to write a function that takes a String and returns
//an Array/list with the length of each word added to each element .
// Note: String will have at least one element; words will always be separated by a space.


const addLength = str => {
    //#1 using loops time: 2 step
    // let arr = str.split(' ');
    // let newArr = [];
    // for(let i = 0; i < arr.length; i++){
    //     let count = 0;
    //     let j = 0;
    //     while(j < arr[i].length) {
    //         count++;
    //         j++;
    //     }
    //     newArr.push(arr[i] + ' ' + count) ;
    // }
    // return newArr;

    //#2 using methods
    return str.split(' ').map(el => el +' ' + el.length);


}
console.log(addLength('apple ban'));//['apple 5', 'ban 3']
console.log(addLength('we will win'))//['we 2', 'will 4', 'win 3']