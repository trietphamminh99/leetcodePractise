/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// num1 + num2 = target
// target - num1 = num2

var twoSum = function(nums, target) {
    for(let i = 0; i < nums.length; i++)
        {
            let sum = target - nums[i]
            if (nums.indexOf(sum,i+1) != -1)
                {
                    let out = []
                    out.push(i)
                    out.push(nums.indexOf(sum,i+1))
                    return out
                    
                }
        }
}