/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let l = 0 ;
    let r = nums.length-1
    while (l <= r)
        {
            console.log("l: " + l)
            console.log("r: " + r)
            let m = l + Math.floor((r-l)/2)
            console.log(m)
            if (nums[m] == target)
                {
                    return m
                }
        
            if (nums[l] < nums[r])
                {
                    if (nums[m] < target)
                        {
                            l = m+1
                        }
                    else{
                        r = m-1
                    }
                }
            else 
                {
                         if (nums[l] <= nums[m]) {
            if (nums[l] <= target && target < nums[m]) {
                r = m - 1;
            } else {
                l = m + 1;
            }
        } else { // Otherwise, the right part must be sorted
            if (nums[m] < target && target <= nums[r]) {
                l = m + 1;
            } else {
                r = m - 1;
            }
        }
                }
            
        }
    return -1
};