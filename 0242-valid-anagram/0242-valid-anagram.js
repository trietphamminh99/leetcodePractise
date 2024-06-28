/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length != t.length)
        {
            return false;
        }
    const map1 = new Map();
    for(let i = 0; i < s.length; i++)
        {
            if(!map1.has(s[i]))
                {
                    map1.set(s[i],1)
                }
            else{
                map1.set(s[i],map1.get(s[i]) + 1)
            }
        }
    const map2 = new Map();
    for(let i = 0; i < t.length; i++)
        {
            if(!map2.has(t[i]))
                {
                    map2.set(t[i],1)
                }
            else{
                map2.set(t[i],map2.get(t[i]) + 1)
            }
        }
    for(let k of map1.keys())
        {
            if(map1.get(k) != map2.get(k))
                {
                    return false;
                }
        }
    return true
};