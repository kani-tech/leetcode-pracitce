/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let max = 0;
    for (let i = 0; i < candies.length; i++) {
        if (candies[i] > max) {
            max = candies[i];
        }
    }
    let boolArr = [];
    for (let i = 0; i < candies.length; i++) {
        if (candies[i] + extraCandies >= max) {
            boolArr.push(true);
        } else {
            boolArr.push(false);
        }
    }
    return boolArr;
};
