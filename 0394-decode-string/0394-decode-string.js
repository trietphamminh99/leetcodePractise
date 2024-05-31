/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    let i = 0;
    let stack = [];
    
    while (i < s.length)
        {
           console.log(s[i])
            if (s[i] != "]")
                {
                   stack.push(s[i]);
                   i++
                    
                }
            else{
                
                
                console.log("run else ")
                let ds = "";
                let num = "";
                let k = stack.length-1

                while (k < stack.length)
                    {
                        if(stack[k] != "[")
                            {
                                ds  = stack[k]+ds ;
                                stack.pop()
                                k--
                            }
                        else{
                            break
                        }
                    }
                k = k-1
                stack.pop()
                console.log(ds)
                console.log(stack)
                while ( k >=0 && stack[k] != "[")
                    {
                        if (!isNaN(parseInt(stack[k]))){
                            num = stack[k] + num;
                            stack.pop()
                        }
                        k--
                    }
                console.log(stack)
                console.log(parseInt(num))
                for (let i = 0; i < parseInt(num); i++)
                    {
                        stack.push(ds)
                    }
                console.log(stack)
                i++
                
            }      
        }
    return stack.join('')
};