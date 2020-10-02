//============== product ===========================================
//
//Count the number of exclamation marks and question marks, return the product.

const product = str => {
    //#1 using loop, this is faster than using methods
    // let countA = 0;
    // let countB = 0;
    // for(let el of str){
    //     if(el === '!') countA++;
    //     else if(el === '?') countB++;
    // }
    // return countA * countB;

    //#2 using split method;
    let a = str.split('!').length - 1;
    let b = str.split('?').length - 1;
    return a * b;

}
console.log(product("!!"));//0
console.log(product("!???"));//3 => 3*1=3
console.log(product("!!!??"));// => 3*2=6