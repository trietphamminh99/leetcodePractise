/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let sum = 0;
    let l = 0; 
    let r = 0;
    let min = 999999;
  
    for (r = 0; r < nums.length ; r++)
        {
            sum += nums[r];
            
            while (sum >= target)
                {
                    if (min > (r - l + 1))
                        {
                            
                            min = (r - l + 1)
                            
                        }
                    sum -= nums[l]
                    
                    l++
                }
        }
    if (min == 999999)
        {
            return 0
        }
    return min
};