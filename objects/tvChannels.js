//========================== TV channels  ==============================
//
//Program channels into your TV's memory. An array with channels (strings) will be passed as an argument
// to the function reader(). Sort the channels in an alphabetical order, remove duplicates and,
// finally, return an object where each channel (object's value) is assigned to a whole number (object's key),
// starting with 0.


const redarr = arr => (
    { ...[...new Set(arr.sort())] }
    );



console.log(redarr(["BBC1","BBC2","MTV"]));// {'0': 'BBC1','1': 'BBC2','2': 'MTV'}
console.log(redarr(["BBC1","BBC1","BBC2","MTV"]));//{'0': 'BBC1','1': 'BBC2','2': 'MTV'}