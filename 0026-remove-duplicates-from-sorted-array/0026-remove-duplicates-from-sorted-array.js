/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let k = 0;
    let temp = []
    for(let i = 0 ; i < nums.length; i++)
        {
            console.log(nums[i])
            if(temp.indexOf(nums[i]) == -1)
                {
                    temp.push(nums[i])
                    k++
                }
            
        }
    for(let i = 0 ; i < nums.length; i++){
        if(i < k)
        {
            nums[i] = temp[i]
        }
        else
        {
            nums[i] = null
        }
        
    }
    return k
};