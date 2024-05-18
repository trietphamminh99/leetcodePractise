/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {

    let L = 0;
    let R = nums.length-1;
    while (L <= R)
        {
            if(nums[L] == val)
                {
                    if(nums[R] == val)
                        {
                            R--
                        }
                    else{
                        let temp = nums[L];
                        nums[L] = nums[R];
                        nums[R] = temp;
                    }
                }
            else{
                L++
            }
            
        }
  
    return L
};