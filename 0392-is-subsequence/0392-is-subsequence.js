/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    const arr = t.split('')
    let p2 = 0;
    let i
    for (i = 0 ; i < t.length; i++)
        {
            if (t[i] == s[p2])
                {
                    p2++
                }
        }
    if (s.length == p2 )
        {
            return true    
        }
    return false
};