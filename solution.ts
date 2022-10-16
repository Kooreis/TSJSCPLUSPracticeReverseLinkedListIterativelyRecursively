Here is a TypeScript solution for reversing a linked list both iteratively and recursively:

```typescript
class Node {
    value: number;
    next: Node | null;

    constructor(value: number, next: Node | null = null) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    head: Node | null;

    constructor() {
        this.head = null;
    }

    append(value: number) {
        if (!this.head) {
            this.head = new Node(value);
            return;
        }

        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = new Node(value);
    }

    reverseIteratively() {
        let prev = null;
        let current = this.head;
        while (current) {
            let nextTemp = current.next;
            current.next = prev;
            prev = current;
            current = nextTemp;
        }
        this.head = prev;
    }

    reverseRecursively(node: Node | null = this.head) {
        if (!node || !node.next) {
            this.head = node;
            return;
        }
        this.reverseRecursively(node.next);
        node.next.next = node;
        node.next = null;
    }

    print() {
        let current = this.head;
        let result = '';
        while (current) {
            result += current.value + ' -> ';
            current = current.next;
        }
        console.log(result + 'null');
    }
}

let list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);
console.log('Original List:');
list.print();
list.reverseIteratively();
console.log('List Reversed Iteratively:');
list.print();
list.reverseRecursively();
console.log('List Reversed Recursively:');
list.print();
```

This code defines a `Node` class and a `LinkedList` class. The `LinkedList` class has methods to append a new node, reverse the list iteratively, reverse the list recursively, and print the list. The `reverseIteratively` method uses a while loop to reverse the list, and the `reverseRecursively` method uses recursion to reverse the list. The `print` method prints the list to the console. The code then creates a new linked list, appends some nodes, and demonstrates reversing the list both iteratively and recursively.