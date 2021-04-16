/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = function (s) {
    if (s.length <= 1) {
        return s.length;
    }
    let count = 0;
    
    for (let i = 0; i < s.length; i++) {
        let curr_pos = i;
        let flipper = true;
        let my_arr = [];
        
        while (1) {
            my_arr.push(s[curr_pos]) 
            curr_pos++;
            
            if(my_arr.includes(s[curr_pos]) || curr_pos >= s.length) {
                if (my_arr.length > count) {
                    count = my_arr.length;
                }
                break;
            }
        }
    }
    return count
}
