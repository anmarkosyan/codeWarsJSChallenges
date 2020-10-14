//========================== Roman to Integer =====================================
/*
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, 2 is written as II in Roman numeral, just two one's added together.
12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right.
However, the numeral for four is not IIII. Instead, the number four is written as IV.
Because the one is before the five we subtract it making four. The same principle applies to the number nine,
which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9.
X can be placed before L (50) and C (100) to make 40 and 90.
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer.
 */

const romanToInt = function(s) {
    let map = {I: 1,  V: 5,  X: 10,  L: 50,  C: 100,  D: 500,  M: 1000};
    let sum = 0;
    //#1 solution
    // let curr;
    // let currVal;
    // let next;
    // let nextVal;
    // for(let i = 0; i < s.length; i++) {
    //     curr = s[i];
    //     currVal = map[curr];
    //
    //     next = s[i + 1];
    //     nextVal = map[next]
    //
    //     if(currVal >= nextVal) {
    //         sum += currVal;
    //     }else if(currVal < nextVal){
    //         sum -= currVal
    //     }else if(currVal && !nextVal){
    //         sum += currVal
    //     }
    // }
    // return  sum

    //#2 solution more fast solution

    for(let i = 0; i < s.length; i++){
        if(map[s[i]] < map[s[i + 1]]){
            sum -= map[s[i]]

        }else sum += map[s[i]]

    }
    return sum

};
console.log(romanToInt('III'));//3
console.log(romanToInt('IV'));//4
console.log(romanToInt('IX'));//9
console.log(romanToInt('XL'));//40
console.log(romanToInt('XC'));//90
console.log(romanToInt('CD'));//400
console.log(romanToInt('CM'));//900
console.log(romanToInt("LVIII"));//58 ->L = 50, V= 5, III = 3.
console.log(romanToInt("MCMXCIV"));// 1994 ->M = 1000, CM = 900, XC = 90 and IV = 4.

























