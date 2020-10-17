//========================== Longest Common Prefix =====================
/*
Write a function to find the longest common prefix string amongst an array of strings.
If there is no common prefix, return an empty string "".
 */


const longestCommonPrefix = function(arr) {
    let prefix = '';
    if(arr.length === 0) return prefix;
    //go throw the first str
    for(let i = 0; i < arr[0].length; i++){
        let char = arr[0][i];
        //loop over arr
        for(let j = 0; j < arr.length; j++){
            if(arr[j][i] !== char){
                return prefix
            }
        }
        prefix += char;
    }
    return prefix
};
console.log(longestCommonPrefix(["flower","flow","flight"]));//'fl'
console.log(longestCommonPrefix(["dog","racecar","car"]));//''