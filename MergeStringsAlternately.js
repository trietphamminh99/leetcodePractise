// You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

// Return the merged string.

 

// Example 1:

// Input: word1 = "abc", word2 = "pqr"
// Output: "apbqcr"
// Explanation: The merged string will be merged as so:
// word1:  a   b   c
// word2:    p   q   r
// merged: a p b q c r
// Example 2:

// Input: word1 = "ab", word2 = "pqrs"
// Output: "apbqrs"
// Explanation: Notice that as word2 is longer, "rs" is appended to the end.
// word1:  a   b 
// word2:    p   q   r   s
// merged: a p b q   r   s

/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let dumb = "";
    let i = 0;
    let k = 0;
    while (i < word1.length && k < word2.length)
   {
    dumb += word1[i]
    i++
    dumb += word2[k]
    k++
   }
   if(i < word1.length){
    while (i < word1.length)
    {
     dumb += word1[i]
     i++
    }
   }
   if(k < word2.length){
    while (k < word2.length)
    {
        dumb += word2[k]
        k++
    }
   }
   return dumb
};
let word1 = "135793"
let word2 = "2468"
console.log(mergeAlternately(word1,word2))
