/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums = nums.sort((a,b) => (a-b))
    const out = [];
    for (let i = 0; i < nums.length; i++)
        {
            if (nums[i] == nums[i-1]) continue;
            let l = i+1;
            let r = nums.length -1
            while (l < r)
                {
                    let sum = nums[i] +nums[l] +nums[r]
                    if (sum == 0)
                        {
                            let temp = [nums[i],nums[l],nums[r]]
                            out.push(temp)
                            l++;
                            r--;
                            while (l < r && nums[l] == nums[l-1])
                                {
                                    l++
                                }
                            while (l < r && nums[r] == nums[r+1])
                                {
                                    r--
                                }
                        }
                    if (sum < 0)
                        {
                            l++
                        }
                    if (sum > 0)
                        {
                            r--
                        }
                }
        }
    return out
};