/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
var decrypt = function(code, k) {
    let i = 0;
    let s = []
    while(i < code.length)
        {
            if(k==0)
            {
                s.push(k)
            }
            if (k > 0)
                {
                    let sum = 0;
                    let pos = i+1
                    for (let j = 0; j < k; j++)
                        {
                            
                            if(pos >= code.length)
                                {
                                    pos = 0
                                }
                            sum += code[pos]
                            pos++
                            
                        }
                    s.push(sum)
                    
                }
            if (k < 0)
                {
                    let sum = 0;
                    let pos = i-1
                    let cnt = Math.abs(k)
                    for (let j = 0; j < cnt ;j++)
                        {
                            
                            if(pos < 0 )
                                {
                                    pos = code.length-1
                                }
                            sum += code[pos]
                            
                            pos--
                        }
                    s.push(sum)
                }
            i++
        }
    return s
};