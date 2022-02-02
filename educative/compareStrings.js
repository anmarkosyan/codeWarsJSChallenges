const backspaceCompare = function (str1, str2) {
  const arr1 = [];
  for (const char of str1) {
    if (char !== "#") {
      arr1.push(char);
    } else arr1.pop();
  }

  const arr2 = [];
  for (const char of str2) {
    if (char !== "#") {
      arr2.push(char);
    } else arr2.pop();
  }
  return arr1.join("") === arr2.join("");
};
console.log(backspaceCompare('ac#de##', 'ac#de#'));//false
console.log(backspaceCompare("xzz#", "xy#z")); //true
console.log(backspaceCompare("xywrrmp", "xywrrmu#p")); //true
console.log(backspaceCompare("xp#", "xyz##")); //true
console.log(backspaceCompare("ac#b#er#", "aec#")); // true acber => ae
