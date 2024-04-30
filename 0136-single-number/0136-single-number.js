/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    //[11224]
    let arr = nums.sort((a,b) => a-b) 
    for(let i = 0; i < nums.length; i ++)
        {
            if((arr[i] - arr[i+1]) == 0)
                {
                    i++
                }
            else{
                return arr[i]
            }
        }
    
};