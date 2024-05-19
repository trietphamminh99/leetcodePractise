/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let l = 0;
    let max = -9999999;
    for(let i = 0; i < prices.length; i++)
        {
            if(prices[i] < prices[l])
                {
                    l = i
                }
            if(max < prices[i] - prices[l])
                {
                    max = prices[i] - prices[l]
                }
        }
    return max
};