//https://www.codewars.com/kata/5b097da6c3323ac067000036/train/javascript


const solve = (a, b) => {
    let countA = 0;
    let countB = 0;
    for(let i = 0; i < 3; i++){
        if(a[i] > b[i]){
            countA++;
        }else if(a[i] < b[i]){
            countB++;
        }

    }

    return countA > countB ? `${countA}, ${countB}: Alice made "Kurt" proud!`:
        countB > countA ? `${countA}, ${countB}: Bob made "Jeff" proud!`:
            `${countA}, ${countB}: that looks like a "draw"! Rock on!`;


}
console.log(solve([47, 67, 22], [26, 47, 12]));//'3, 0: Alice made "Kurt" proud!'