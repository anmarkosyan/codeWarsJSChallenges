//================================= Merge Two Sorted Lists ===================================
/*
Merge two sorted linked lists and return it as a new sorted list.
The new list should be made by splicing together the nodes of the first two lists.
Constraints:

* The number of nodes in both lists is in the range [0, 50].
* -100 <= Node.val <= 100
* Both l1 and l2 are sorted in non-decreasing order.

 */

const mergeTwoLists = function(l1, l2) {
    //#1 solution using methods
    //return l1.concat(l2).sort((a, b) => a - b);
    //====================================
    //#2 using bubble sort
    // concat in one array
    // for(let i = 0; i < l2.length; i++){
    //     l1.push(l2[i])
    // }
    // // go throw the array , and compere current and next items, and swap if curr > next
    // for(let i = 0; i < l1.length; i++){
    //     for(let j = i+1; j < l1.length; j++){
    //         if(l1[i] > l1[j]){
    //             let swap = l1[i];
    //             l1[i] = l1[j];
    //             l1[j] = swap;
    //         }
    //     }
    // }
    // return l1;
    //=================================
    //#3 using while loop and crate new array with sorted items
    if(l1.length === 0) return l2;
    if(l2.length === 0) return l1;
    let res = [];
    let i = 0;
    let j = 0;
    while(i < l1.length && j < l2.length){
        if(l1[i] < l2[j]){
            res.push(l1[i]);
            i++;
        }else {
            res.push(l2[j]);
            j++;
        }
    }
    return res;



};

console.log(mergeTwoLists([1, 2, 4], [1, 3, 4, 6]));//[1, 1, 2, 3, 4, 4]
console.log(mergeTwoLists([], []));//[]
console.log(mergeTwoLists([], [0]));//[0]
console.log(mergeTwoLists([3, 4, 7], [1, 2, 4, 7]));//[1, 2, 3, 4, 4, 7, 7]
