/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let i = 0;
    let out = [];
    let p = 0;
    let p2 = 0;
    for(i = 0; i < word1.length || i < word2.length;i++)
        {
            out.push(word1[p++]);
            out.push(word2[p2++]);
        }
    if(word1.length > i)
        {
            for(i; i < word1.length ; i++)
                {
                    out.push(word1[i++]);
                }
        }
    if(word2.length > i)
        {
            for(i; i < word2.length ; i++)
                {
                    out.push(word2[i++]);
                }
        }
    return out.join('');
};