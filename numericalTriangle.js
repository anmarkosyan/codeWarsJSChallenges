//============= numeric triangle ==================
//"1
//2 2
//3 3 3
//4 4 4 4
//5 5 5 5 5"

function numericalTriangle(n){
    let str = '';
    for(let i = 1; i <= n; i++){
        for(let j = 1; j <= i; j++){
            if(j < i) str += i + ' ';
            else str += i;
        }
        if(i < n) str += '\n';
    }
    return str;
}
console.log(numericalTriangle(5));

// or if we want do the same using stars '*'
//"*
//**
//***
//****"
function starTriangle1(n){
    let str = '';
    for(let i = 1; i <= n; i++){
        str += '*'.repeat(i);
        if(i < n) str += '\n';

    }
    return str;
}
console.log(starTriangle1(4));

//or opposite way
//"****
//***
//**
//*"

function starTriangle2(n){
    let str = '';
    for(let i = n; i >= 1; i--){
        str += '*'.repeat(i);
        if(i > 1) str+= '\n';

    }
    return str
}
console.log(starTriangle2(4));

// or like this
//  *
// ***
//*****

function drawTriangle2 (n){
    let str = '';
    for (let i = 1; i <= n; i += 2){
        str = str + ' '.repeat((n - i) / 2) + '*'.repeat(i);
        if (i < n) {
            str = str + '\n';
        }
    }
    return str;
}
console.log(drawTriangle2(5));

//================== Number-Star ladder =========
//1
//1*2
//1**3

function pattern(n){
    let str = '1';
    for(let i = 2; i <= n; i++){
        str += '\n' + 1 + '*'.repeat(i - 1) + i;
    }
    return str;
}
console.log(pattern(3));
console.log(pattern(10));

//====================
// a
// aa
// aaa
// aaaa
// aaaaa


function fiveLine(s){
    s = s.trim();
    return `${s}\n${s.repeat(2)}\n${s.repeat(3)}\n${s.repeat(4)}\n${s.repeat(5)}`

}
console.log(fiveLine("  a"));//"a\naa\naaa\naaaa\naaaaa"