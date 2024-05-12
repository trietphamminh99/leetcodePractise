/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    let l = 0;
    let i = 0;
    let n = 2*(nums.length+1)
    console.log(n)
    let ans = []
    while (i < n)
    {
        if(l != nums.length)
            {
               ans.push(nums[l]);
                l++;
            }
        else{
            l = 0
        }
        i++
    }
    return ans
};