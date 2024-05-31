/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    let out = [];
    for (let i = 0 ; i < nums.length ; i ++)
        {
            let x = Math.abs(nums[i]);
            
            if (nums[x-1] < 0){
                out.push(x) 
            }
            nums[x-1] *= (-1)
        }
    return out
};