//
//Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"
// Your task is to process a string with "#" symbols.

const clearString = str => {
     let arr = [];
     for(let char of str){
         if(char !== '#'){
            arr.push(char)
         }else arr.pop();
     }
     return arr.join('');
}
console.log(clearString('ab#bd##'));//'a'
console.log(clearString('abc#d##c'));//'ac'
console.log(clearString('abc####d##c#'));// '';