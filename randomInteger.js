// ========================= random numbers from 10 to 99 =========================
//write a function to get random numbers from 10 to 99


function randomIntFrom10To99(){
    return Math.floor(Math.random() * 90 + 10);

}
console.log(randomIntFrom10To99());// 10 => 99

//********************************************

function randomIntFrom100To999(){
    return Math.floor(Math.random() * 900 + 100);

}
console.log(randomIntFrom100To999());//100 => 999

//*********************************************

function integerFrom0ToN(n){
    return Math.floor(Math.random() * n)
}
console.log(integerFrom0ToN(50));//0 => 50

//*******************************************

function integerFromMinToMax(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min
}
console.log(integerFromMinToMax(20, 80)); // 20 included => 80 included

//********************************************

function createPhoneNumber(){
    let str = '+1';
    for(let i = 1; i <= 10; i++){
        str += Math.floor(Math.random() * 10)
    }
    return str;
}
console.log(createPhoneNumber()); //  "+14916027280" random phone number from '+1' +  0 to 9