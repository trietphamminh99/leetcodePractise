/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    s = s.split('');
        let l = 0 ;
        let arr = []
        
        const map = new Map()
        map.set(')','(');
        map.set('}','{')
        map.set(']','[')
        for (let i = 0 ; i < s.length ; i ++)
         {
            if(!map.get(s[i]))
            {
                arr.push(s[i])
            }
            else{
                if (arr.length == 0)
                {
                    return false
                }
                if (map.get(s[i]) == arr[arr.length-1])
                {
                    arr.pop();

                }
                else{
                    return false
                }
            }
         }
         if(arr.length == 0)
         {
            return true
         }
         else 
         {
            return false
         }
};