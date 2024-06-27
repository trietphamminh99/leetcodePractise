/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const map = new Map()
    
    for (let i in nums)
        {
            if(!map.has(nums[i]))
                {
                    map.set(nums[i],1)
                }
            else{
                    map.set(nums[i], map.get(nums[i]) +1)
            }
        }
    const arr = Array.from(map.values()).sort((a,b) => a-b)
    let res = [];
    
    for (let i = arr.length-1; i >= 0 ; i --)
        {
            
            for(let key of map.keys())
                {
                   
                    if(map.get(key) == arr[i] && !res.includes(key))
                        {
                            res.push(key)
                        }
                    if(res.length == k)
                        {
                            return res;
                        }
                }
        }
};