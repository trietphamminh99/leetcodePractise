/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let p1 = m-1;
    let p2 = n-1;
    let i = m+n-1
    while(p1 >=0 && p2 >=0)
        {
            console.log(nums1[p1])
            console.log(nums2[p2])
            if(nums2[p2] > nums1[p1])
                {
                    nums1[i] = nums2[p2]
                    p2--
                }
            else{
                nums1[i] = nums1[p1]
                p1--
            }
            i--
        }
    while(p2 >=0){
        nums1[i] = nums2[p2]
        i--;
        p2--
    }
};