//========================= back·ro·nym ========================
//
//Complete the function to create backronyms. Transform the given string (without spaces) to a backronym,
// using the preloaded dictionary and return a string of words, separated with a single space (but no trailing spaces).
//
// The keys of the preloaded dictionary are uppercase letters A-Z and the values are predetermined words, for example:
//
// dict["P"] == "perfect"


const makeBackronym = function(str){
    let newStr = '';
    for(let el of str){
        for(let key in dict){
            if(el.toUpperCase() === key)  newStr += dict[key] + ' ';
        }
    }
    return newStr.slice(0, -1);//or newStr.trimEnd()

};
let dict = {
    A: 'awesome',
    B: 'beautiful',
    C: 'confident',
    D: 'disturbing',
    E: 'eager',
    F: 'fantastic',
    G: 'gregarious',
    H: 'hippy',
    I: 'ingestable',
    J: 'joke',
    K: 'klingon',
    L: 'literal',
    M: 'mustache',
    N: 'newtonian',
    O: 'oscillating',
    P: 'perfect',
    Q: 'queen',
    R: 'rant',
    S: 'stylish',
    T: 'turn',
    U: 'underlying',
    V: 'volcano',
    W: 'weird',
    X: 'xylophone',
    Y: 'yogic',
    Z: 'zero',
}
console.log(makeBackronym("dgm"));//"disturbing gregarious mustache"
console.log(makeBackronym("lkj"));//"literal klingon joke"
console.log(makeBackronym('interesting'));//ingestable newtonian turn eager rant eager stylish turn ingestable newtonian gregarious
