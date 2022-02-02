//
//
//Write a function that accepts a sequence of Reindeer names,
// and returns a sequence with the Reindeer names sorted by their last names.

// Notes:
// It's guaranteed that each string is composed of two words
// In case of two identical last names, keep the original order

const sortReindeer = arr => {
    // return arr.sort((a, b) => {
    //     if(a.split(' ')[1] > b.split(' ')[1]) return 1;
    //     else if(a.split(' ')[1] < b.split(' ')[1]) return -1;
    //     else return 0;
    // });
    //using ternary operator
    return arr.sort((a, b) => a.split(' ')[1] > b.split(' ')[1] ? 1 : -1 );

}
console.log(sortReindeer( ["Dasher Tonoyan", "Dancer Moore", "Prancer Chua", "Vixen Hall",
                               "Comet Karavani", "Cupid Foroutan", "Donder Jonker", "Blitzen Claus"]));
//["Prancer Chua",
// "Blitzen Claus",
// "Cupid Foroutan",
// "Vixen Hall",
// "Donder Jonker",
// "Comet Karavani",
// "Dancer Moore",
// "Dasher Tonoyan"]