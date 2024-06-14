/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let prefix = "";
    let p = 0
    let i = 0
    if (strs[0] == "")
        {
            return prefix
        }
    for (let i = 0 ; i < strs[0].length; i++)
        {
            console.log("strs[0][i]" + strs[0][i])
            for (let j = 0 ; j < strs.length; j++)
                {
                    
                    if(i == strs[j].length)
                        {
                            return prefix
                        }
                    console.log("strs[j][i] "+ strs[j][i])
                    if (strs[j][i] != strs[0][i])
                        {
                            return prefix
                        }
                }
            prefix += strs[0][i]
            console.log("prefix "+ prefix)
        }
    return prefix
};