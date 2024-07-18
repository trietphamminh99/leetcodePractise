/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    
    nums = nums.sort((a,b) => (a-b))
    let out = [];
    let i = 0;
    for (let i =0; i < nums.length -1 ; i++)
        {
            if (nums[i] == nums[i-1]) continue;
            let l = i + 1
            let r = nums.length - 1;
            while (l < r)
                {
                        let sum = nums[i] + nums[l] + nums[r]

                        if(sum == 0){
                            let arr = [ nums[i] , nums[l] , nums[r]]
                            out.push(arr)
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
                        else if (sum < 0)
                            {
                                l++
                            }
                     else if (sum > 0)
                            {
                                r--
                            }
                }

            
        }
    return out
};