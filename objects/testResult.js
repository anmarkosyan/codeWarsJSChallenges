//========================== Test's results ===========================================
//
//It's important day today: the class has just had a math test. You will be given a list of marks.
// Complete the function that will:
//
// Calculate the average mark of the whole class and round it to 3 decimal places.
//
// Make a dictionary/hash with keys "h", "a", "l" to make clear how many high, average and low marks they got.
// High marks are 9 & 10, average marks are 7 & 8, and low marks are 1 to 6.
//
// Return list [class_average, dictionary] if there are different type of marks,
// or [class_average, dictionary, "They did well"] if there are only high marks.


function testResult (arr){
    // Calculate the average
    let avg = (arr.reduce((sum, num) => sum + num, 0) / arr.length).toFixed(3);
    //Make a dictionary
    let dict = {'h': 0, 'a': 0, 'l': 0};
    for(let num of arr){
        if(num === 9 || num === 10) dict['h']++;
        if(num === 7 || num === 8)  dict['a']++;
        if(num >= 1 && num <= 6)    dict['l']++;
    }
    //only high marks
    return dict.h === arr.length ? [+avg, dict,'They did well' ] : [+avg, dict]

}
console.log(testResult([10,9,9,10,9,10,9]));//[9.429, {'h': 7, 'a': 0, 'l': 0}, 'They did well']
console.log(testResult([5,6,4,8,9,8,9,10,10,10]));//[7.9, {'h': 5, 'a': 2, 'l': 3}]