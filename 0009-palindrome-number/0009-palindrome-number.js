/**
 * @param {number} x
 * @return {boolean}
 */
// Palindrome => left number = right number
// 121 > p1 = 1 > p2 = 1
//
var isPalindrome = function(x) {
    let outPut = true
    let xString = x.toString()
     
    const arr = []
    
    
    for(let i = 0; i < xString.length; i++)
        {
            arr.push(xString[i])
        }
    let p2 = arr.length-1
    for(let i = 0; i < arr.length; i++)
        {
            console.log("i="+xString[i])
            console.log(p2)
            if(arr[i] == arr[p2])
                {
                    p2--
                }
            else{
               outPut = false
            }
            
        }
    return outPut
}