/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    for (let i = 0 ; i < nums.length ; i++)
        {
            let temp = Math.abs(nums[i])
            if(nums[temp-1] < 0)
                {
                    return Math.abs(nums[i])
                }
            nums[temp-1] *= (-1) 
        }
};

//[3,1,-3,4,2]