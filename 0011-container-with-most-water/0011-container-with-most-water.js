/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let max = 0;
    let l =0;
    let r =height.length-1;
    while (l < r)
        {
            let curMax = 0
            let dis = r - l
            if (height[l] <= height[r])
                {
                    curMax = height[l] *dis
                }
            if (height[l] > height[r])
                {
                    curMax = height[r] *dis
                }
            if (curMax > max)
                {
                    max = curMax
                }
            if (height[l] > height[r])
                {
                    r--
                }
            else{
                l++
            }
        }
    return max
};