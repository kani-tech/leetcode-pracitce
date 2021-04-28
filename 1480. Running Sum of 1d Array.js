/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let counter = 0;
    let runningSum =[]
    for(let i = 0; i < nums.length; i++) {
        counter += nums[i];
        runningSum.push(counter);
    }
    return runningSum;
};
