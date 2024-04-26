/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let max = 0;
    let result = [];
    for (let i = 0 ; i < candies.length; i++)
        {
            if(max < candies[i])
                {
                    max = candies[i];
                }
        }
    for ( let i =0; i < candies.length; i++){
        let c = candies[i] + extraCandies 
        if(c < max)
            {
                result.push(false)
            }
        else{
                result.push(true)
            }
    }
    return result;
};