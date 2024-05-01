/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    
    let R = numbers.length-1;
    let L = 0;
    while(R > L)
        {
            console.log("R ="+ numbers[R])
            console.log("L ="+ numbers[L])
            if(numbers[L] + numbers[R] > target)
                {
                    R--
                }
            else if(numbers[L] + numbers[R] < target)
                {
                    L++
                }
            else{
                let out = [L+1,R+1] 
                return out
            }
        }
};