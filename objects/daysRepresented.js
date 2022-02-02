//================================= How many days are we represented in a foreign country? ==================
/*
Write a function that receives a list of pairs and returns the number of days that the company is represented
in the foreign country.
The first number of the pair is the number of the day of arrival and the second number of
the pair is the day of departure of someone who travels,
i.e. 1 january is number 1 and 31 of december is 365.
*/

function daysRepresented(trips){
    let sum = []
    for(let el of trips){
        for(let i = el[0]; i <= el[1]; i++){
            sum.push(i);
        }
    }
    //delete a duplicates , all numbers only one time
    return sum.filter((el, i) => i === sum.indexOf(el)).length;

}
console.log(daysRepresented([[10,15],[25,35]]));// 17 ->  6day + 11day = 17day
console.log(daysRepresented([[2,8], [220,229],[10,16]]));// 24
console.log(daysRepresented([[305, 330], [299, 319], [40, 76], [33, 67], [40, 47], [227, 243]]));//93




