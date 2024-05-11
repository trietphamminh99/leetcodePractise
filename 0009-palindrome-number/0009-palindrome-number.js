/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
 let x1 =  String(x).split('');
 let L = 0; 
 let R = x1.length-1;
    while (L < R)
        {
            console.log(x1[R])
            if(x1[L] != x1[R])
                {
                    return false
                }
            L++;
            R--;
        }
    return true

};