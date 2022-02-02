/*
* Write a function that reverses characters in (possibly nested) parentheses in the input string.
Input strings will always be well-formed with matching ()s.
* */

const reverseInParentheses = function (str) {
  if (str.match(/\([a-z]*\)/)) {
    return  reverseInParentheses(str.replace(/\([a-z]*\)/, Array.from(str.match(/\([a-z]*\)/)[0].replace(/\(|\)/g,'')).reverse().join('')));
  }
  return str
};



console.log(reverseInParentheses("(bar)")); //'rab'
console.log(reverseInParentheses("foo(bar)baz")); //'foorabbaz'
console.log(reverseInParentheses("foo(bar)baz(blim)")); //'foorabbazmilb'
console.log(reverseInParentheses("foo(bar(baz))blim")); //foo(barzab)blim => foobazrabblim
