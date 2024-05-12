/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var countPairs = function(nums, target) {
    let l = 0;
    let r = nums.length-1;
    let arr = nums.sort((a,b) =>(a-b))
    console.log(arr)
    let par = 0;
    while(l < r)
        {
            let sum = arr[l] + arr[r]
            if(sum < target)
                {
                    par += r -l
                    l++
                }
            else{
                r--
            }
        }
    return par
};