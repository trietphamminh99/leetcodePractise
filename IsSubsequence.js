// Question asking us to return true if s is a subsequence of t, or false otherwise.

// Example:
//     s='code'
//     t='leetcode'
//     here s is subsequence of t ,we can get code from leetcode.


// What is subsequence and subString?
//     Subsequence: a sequence that appears in the same relative order, but not necessarily contiguous.
//     SubString: a contiguous sequence of symbols that appears in the same relative order as the original string.
  
  
//   Big O:
//     Time: O(n) # n is the length of t
//     Space: O(1)
var isSubsequence = function(s, t) {
    let sub = 0;
    for (let i = 0; i < t.length; i++)
    {
        console.log("s: "+ s[sub])
        console.log("t: "+ t[i])
        if(s[sub] === t[i])
        {
            console.log("run")
            sub++
        }
    }
    return sub === s.length
};
console.log(isSubsequence("abc","ahbgdc"))