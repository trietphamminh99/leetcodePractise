/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let out = true
    const s1 = s.split('').sort()
    const t1 = t.split('').sort()
    if (s.length != t.length)
    {
        return false
    }
    for(let i = 0; i < s1.length ; i++)
    {
        if(s1[i] != t1[i]){
            return false
        }
    }
    return out
};