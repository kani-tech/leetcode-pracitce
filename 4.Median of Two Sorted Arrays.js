/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    let new_arr = [];
    let totalLength = nums1.length + nums2.length;
    let n1 = 0;
    let n2 = 0;
    if (totalLength <= 1) {
        if (nums1.length > nums2.length) {
            return nums1[0]
        } else if (nums2.length > nums1.length) {
            return nums2[0];
        } else {
            return 0;
        }
    }
 
    for (let i = 0; i < totalLength; i++) {
        if (n2 >= nums2.length && n1 < nums1.length) {
            new_arr.push(nums1[n1])
            n1++
        } else if (n1 >= nums1.length && n2 < nums2.length) {
            new_arr.push(nums2[n2])
            n2++
        }
        else if (nums1[n1] < nums2[n2]) {
            new_arr.push(nums1[n1]);
            n1++;
        } else {
            new_arr.push(nums2[n2]);
            n2++;
        }
    }
    let middle = Math.floor(totalLength / 2);
    if (totalLength % 2 === 0) {
        return (new_arr[middle - 1] + new_arr[middle]) / 2;
    } else {
        return new_arr[middle];
    }
}
