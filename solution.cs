Here is a JavaScript solution for reversing a linked list both iteratively and recursively:

```javascript
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

// Iterative solution
function reverseListIteratively(head) {
    let prev = null;
    let current = head;
    while(current != null) {
        let nextTemp = current.next;
        current.next = prev;
        prev = current;
        current = nextTemp;
    }
    return prev;
}

// Recursive solution
function reverseListRecursively(head) {
    if(head === null || head.next === null) return head;
    let p = reverseListRecursively(head.next);
    head.next.next = head;
    head.next = null;
    return p;
}

// Test
let node3 = new ListNode(3, null);
let node2 = new ListNode(2, node3);
let node1 = new ListNode(1, node2);

console.log(reverseListIteratively(node1));
console.log(reverseListRecursively(node1));
```

This code first defines a `ListNode` function to create a linked list node. Then it defines two functions `reverseListIteratively` and `reverseListRecursively` to reverse a linked list iteratively and recursively, respectively. Finally, it creates a linked list with three nodes and tests the two functions.