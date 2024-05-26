/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
     let i = 0;
        let arr = [];
        let max = 0;
        while (i < s.length)
        {
           if (arr.indexOf(s[i]) == -1)
           {
            arr.push(s[i]);
            i++
           }
           else{
                if (arr.length > max)
                {
                    max = arr.length
                }
                arr.shift()
           }
           
        }
        if (arr.length > max)
        {
            max = arr.length
        }
        return max
};