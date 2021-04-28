/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let currMax;
    for (let i = 0; i < accounts.length; i++) {
        let currAcc = accounts[i].reduce( (acc, curr) => {
            return acc + curr
        }, 0);
        if (i == 0) {
            currMax = currAcc;
        } else if (currMax < currAcc) {
            currMax = currAcc;
        }
    }
    return currMax
};
