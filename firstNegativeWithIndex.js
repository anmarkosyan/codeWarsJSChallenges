//========================= firstNegativeWithIndex ====================
//Find first negative element in given array, and return the element and its index
//with using BREAK command
//


    let arr = [3, 7, -2, 89, -45, 2, -1];
    let neg;
    let index;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            neg = arr[i];
            index = i;
            break;
        }
    }

console.log(neg, index);// -2, 2