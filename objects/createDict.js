//=========================== Dictionary from two lists ===============================================
//
//There are two lists of different length. The first one consists of keys, the second one consists of values.
//Write a function createDict(keys, values) that returns a dictionary created from keys and values.
//If there are not enough values, the rest of keys should have a None (JS null)value.
//If there not enough keys, just ignore the rest of values.
//keys = ['a', 'b', 'c', 'd']
// values = [1, 2, 3]
// createDict(keys, values) // returns {'a': 1, 'b': 2, 'c': 3, 'd': null}


const createDict = (keys, values) => {
    let obj = {};
    for(let i = 0; i < keys.length; i++){
        obj[keys[i]] = i < values.length ? values[i] : null;
    }
    return obj;
}
console.log(createDict(['a', 'b', 'c'], [1, 2, 3]));//{'a': 1, 'b': 2, 'c': 3}
console.log(createDict(['a', 'b', 'c'], [1, 2, 3, 4]))//{ a: 1, b: 2, c: 3 }
console.log(createDict(['a', 'b', 'c','d'], [1, 2, 3]));//{'a': 1, 'b': 2, 'c': 3, 'd':null}
console.log(createDict(['a', 'b', 'c','d'], [false, '', [], 0]));//{'a': false, 'b': '', 'c': [], 'd': 0}