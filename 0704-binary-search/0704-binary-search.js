/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let h = nums.length-1;
    let l =0 ;
    let m =0;
    while (l <= h)
        {
            m = l + Math.floor((h-l)/2)
            if (nums[m] == target)
                {
                    return m
                }
            if (nums[m] < target)
                {
                    l = m +1
                }
            if (nums[m] > target)
                {
                    h = m-1
                }
        }
    return -1
};