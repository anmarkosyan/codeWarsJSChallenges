//======================= my languages ======================
/*
You are given a dictionary/hash/object containing some languages and your test results in
the given languages. Return the list of languages where your test score is at least 60,
in descending order of the results.

Note: the scores will always be unique (so no duplicate values)
 */


function myLanguages(res) {
    //#1
    // let arr = [];
    // Object.entries(res).sort((a, b) => b[1] - a[1]).map(el=> {
    //     if(el[1] >= 60){
    //         arr.push(el[0])
    //     }
    // })
    //
    // return arr;

    //#2
     return Object.keys(res).filter(num => res[num] >= 60).sort((a, b) => res[b] - res[a])


}
console.log(myLanguages({"Java" : 10, "Ruby" : 80, "Python" : 65}));// ["Ruby", "Python"]
console.log(myLanguages({"Hindi" : 60, "Greek" : 71, "Dutch" : 93}));//["Dutch", "Greek", "Hindi"]