//================ descending Order =========================
//Your task is to make a function that can take any non-negative integer as an argument
//and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

function descendingOrder(n){
    let str = n + '';
    return parseInt([...str].sort((a, b) => b - a).join(''))

}
console.log(descendingOrder(0));//0
console.log(descendingOrder(1));//1
console.log(descendingOrder(23124561));//65432211