var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        let my_arr = [];
        my_arr.push(i);
        for (let j = 0; j < nums.length; j++) {
            if (j != i && nums[i] + nums[j] == target) {
                my_arr.push(j)
                return my_arr
            }
        }
    }
};
