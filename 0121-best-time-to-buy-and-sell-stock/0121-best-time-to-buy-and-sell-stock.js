/**
 * @param {number[]} prices
 * @return {number}
 */
// buyStockDate 
// StockValueBuy
// StockValueBuy the less value => price < StockValueBuy =>  StockValueBuy = price
// profit = pricesMax - StockValueBuy
// => profit date
var maxProfit = function(prices) {
    let buyStockDate = 0;
    let StockValueBuy = 999999999
    let profit = 0
    for(let i = 0 ; i < prices.length; i++)
        {
            if(prices[i] < StockValueBuy)
                {
                    StockValueBuy = prices[i]
                    
                }
            else{
                if(profit < (prices[i] - StockValueBuy))
                 {
                    profit = prices[i] - StockValueBuy
                     console.log(profit)
                    
                }
            }
        }
    return profit
};