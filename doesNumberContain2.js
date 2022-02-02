//===================== does number contain 2 =================
// return true if number contain 2, false if not
//use do while loop

function doesNumberContain2(n){
    let num = true;
    do{
        if(n % 10 === 2)
            return num;
        n = Math.floor(n / 10);
    }while(n > 0)
    return !num;
}
console.log(doesNumberContain2(1234));//true
console.log(doesNumberContain2(1357));//false
