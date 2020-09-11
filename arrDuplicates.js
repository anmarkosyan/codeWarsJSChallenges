//
// ====================== return all duplicate numbers =======================

const arr = [-1, 2, 0, 2, 7, 7, 7, -1, 0, 8, 3, 4];//[-1, 2, 0, 2, 7, 7, 7, -1, 0]
const res = arr.filter(el => arr.indexOf(el) !== arr.lastIndexOf(el));
console.log(res);

//============= return all duplicates numbers and its last position =========

const arr1 = [-1, 2, 0, 2, 7, 7, 7, -1, 0, 8, 3, 4];//[ 2, 7, -1, 0 ]
const res1 = arr1.filter((el, i) => i !== arr.indexOf(el) && i === arr.lastIndexOf(el));
console.log(res1);

//================== return all numbers only one time || delete duplicates ======

const arr2 = [-1, 2, 0, 2, 7, 7, 7, -1, 0, 8, 3, 4];//[-1, 2, 0, 7, 8, 3, 4]
const res2 = arr2.filter((el, i) => i === arr.indexOf(el));
console.log(res2);


//================= return first duplicates numbers ================

const arr3 = [-1, 2, 0, 2, 7, 7, 7, -1, 0, 8, 3, 4];//[ -1, 2, 0, 7 ]
const res3 = arr3.filter((el, i) => i === arr3.indexOf(el) && i !== arr3.lastIndexOf(el));
console.log(res3);


//===================== return letters only one time and sorted it,delete duplicates =========================
//Take 2 strings s1 and s2 including only letters from ato z.
//Return a new sorted string, the longest possible, containing distinct letters,
// each taken only once - coming from s1 or s2.//conde wars//

const longest = (str1, str2) => {
    let res = (str1 + str2).split('');
    return res.filter((el, i) => i === res.indexOf(el)).sort().join('');
}
console.log(longest("aretheyhere", "yestheyarehere"));//"aehrsty"

