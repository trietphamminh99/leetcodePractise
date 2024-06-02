/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let l = 0;
    let out = 0;
    let map = new Map()
    
    for (let r = 0; r < s.length;r++)
        {
            map.set(s[r], map.get(s[r])+1 || 1)
            let wl = r - l + 1;
            let maxCurChar = Math.max(...map.values())
            if (wl - maxCurChar <= k)
                {
                    max = Math.max(out,wl)
                }
            else{
                map.set(s[l], map.get(s[l]) - 1)
                l++
            }
        }
    return max
};