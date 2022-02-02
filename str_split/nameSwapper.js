//=============== name swapper =================
//Write a function that returns a string in which firstname is swapped with last name.

const nameSwap = str => {
    //#1 time: 2 steps
    // let arr =  str.split(' ');
    // return arr[1] + ' ' + arr[0]

    //#2 time : 3 steps
   // return str.split(' ').reverse().join(' ')
    //#3 time : in place O(1) constant time
    return str.replace(/([^\s]+) ([^\s]+)/, '$2 $1')

}
console.log(nameSwap('john McClane'));//'McClane john'
console.log(nameSwap('George Huffingquane-McGafferty'));//Huffingquane-McGafferty George

