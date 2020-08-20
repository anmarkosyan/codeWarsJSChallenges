// ===================== reverse Number ===========================
//write a function to reverse a number without using arr and sting methods
// and use DO WHILE


function reverseNum(n){
    let rev = 0;
    do{
        rev = rev * 10;//0
        rev = rev + n % 10;//0 + 3= 3
        n = n - n % 10;//123 - 3 = 120
        n = n / 10;// 120 / 10= 12

    }while(n > 0)
    return rev;
}
console.log(reverseNum(123));//321
console.log(reverseNum(100));//1