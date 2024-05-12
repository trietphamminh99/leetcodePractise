/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    let l = 0;
    let r = n;
    let arr = [];
    while(r < nums.length)
        {
            arr.push(nums[l])
            l++;
            arr.push(nums[r])
            r++
        }
    return arr
    
    
    
};