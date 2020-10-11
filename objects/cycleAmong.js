//============================= Alternating between three values =========================
/*
Suppose a variable x can have only three possible different values a, b and c,
and you wish to assign to x the value other than its current one,
and you wish your code to be independent of the values of a, b and c.

What is the most efficient way to cycle among three values? Write a function f so that it satisfies
 */

const cycleAmong = (x, cc) => {
    if(cc.a === x) return cc.b;
    if(cc.b === x) return cc.c;
    if(cc.c === x) return cc.a;
}
console.log(cycleAmong(3, { a:3, b:4, c:5 }));//4
console.log(cycleAmong(4, { a:3, b:4, c:5 }));//5
console.log(cycleAmong(5, { a:3, b:4, c:5 }));//3