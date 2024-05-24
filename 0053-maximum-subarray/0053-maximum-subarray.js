/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let max = -9999999;
    let cur = 0;
    for(let i = 0 ; i < nums.length; i++)
        {
            cur = nums[i] + cur
            if (cur > max)
                {
                    max = cur;
                }
            if (cur < 0)
                {
                    cur = 0
                }
        }
   
    return max
       
};