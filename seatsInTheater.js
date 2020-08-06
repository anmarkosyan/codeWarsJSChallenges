//https://www.codewars.com/kata/588417e576933b0ec9000045/train/javascript

//++++++++++++++++++++++++++ seatsInTheater +++++++++++++++++++++++++++
//Find seat of one person
//if we have total cols = 16 and total rows - 11

function seatsInTheater(nCols, nRows, col, row) {
    return (nCols - col + 1 ) * (nRows - row)


}

console.log(seatsInTheater(16, 11, 5, 3)); //96
console.log(seatsInTheater(1, 1, 1, 1)); //0
