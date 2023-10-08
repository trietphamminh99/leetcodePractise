/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // let map = new MAP();
    // for(let i = 0; i < nums.length; i++)
    // {
    //     map.set(nums[i],i);
    // }
    // let output = [];
    // for(let i = 0; i < nums.length; i++){
    //     if(map.has(target- num[i]) && map.get(target- num[i]) !== i)
    //     {
    //         output[0] = i;
    //         output[1] =  map.get(target- num[i]);
    //     }
    // }
    // return  output;

 

   
    for(let i = 0 ; i < nums.length; i++){
        let out = target - nums[i]
        console.log(out)
        let indexOfOut = nums.indexOf(out, i + 1);
        console.log(indexOfOut)
        if (indexOfOut !== -1) {
            let output = []
            output.push(i)
            output.push(indexOfOut)
            return output
        }
    }
};
let nums = [3,2,4]
let target = 6

console.log(twoSum(nums,target))