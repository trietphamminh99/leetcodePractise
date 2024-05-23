/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    
    //prefix = [1,1,2,6]
    //profix = [24,12,4,1]
    
    //prefix
    
    let prefix = [];
     prefix[0] = 1
    for (let i = 1; i < nums.length; i++)
    {
       prefix[i] = nums[i-1] * prefix[i-1] 
    }
   
    
    let suffix = [];
    let suf = 1
    for (let i = nums.length-1; i >0;i--)
    {
       if (i == nums.length-1)
           {
             suffix.push(suf)
           }
        
       let temp =  nums[i] * suf
       suffix.unshift(temp)
       suf = temp
    }
   
    let out = []
    for (let i = 0 ; i < nums.length; i++)
        {
            let temp = suffix[i] * prefix[i]
            out.push(temp)
        }
    return out
};