/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    let string = ''
    for (char of address) {
        if (char === '.') {
            string += '[.]'
        } else {
            string += char;
        }
    }
     return string;
};
