/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    let l = 1;
    let k = Infinity;
    let r = Math.max(...piles)
    while (l <= r)
        {
            
            let m = l + Math.floor((r-l)/2)
            
            let curVal = 0;
            let i = 0
            while (i < piles.length)
                {
                    curVal += Math.ceil(piles[i] / m)
                    i++
                }
               if (curVal <= h) {
                k = Math.min(k, m);
                r = m - 1;
                }
                else {
                    l = m + 1;
                }
    
        }
   return k
    
};