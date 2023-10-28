/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
   let Max = Math.max(...nums)
   let curMax = 1 , curMin = 1
   
   for(let i = 0; i < nums.length;i++){
       if (nums[i] == 0)
        {
            curMax = 1; 
            curMin = 1;
            continue
        }
       let dumb1 = curMax
       let dumb2 = curMin
       curMax = Math.max(nums[i]*dumb1,nums[i]*dumb2,nums[i])
       curMin = Math.min(nums[i]*dumb1,nums[i]*dumb2,nums[i])
       Max = Math.max(Max,curMax)
   }
    return Max
};