/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let l = 0;
    let r = nums.length-1
    let fIndex = -1;
    let lIndex = -1;
    while (l <= r)
        {
            console.log(nums[l])
            if (nums[l] == target && nums[r] == target)
                {
                    fIndex = l;
                    lIndex = r;
                    let out = [fIndex,lIndex]
                    return out
                }
            if(nums[l] != target)
                {
                    l++
                }
            
            if(nums[r] != target)
                {
                    r--
                }
           
           
        }
                    let out = [fIndex,lIndex]
                    return out
};