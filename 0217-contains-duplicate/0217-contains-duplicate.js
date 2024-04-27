/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let out = false;
    let nums1 = nums.sort()
    for(let i = 0; i < nums.length; i++)
        {
            if(nums1[i] == nums1[i+1])
                {
                    out = true;
                    break;
                }
        }
    return out
    
};