/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = new Map();
    for(let i = 0 ; i < nums.length; i ++)
        {
            map.set(nums[i],i)
        }
    for(let i = 0 ; i < nums.length; i ++){
        if (map.get(target - nums[i]) && i != map.get(target - nums[i]))
            {
                let out = [i,map.get(target - nums[i])]
                return out
            }
    }
};