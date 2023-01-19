/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let lo = 0;
let hi = nums.length - 1;

while (lo <= hi){
    let mid = lo+parseInt((hi-lo) / 2);
    if (nums[mid] === target){
        return mid;
    }

    else if (nums[lo] <= nums[mid]){
        // lo to mid is sorted

    } 

    else if (nums[mid] <= nums[hi]){
        // mid to hi is sorted

    } 

}
return -1;
};