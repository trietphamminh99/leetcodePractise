/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let arr = x.toString().split('')
    let L = 0;
    let R = arr.length-1;
    while(L < R)
        {
        
            if(arr[L] != arr[R] )
            {
                return false;
            }
            L++;
            R--;
        }
    return true
};