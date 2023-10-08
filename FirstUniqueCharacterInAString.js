// Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

 

// Example 1:

// Input: s = "leetcode"
// Output: 0
// Example 2:

// Input: s = "loveleetcode"
// Output: 2
// Example 3:

// Input: s = "aabb"
// Output: -1
 

// Constraints:

// 1 <= s.length <= 105
// s consists of only lowercase English letters.

//Note from me: if the value of indexOf and lastIndexOf equal that is mean that thier is only one in the string
/**
 * @param {string} 
 * @return {number}
 * 
 */
var firstUniqChar = function(s) {
    for(let i = 0; i < s.length; i ++){
        if(s.indexOf(s[i]) === s.lastIndexOf(s[i])){
            return s.indexOf(s[i])
        }
    }
    return -1
};
console.log(firstUniqChar("aabb"))