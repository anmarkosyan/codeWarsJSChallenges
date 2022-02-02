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

//========================
//123 // [3, 2, 1]
function arrayOfDigits(n){
    let arr = [];
    let last;
    do{
        last = n % 10;
        arr.push(last);
        n = Math.floor(n / 10)
    }while(n > 0)
    return arr;
}
console.log(arrayOfDigits(123));//[3, 2, 1]
console.log(arrayOfDigits(12345));//[5, 4, 3, 2, 1]

//=================== reverse array ===============

const reverse1 = arr => {
    let res = [];
    for(let el of arr){
        res.unshift(el);
    }
    return res;
}
console.log(reverse1([1, 2, 3, 4, 5]));//[5, 4, 3, 2, 1]

//=============== reverse nums range of 1 from n ===============

const reverse2 = n => {
    //1 way
    // let res = [];
    // do{
    //     res.push(n);
    //     n--;
    // }while (n >0);
    // return res;
    //2 way
    let res1 = [];
    let i = 1;
    do{
        res1.unshift(i);
        i++;
    }while(i <= n);
    return res1;

}
console.log(reverse2(5));//[5, 4, 3, 2, 1]

//=============== reverse task without created new Array ===============

const arr = [1, 2, 3, 4, 5, 6];//[6, 5, 4, 3, 2, 1]
for(let i = 0; i < arr.length / 2; i++){
    let temp = arr[i];
    arr[i] = arr[arr.length -1 - i];
    arr[arr.length -1 -i] = temp;
}
console.log(arr)


