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
        console.log(find)
        if(nums.indexOf(find,i+1) != (-1))
        {
            console.log("index" + nums.indexOf(find,i+1))
            out.push(i)
            out.push(nums.indexOf(find,i+1))
            return out
        }
    }
};
let nums = [3,3]
let target = 6

console.log(twoSum(nums,target))