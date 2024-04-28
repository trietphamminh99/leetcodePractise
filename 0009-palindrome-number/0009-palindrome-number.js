/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    
    let arr = String(x).split('');
    let R = arr.length-1;

    for (let i = 0 ; i < arr.length; i++)
        {
            if(arr[i] != arr[R])
                {
                    return false
                }
            R--
        }
    return true
};