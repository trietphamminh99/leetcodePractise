/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let out = []
    for (let i = 0; i < nums.length; i++)
        {
            let find = target - nums[i];
            let val  = nums.indexOf(find,i+1)
           if (val != -1 && val != i)
               {
                 out.push(i);
                 out.push(val)
                   return out
               }
               
        }
};