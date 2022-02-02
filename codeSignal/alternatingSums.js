'use strict';
/*
* You are given an array of positive integers - the weights of the people.
*  Return an array of two integers, where the first element is the total weight of team 1,
* and the second element is the total weight of team 2 after the division is complete.
* */

function alternatingSums(a) {
  const { sum1, sum2 } = a.reduce(
    (obj, num, i) => {
      i % 2 === 0 ? (obj.sum1 += num) : (obj.sum2 += num);
      return obj;
    },
    { sum1: 0, sum2: 0 }
  );

  return [sum1, sum2];
}
console.log(alternatingSums([50, 60, 60, 45, 70]));//[ 180, 105 ]

