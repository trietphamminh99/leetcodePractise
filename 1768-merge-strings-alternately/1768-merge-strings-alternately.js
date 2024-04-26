/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let out = [];
    let p3= 0;
    let i = 0; 
    for(i = 0 ; i < word1.length && i <word2.length; i++)
    {
        out[p3++] = word1[i];
        out[p3++] = word2[i];
    } 
    
    if (i < word1.length)
    {
         for(i ; i < word1.length; i++)
        {
            out[p3++] = word1[i];
        } 
    }
    if (i < word2.length)
    {
         for(i ; i < word2.length; i++)
        {
            out[p3++] = word2[i];
        } 
    }
    return out.join('')
};