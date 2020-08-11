//https://www.codewars.com/kata/58e0bd6a79716b7fcf0013b1/train/javascript
//=============================== Calculate Two People's Individual Ages======
//Create a function that takes in the sum and age difference of two people,
// calculates their individual ages, and returns a pair of values (oldest age first)
// if those exist or null/None if:
//sum < 0
// difference < 0
// Either of the calculated ages come out to be negative

function getAges(sum,diff){
    let oldest = (sum + diff) / 2;
    let young = (sum - diff) / 2;
    return (sum >= 0 &&  diff >= 0 && oldest >= 0 && young >= 0) ?  [oldest, young] : null

}

console.log(getAges(24,4));//[14, 10]
console.log(getAges(63,-14));//null