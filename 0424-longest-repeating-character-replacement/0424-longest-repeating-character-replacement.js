/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let maxs = 0;
    let map = new Map();
    let l = 0;
    let r = 0;
    while (r < s.length)
        {
            if(!map.get(s[r]))
                {
                    map.set(s[r],1)
                }
            else{
                let temp = map.get(s[r])
                temp +=1
                map.set(s[r],temp)
            }
            let wl = r-l+1
            let maxcur = Math.max(...Array.from(map.values()))
            if(wl - maxcur <= k)
                {
                    if (maxs < wl)
                        {
                            maxs = wl
                        }
                }
            else{
                 let temp = map.get(s[l])
                temp -=1
                map.set(s[l],temp)
                l++
            }
            r++
        }
    return maxs
};