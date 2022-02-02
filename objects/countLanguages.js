//============================= Prepare the count of languages ==============================
//
//You will be given an array of objects (associative arrays in PHP) representing data about developers
// who have signed up to attend the next coding meetup that you are organising.
//
// Your task is to return an object (associative array in PHP) which includes the count of each coding
// language represented at the meetup.

//The order of the languages in the object does not matter.
// The count value should be a valid number.
// The input array will always be valid and formatted as in the example above.

function countLanguages(list) {
    //#1 using loop
    // let obj = {};
    // for(let el of list){
    //     if(obj[el.language]){
    //         obj[el.language]++;
    //     }else obj[el.language] = 1;
    // }
    // return obj;

    //#2 using reduce method
    return list.reduce((languages, { language }) => {
        languages.hasOwnProperty(language) ? languages[language]++ : (languages[language] = 1)
        return languages
    }, {})

}
const list1 = [
    { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C' },
    { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript' },
    { firstName: 'Ramon', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby' },
    { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C' },
];
console.log(countLanguages(list1));//{ C: 2, JavaScript: 1, Ruby: 1 }


