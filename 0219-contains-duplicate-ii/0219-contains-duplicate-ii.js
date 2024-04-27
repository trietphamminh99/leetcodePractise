/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    let dumb = [];
    let L = 0;
    for (let i =0; i < nums.length ;i++)
        {
            
            if (i - L > k)
                {
                    dumb.shift();
                    L++;
                }
            if(dumb.includes(nums[i]))
                {
                    return true
                }
            dumb.push(nums[i])
        }
    return false
    
};