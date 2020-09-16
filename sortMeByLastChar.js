//
//Sort array by last character
// Complete the function to sort a given array or list by last character of elements.
// Element can be an integer or a string.


const sortMeByLastChar = arr => {
    return arr.sort((a, b) => {
        if(a[a.length - 1] > b[b.length - 1]) return 1;
        else if(a[a.length - 1] < b[b.length - 1]) return -1;
        else return 0;
    });
}
console.log(sortMeByLastChar(['acvd','bcc']));//['bcc','acvd']
console.log(sortMeByLastChar(["bsde", "asdf", 'door', "kata"]));// [ 'kata', 'bsde', 'asdf', 'door' ]
console.log(sortMeByLastChar(["bsde", "asdf", "13", '14']));//["13","bsde", "asdf"]
