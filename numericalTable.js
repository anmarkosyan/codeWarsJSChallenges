//==================== numerical table ===============================
//"1 1 1 1 1
// 2 2 2 2 2
// 3 3 3 3 3
// 4 4 4 4 4"

function numericalTable(n){
    let str = '';
    for(let i = 1; i <= n; i++){
        for(let j = 1; j <= 5; j++){
            if(j < 5) str = str + i + ' ';
            else str = str + i;
        }
        if(i <= n - 1)
            str = str + '\n'
    }
    return str;

}
console.log(numericalTable(4));
console.log(numericalTable(1));//'1 1 1 1 1'
console.log(numericalTable(5));