//========================== Valid Parentheses =====================================
/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

1. Open brackets must be closed by the same type of brackets.
2. Open brackets must be closed in the correct order.
 */


const isValid = str => {
   let map = {'(': ')', '[': ']', '{': '}'};
   let stack = [];

   if(str.length % 2 !== 0) return false;

    for(let el of str){
        if(map[el]){
            stack.push(el)
         }else {
            let close =  stack.pop();
         if(el !== map[close]) return false
         }
    }
    return stack.length === 0;
}
console.log(isValid("()"));//true
console.log(isValid("()[]{}"));//true
console.log(isValid("{[]}"));//true
console.log(isValid("{{}[][[[]]]}"));//true
console.log(isValid("([)]"));//false
console.log(isValid("[)]"));//false
console.log(isValid("(["));//false
