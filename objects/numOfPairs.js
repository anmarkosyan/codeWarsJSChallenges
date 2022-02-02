//========================== Pair of gloves ================
/*
Winter is coming, you must prepare your ski holidays.
The objective of this kata is to determine the number of pair of gloves you can constitute from the gloves you have in your drawer.
📍 A pair of gloves is constituted of two gloves of the same color.
📍 You are given an array containing the color of each glove.
📍 You must return the number of pair you can constitute.
📍 You must not change the input array.

//exp:
let myGloves = ['red','green','red','blue','blue'];
numberOfPairs(myGloves) == 2;// red and blue

let redGloves = ['red','red','red','red','red','red'];
numberOfPairs(redGloves) == 3; // 3 red pairs
*/

const numOfPairs = function (gloves) {
  const arr = [...gloves].sort();
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      count++;
      i++;
    }
  }
  return count;
};
console.log(numOfPairs(["red", "green", "red", "blue", "blue"])); //2 => 2 pair of gloves
console.log(numOfPairs(["red", "blue", "green"])); //0
console.log(numOfPairs(["red", "red", "red", "red", "red", "red"])); //3  => 3 pairs
