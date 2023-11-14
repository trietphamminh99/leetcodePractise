/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
//2 pointer
//if p1 = val 
//if p1 == p2 > p2-- > p1 value = p2 value
var removeElement = function(nums, val) {
   let k = 0
   let p1 = 0
   let p2 = nums.length-1
    while (p1 < p2){
        if (nums[p1]  == val)
            {
                if(nums[p1] == nums[p2])
                    {
                        p2--
                    }
                else{
                    t = nums[p1]
                    nums[p1] = nums[p2]
                    nums[p2] = t
                    p1++
                }
                
            }
        else{
            p1++
        }
    }
    for (let i = 0 ; i < nums.length; i++){
        if (nums[i] != val)
            {
                k++
            }
    }
    console.log(nums)
    return k
};