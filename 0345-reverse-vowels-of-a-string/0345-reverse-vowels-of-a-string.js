/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
  const vowels = ['a','e','i','o','A','E','I','O','u','U'];
    let arr = s.split('')
    let R = arr.length-1;
    let L = 0;
  
    while (L < R)
        {
        
            if(!vowels.includes(arr[L]))
                {
                    L++
                }
            else if(!vowels.includes(arr[R]))
                {
                    R--
                }
             else
                 
               {
                   [arr[L], arr[R]] = [arr[R], arr[L]]
                    L++
                    R--
                }

        }
    return arr.join("")
};