/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let arrS = s.split('').sort();
   
    let arrT = t.split('').sort();
   
    if (s.length != t.length)
        {
            return false
        }
    for (let i = 0 ; i < s.length ; i++ )
        {
            if (arrS [i] != arrT[i]){
                return false
            }
        }
    return true
};