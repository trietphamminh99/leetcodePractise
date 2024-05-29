/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let g = nums.length-1;
    for (let i = nums.length -1; i>=0; i--)
        {
            if(i + nums[i] >= g)
                {
                    g = i 
                }
        }
  return (g==0)
};