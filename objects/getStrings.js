//====================== Interview Question ==================================
/*
You receive the name of a city as a string, and you need to return a string that
 shows how many times each letter shows up in the string by using an asterisk (*).

For example:

"Chicago"  -->  "c:**,h:*,i:*,a:*,g:*,o:*"
As you can see, the letter c is shown only once, but with 2 asterisks.

The return string should include only the letters (not the dashes, spaces, apostrophes, etc).
There should be no spaces in the output, and the different letters are separated by a comma (,)
as seen in the example above.

Note that the return string must list the letters in order of their first appearance in the original string.
 */


function getStrings(city){
    //#1 solution
    // city = city.toLowerCase().replace(/\s/g, '');
    // let obj = {};
    // let str = '';
    // //let star = '*'
    // for(let i = 0; i < city.length; i++){
    //     if(obj[city[i]]){
    //         obj[city[i]]++;
    //     } else obj[city[i]] = 1;
    // }
    // for(let key in obj){
    //    str += key + ':' + '*'.repeat(obj[key]) + ',';
    // }
    // return str.slice(0, -1)

    //#2 solution
    city = city.toLowerCase();
    let obj = {};
    let str = '';
    //let star = '*'
    for(let i = 0; i < city.length; i++){
        if(obj[city[i]]){
            obj[city[i]] += '*';
        } else obj[city[i]] = '*';
    }
    for(let key in obj){
        if(key !== ' ')
       str += key + ':' + obj[key] + ',';
    }
    return str.slice(0, -1)

}
console.log(getStrings("Chicagoch"));//"c:**,h:*,i:*,a:*,g:*,o:*"
console.log(getStrings("Las Vegas"));//"l:*,a:**,s:**,v:*,e:*,g:*"