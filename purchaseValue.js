// ======================= purchase value ==========================
//Write a function purchaseValue that takes a values array containing
//the prices and name of each item purchased as an argument and returns the total purchase price.



const purchaseValue = values =>{
    let sum = 0;
    for(let elem of values){
        sum += parseFloat(elem)
    }
    return sum;
}
console.log(purchaseValue(['1.31 bread', '7.96 cabbage', '2.10 candies', '0.84 salad']));// 12.21