//======================== The most common letter ==============================
/*
Find the most common letter (not space) in the string(always lowercase and 2 < words)
and replace it with the letter.
If such letters are two or more, choose the one that appears in the string( earlier.
 */

function replaceCommon(str, letter) {
  //delete all spaces
  //let newStr = str.replace(/\s/g, '');
  //count a letters
  let obj = {};
  let maxVal = 0;
  let maxKey = "";
  for (let char of str) {
    if (char !== " " && obj[char]) obj[char]++;
    else obj[char] = 1;
  }
  //find max value and max key
  for (let key in obj) {
    if (obj[key] > maxVal) {
      maxVal = obj[key];
      maxKey = key;
    }
  }
  //replace
  return str.replace(new RegExp(maxKey, "g"), letter);
}
console.log(replaceCommon("my mom loves me as never did", "t")); //'ty tot loves te as never did'
console.log(replaceCommon("real talk bro", "n")); //'neal talk bno'
console.log(replaceCommon("great job go ahead", "k")); //'grekt job go khekd'
console.log(replaceCommon("yyyaaa twwww ttt uuu ccca", "p")); //yyyppp twwww ttt uuu cccp
console.log(replaceCommon("hi fix Deck grace doll on", "o")); //'ho fox deck grace doll on'
console.log(
  replaceCommon(
    "hi enrich bedeck sleep grace furbish run gushy garnish furbish at",
    "h"
  )
); //'hi hnrich bhdhck slhhp grach furbish run gussy garnish furbish at'
console.log(replaceCommon("hi furbish beautify dress grace furbish deck", "c")); //'hc furbcsh beautcfy dress grace furbcsh deck'
console.log(replaceCommon("hi beautify graep gussy garnish sleep", "p")); //'hi bpautify gracp gussy garnish slppp'
