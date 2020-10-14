//======================
//Coding in function padIt, function accept 2 parameters:
// str, it's a string representing the string to pad, we need pad some "*" at left side or right side of str
// n, it's a number, how many times to pad the string.
// Behaviour
// You need to write a loop statement within the function that loops n times.
// Each time through the loop it will add one * to str, alternating on which side it is padded:
// the first time will add a * to the left side of str, the second time will add a * to the right side, and so on.

function padIt(str,n){
    // let i = 0;
    // while(i < n){
    //     if(i % 2===0){
    //         str = `*${str}`
    //     }else {
    //         str = `${str}*`
    //     }
    //     i++;
    // }
    // return str;
    //#2 loop do ... while
    let res = str
    do {
       res =  (n % 2 === 0) ? res + "*" : "*" + res;
        n--;
    } while (n);
    return res;

}
console.log(padIt("a",1));//"*a"
console.log(padIt("a",2));//"*a*"
console.log(padIt("a",3));//"**a*"
console.log(padIt("a",4));//"**a**"
console.log(padIt("a",5));//"***a**"