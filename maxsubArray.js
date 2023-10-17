var maxSubArray = function(nums) {
    let i = 0 ; 

    let maxSub = -99999999;
    let cursub = 0;
    
    if (nums.length < 1)
    {
        maxSub += nums[0]
        return maxSub
    }
    while (i < nums.length)
    {
        if(cursub < 0)
        {
            cursub = 0
        }
        cursub += nums[i]
        maxSub = Math.max(cursub,maxSub)
        i++
    }
    // cur = -2
//max = 0

    // cur = 4
    //max = 1
    return maxSub
};