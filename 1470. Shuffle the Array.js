/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    let arr = [];
    let y = nums.slice(n)
    
    for (let i = 0; i < y.length; i++) {
        arr.push(nums[i])
        arr.push(y[i])
    }
    return arr;
};
