//================= frog princess =================================
//The frog princess eats 3 more mosquitoes daily than on the previous day.
// Determine on which day the number of mosquitoes eaten will exceed 1000 if mosquitoes were eaten on the first day.
// A princess that takes n (mosquitoes on the first day) and returns the number of days that a frog will eat 1000 mosquitoes.
// In the solution use  do  while loop



function frogPrincess(n){
    let day = 0;
    let sum = 0;
    let i = n;
    do{
        day++;
        sum+= i;
        i+=3;
    }while(sum <= 1000);
    return day;

}
console.log(frogPrincess(1));//26 (day)
console.log(frogPrincess(12));//23 (day)
console.log(frogPrincess(99));//10 (day)