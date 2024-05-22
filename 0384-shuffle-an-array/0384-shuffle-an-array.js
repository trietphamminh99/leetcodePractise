/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
    this.nums = nums
};

/**
 * @return {number[]}
 */
Solution.prototype.reset = function() {
    return this.nums
};

/**
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
    let r = 0;
    let arr = [...this.nums]
    for(let i = 0 ; i < arr.length; i++)
        {
            r = Math.floor(Math.random() * (arr.length  -i))+i
            let temp = arr[i];
            arr[i] =arr[r]
            arr[r] = temp
        }
    return arr
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */