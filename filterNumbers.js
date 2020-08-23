//========================== filter numbers ===========================
//write a function to filter numbers within a given string,
//and return that numbers in the order they occur.



function filterNumbers(str) {
    let num = '';
    for (let char of str) {
        if (!isNaN(char)) {
            num += char;
        }
    }
    return +num;
}
console.log(filterNumbers('1asd34gh7xex2'));// 13472