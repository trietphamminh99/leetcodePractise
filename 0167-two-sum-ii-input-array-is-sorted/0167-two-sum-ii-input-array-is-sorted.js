/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let l = 0; 
    let r = numbers.length -1
    while ( l < r)
        {
            if(numbers[r] + numbers[l] == target)
                {
                    let out = [l+1,r+1]
                    
                    return out
                }             
            else if(numbers[r] + numbers [l] > target)
                {
                    r--
                }
            else if (numbers[r] + numbers [l] < target)
                {
                    l++
                }

        }
};