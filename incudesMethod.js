//===================== check if array contains min number + 1========

const checkMinPlusOne = arr => {
    let min = Math.min(...arr);
    return arr.includes(min + 1);

}
console.log(checkMinPlusOne([1, 3, 4, 5]));//false min=1 1+1=2 2is not included
console.log(checkMinPlusOne([10, 3, 4, 5, 7]));//true

//======================= check if array contains fist letter of word ============

const checkFirstLetter = (arr, word) => {
    let firstLetter = word[0];
    return arr.includes(firstLetter);

}
console.log(checkFirstLetter(['a', 'b', 'c'], 'banana'));//true
console.log(checkFirstLetter(['a', 'b', 'c'], 'peach'));//false






