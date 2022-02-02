//================ convert digits to array ===============================

const arrayOfDigits = n => {
    let arr = [];
    let last = 0;
    do{
        last = n % 10;
        arr.unshift(last);
        n = Math.floor(n / 10);
    }while(n > 0)
    return arr;

}
console.log(arrayOfDigits(12345));//[1, 2, 3, 4, 5]

//==================== reverse array =====================

const reverse = arr => {
    let reverse = [];
    for(let el of arr){
        reverse.unshift(el);
    }
    return reverse

}
console.log(reverse([1, 2, 3]));//[3, 2, 1]
console.log(reverse(['hi', null, true, 12, 5]));//[ 5, 12, true, null, 'hi' ]