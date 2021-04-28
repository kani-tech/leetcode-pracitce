/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let counter = 0;
        for (let i = 0; i < jewels.length; i++) {
            for (char of stones) {
                if (jewels[i] == char) {
                    counter++;
                }
            }
        }
    return counter;
};
