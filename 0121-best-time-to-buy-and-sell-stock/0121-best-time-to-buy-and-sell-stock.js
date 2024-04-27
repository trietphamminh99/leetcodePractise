/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    //sellz(i) = 1
    //buy = 1
    
    //pro = 2 - 1 = 0 
    //max = 1
    
    let buy = 0;
    let max = 0;
    for (let i = 0; i < prices.length;i++)
        {
            let profit = prices[i] - prices[buy];
            if (profit > max)
                {
                    max = profit
                }
            if (profit < 0)
                {
                    buy++
                    buy=i
                }
        }
    return max
    
};