/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let cnt = 0;
    let mar = nums[0]
    for (let i = 0 ; i < nums.length+1; i++){
        if(nums[i] == mar)
            {
                cnt++
            }
        else{
            cnt--
        }
        if(cnt < 0)
            {
                mar = nums[i]
                cnt = 1
            }
    }
    return mar
};