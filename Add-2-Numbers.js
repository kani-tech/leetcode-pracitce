/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let len = l1.length;
    let list = new ListNode(0);
    let curr = list;
    let sum = 0;
    let carry = 0;
    
    while (1) {
        if (!l1 && !l2) {
            break;
        }
        if (l1 && l2) {
            sum = l1.val + l2.val + carry;
            l1 = l1.next;
            l2 = l2.next;
        } else if (l1) {
            sum = l1.val + carry;
            l1 = l1.next;
        } else {
            sum = l2.val + carry;
            l2 = l2.next;
        }
        
        
        if (sum > 9) {
            carry = 1;
            sum = sum % 10;
            // carry = sum % 10;
        } else {
            carry = 0;
        }
        
        curr.next = new ListNode(sum);
        curr = curr.next;
    }
    if (carry != 0) {
       curr.next = new ListNode(carry);
    }
    return list.next;
};
