/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    nums.sort((a,b) => (a-b))
    let cnt = 0
    for (let i = 0 ; i < nums.length+1; i++)
        {
            
            if(nums[i] !== cnt)
                {
                    return cnt
                }
            cnt++
        }
    
};