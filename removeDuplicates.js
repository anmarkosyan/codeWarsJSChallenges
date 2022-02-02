//=================================== Remove Duplicates from Sorted Array =============================
/*
Given a sorted array nums, remove the duplicates in-place such that each element appears only once
and returns the new length.

Do not allocate extra space for another array, you must do this by modifying
the input array in-place with O(1) extra memory.
 */

const removeDuplicates = function(nums) {
    //#1 how to delete duplicates in place, and return length
    // let index = 1;
    // for(let i = 0; i < nums.length - 1; i++){
    //     if(nums[i] !== nums[i + 1]){
    //         index++;
    //         nums[index] = nums[i + 1]
    //     }
    // }
    // return index;

    //#2
    let i = 0;
    for (let j = 1; j < nums.length; j ++){
        if(nums[j] !== nums[i]){
            i++;
            nums[i] = nums[j];
        }
    }
    return i + 1;
};

console.log(removeDuplicates([1,1,1,2,2,3,3,4]));// 5, [0,1,2,3,4]
console.log(removeDuplicates([1, 1, 2]));//[1, 2]