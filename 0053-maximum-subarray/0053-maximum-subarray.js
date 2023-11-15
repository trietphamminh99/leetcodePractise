/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    //have a loop 
    //max sum =0
    // current sum =0
    // in side the loop => add each element to the current sum 
    //if the curSum < 0 => curSum = 0
    //else => if  curSum > maxSum => maxSum = curSum
    
    let curSum = 0
    let maxSum = -999999999999
    
    if (nums.length == 1)
        {
            maxSum = nums[0]
            return maxSum
        }
    for(let i = 0; i < nums.length; i++)
        {
            curSum = nums[i] + curSum
            if(curSum > maxSum)
            {
                maxSum = curSum
            }
            if(curSum < 0)
                {
                    curSum = 0
                }
          
        }
    return maxSum
};