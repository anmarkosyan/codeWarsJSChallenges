function addBorder(arr) {
  //1way
  // const copyArr = arr;
  // const length = copyArr.length && copyArr[0].length;
  // copyArr.push("*".repeat(length));
  // copyArr.unshift("*".repeat(length));
  //
  // return copyArr.map((el) => "*" + el + "*");
  //2way
  const length = arr[0].length + 2;

  return [
    "*".repeat(length),
    ...arr.map((el) => `*${el}*`),
    "*".repeat(length),
  ];
}

console.log(addBorder(["abc", "ded"])); //[ '*****', '*abc*', '*ded*', '*****' ]

