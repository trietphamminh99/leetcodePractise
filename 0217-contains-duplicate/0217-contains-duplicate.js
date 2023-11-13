/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
   //scan though the array
    // haver the same number 2  I will it true
    // create a dummy array to if we go though it and it not in the array will put it in here 
     //indexOf will return -1 if it not in the array
    //and return the postion of the value if it in the array
    let boolean = false
    let dummy = []
    for (let i = 0 ; i < nums.length; i++)
        {
           
            if(nums.indexOf(nums[i],i+1) !== -1)
                {
                    boolean = true
                    return boolean
                }
        }
    return boolean
};