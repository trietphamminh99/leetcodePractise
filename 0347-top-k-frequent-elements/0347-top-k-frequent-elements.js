/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let map = new Map();
    let cnt = 0 ;
    let cur = nums[0]
    let out = []
    nums.sort((a,b) => (a-b))
    if (nums.length == 1)
    {
        out.push(1)
        return out
    }
    for (let i = 0 ; i <= nums.length; i++)
        {
            if (nums[i] != cur)
                {
                    if(!map.has(cnt))
                        {
                            map.set(cnt,[])
                        }
                    map.get(cnt).push(cur)
                    cur = nums[i]
                    cnt = 0
                }
            cnt++;
        }
    
    for(let i = nums.length; i >=0 ; i--)
        {
            if(map.has(i))
                {
                    if(k > 0){
                        let temp = Array.from(map.get(i))
                        
                        for (let j = 0; j < temp.length;j++)
                             {
                                 console.log(temp[j])
                                if(k >0)
                                    {
                                        out.push(temp[j])
                                        k--                                
                                    }
                                
                             }
                    }
                }
        }
    return out
};