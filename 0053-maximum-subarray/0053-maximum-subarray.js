/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
     let sum = 0
    let max = -9999999;
    for (let i = 0 ; i < nums.length ; i++)
        {
            sum += nums[i];   
              if (max < sum)
                {
                    max = sum
                }
            if (sum < 0)
                {
                    sum = 0
                }
          
                
        }
    return max
    
    
};