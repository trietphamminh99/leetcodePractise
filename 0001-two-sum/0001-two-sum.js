/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  
   let out = [];
   for (let i = 0; i < nums.length; i++)
   {
       let find = target - nums[i]
       if(nums.indexOf(find,i+1) != (-1))
       {
           out.push(i)
           out.push(nums.indexOf(find,i+1))
           return out
       }
   }
   
};