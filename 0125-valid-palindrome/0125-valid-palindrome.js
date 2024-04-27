/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let t = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '')
    let R = t.length-1
    
    for (let i = 0; i < t.length; i++)
        {
            if(t[i] != t[R])
                {
                    return false
                }
            R--
        }
    return true
};