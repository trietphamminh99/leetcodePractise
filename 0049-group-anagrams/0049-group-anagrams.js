/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let arr = new Map()
    for (let i = 0 ; i < strs.length ; i ++)
        {
            let temp = strs[i].split('').sort().join('');
            if(!arr.has(temp))
                {
                    arr.set(temp,[])
                }
            arr.get(temp).push(strs[i])
        }
    return Array.from(arr.values());
};