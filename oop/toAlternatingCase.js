String.prototype.toAlternatingCase = function () {
  //1way
  let newStr = "";
  for (const char of this) {
    /[a-z]/g.test(char)
      ? (newStr += char.toUpperCase())
      : /[A-Z]/g.test(char)
      ? (newStr += char.toLowerCase())
      : (newStr += char);
  }

  return newStr;

  //2way
  // return this.replace(/[A-Za-z]/g, (el) =>
  //   el === el.toLowerCase() ? el.toUpperCase() : el.toLowerCase()
  // );
};

console.log("hello world".toAlternatingCase());
console.log("hello world".toAlternatingCase() === "HELLO WORLD");
console.log("HELLO WORLD".toAlternatingCase() === "hello world");
console.log("hello WORLD".toAlternatingCase() === "HELLO world");
console.log("HeLLo WoRLD".toAlternatingCase() === "hEllO wOrld");
console.log("12345".toAlternatingCase() === "12345"); // Non-alphabetical characters are unaffected
console.log("1a2b3c4d5e".toAlternatingCase() === "1A2B3C4D5E");
console.log(
  "String.prototype.toAlternatingCase".toAlternatingCase() ===
    "sTRING.PROTOTYPE.TOaLTERNATINGcASE"
);
