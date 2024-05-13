/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    
    //prefix = [1,1,2,6]
    //profix = [24,12,4,1]
    
    //prefix
    let pre = 1;
    let prefix = [1]
    for (let i = 1; i < nums.length; i++)
    {
       pre = nums[i-1] * pre
       prefix[i] = pre 
    }
    //profix
    let pro = 1;
    let profix = [1]
    for (let i = nums.length-1; i >= 0; i--)
    {
        if (i == nums.length-1)
        {
            profix[i] = 1
        }
        else{
            pro = nums[i+1] * pro
            profix[i] = pro 
        }
        
    }
    let out=[]
    for (let i = 0; i < nums.length; i++){
        out[i] = prefix[i]*profix[i]
    }
    return out
};