/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    let out = [];
    for (let i = 1; i <= n; i++)
        {
            
            if (i % 3 == 0 && i % 5 == 0)
                {
                    out.push("FizzBuzz")
                   
                }
            
                else if (i % 3 == 0)
                    {
                        out.push("Fizz")     
                    }
                else if (i % 5 == 0)
                    {
                        out.push("Buzz")        
                    }
           
            else{
                let temp = i
                out.push(temp.toString())
            }
        }
    return out
};