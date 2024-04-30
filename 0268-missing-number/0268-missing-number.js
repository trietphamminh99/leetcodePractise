/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let cnt = 0;

    const arr = nums.sort((a, b) => a - b);
    for (let i = 0 ; i < nums.length+1 ; i++)
        {
            if (arr[i] != cnt)
                {
                    return cnt
                }
            cnt++
        }
};