/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    let cnt = 0;

    for (let i = 0 ; i < flowerbed.length || cnt == n;i++)
        {
            
            if(flowerbed[i] == 1)
                {
                    continue;
                }
       
                if(flowerbed[i-1] != 1 && flowerbed[i+1] !=1)
                    {
                        cnt++
                        flowerbed[i] = 1
                    }
            if(cnt ==n)
                {
                    break;
                }
            
        }
    if(cnt == n || n == 0)
        {
            return true
        }
    else{
        return false
    }
};