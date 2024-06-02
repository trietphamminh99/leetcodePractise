/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let curM = Infinity
        let l = 0;
        let r = nums.length-1
        while (l <= r)
        {
            let m = l + Math.floor((r-l) / 2)
            if (nums[l] < nums[r])
            {
                //this mean the array is sorted, min should be nums[l]
                curM = Math.min(curM, nums[l])
            }
            if (nums[m] < curM)
            {
                curM = nums[m];
                
            }
            if (nums[m] >= nums[l])
            {
                l = m+1
            }
            else{
                r = m-1
            }
            
        }
        return curM
};