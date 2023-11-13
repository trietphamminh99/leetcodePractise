/**
 * @param {number[]} prices
 * @return {number}
 */

//buyValue = lowest value in the array
//maxProfit =in the loop differece to the buy date
//returnprofit
//profit = maxProfit - buyValue
var maxProfit = function(prices) {
    let buyValue = prices[0];
    let returnProfit = 0
    
    for(let i = 0; i <prices.length; i++) 
        {
            if(prices[i] < buyValue)
            {
                buyValue = prices[i]
            }
            else{
                if ((returnProfit < prices[i]-buyValue))
                    {
                        returnProfit = prices[i]-buyValue
                    }
            }
            
        }
    return returnProfit
};