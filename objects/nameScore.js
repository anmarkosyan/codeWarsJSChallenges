//========================= What is my name score? ============================
//
//The 26 letters of the English alphabets are randomly divided into 5 groups of 5 letters with the remaining letter being ignored.
//Each of the group is assigned a score of more than 0. The ignored letter always has a score of 0.


function nameScore(name){
   const alpha = {'ABCDE':1,'FGHIJ':2,'KLMNO':3,'PQRST':4,'UVWXY':5};
   let str = name.toUpperCase().replace(/\s/g, '');
   let sum = 0;
   for(let el of str){
       for(let key in alpha){
           if(key.includes(el)){
               sum += alpha[key]
           }
       }
   }
   return { [name]: sum }
}
console.log(nameScore('Mary Jane'));//{"Mary Jane":20} => M=3 + a=1 + r=4 + y=5 + J=2 + a=1 + n=3 + e=1