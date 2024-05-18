/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  let one = 1;
  let two = 1;
    
  for(let i = 0; i < n-1;i++)
      {
        console.log(one)
        console.log(two)
          
        let ew = one + two;
          console.log(ew)
        two = one;
        one = ew
      }
    return one
    
};