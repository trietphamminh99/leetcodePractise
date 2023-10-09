// Given a string s, find the length of the longest 
// substring
//  without repeating characters.

 

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 /**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let i = 0 ,j = 0;

    let dumb = []
    let LongestSubstring = 0
    while (i < s.length)
    {
        if(dumb.indexOf(s[i]) == -1)
        {
            dumb.push(s[i])
            if (LongestSubstring < (i-j+1))
            {
                LongestSubstring = (i-j+1)
            }
            i++
        }
        else{
            dumb.shift()
            j++
        }
    }
    return LongestSubstring
};