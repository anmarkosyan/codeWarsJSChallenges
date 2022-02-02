//================================ loop statement --for..in and for..of ====================

//Coding in function giveMeFive, function accept 1 parameter:obj, it's an object.
//
// You need to the traverse the obj, if the length of the object key equals to 5,
// then push the key value to the array (you need to define the array by yourself,
// this time I won't help you). Additionally push the value to the array as well,
// if the length of the value is equal to 5.
// Return the five after works finished.
// You should use for..in in your code

function giveMeFive(obj){
    //#1 long solution
    // let arr = [];
    // let arr1 = [];
    //
    // for(let key in obj){
    //     arr.push(key, obj[key])
    // }
    // for(let el of arr){
    //     if(el.length === 5) arr1.push(el)
    // }
    // return arr1;

    //#2 short way
    let five = [];
    for(let key in obj){
        if(key.length === 5) five.push(key);
        if(obj[key].length === 5) five.push(obj[key])
    }
    return five

}
console.log(giveMeFive({Our:"earth",is:"a",beautyful:"world"}));//["earth","world"]
console.log(giveMeFive({Ihave:"enough", money:"to",buy:"a",car:"model"}));//["Ihave","money","model"]
console.log(giveMeFive({Pears:"than",apple:"sweet"}));//["Pears","apple","sweet"]