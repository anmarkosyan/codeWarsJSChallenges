//================== Fruit string calculator ============
//
//Given a string of words and numbers. Extract the expression including:

// 1. the operator: either addition or subtraction
// 2. the two numbers that we are operating on

const calculate = str => {
    //#1
    // let arr = str.split(' ');
    // let num = [];
    // for(let el of arr){
    //     if(parseInt(el)){
    //         num.push(+el);
    //     }
    // }
    //#2
    let num = str.split(' ').filter(el => parseInt(el));
    return str.includes('loses') ? +num[0] - +num[1] : +num[0] + +num[1];

}
console.log(calculate('Panda has 48 apples and loses 4'));//44
console.log(calculate('Jerry has 34 apples and gains 6'));//40