//https://www.codewars.com/kata/5b4e779c578c6a898e0005c5/train/javascript

//=========================== draw stairs =======================================
//Given a number n, draw stairs using the letter "I", n tall and n wide, with the tallest in the top left.
//'I
//  I
//   I'


function drawStairs(n){
    let str = '';
    for(let i = 0; i < n; i++){
        str = str + ' '.repeat(i) + 'I';
        if(i < n - 1)  str = str + '\n';
    }
    return str;
}

console.log(drawStairs(3));
