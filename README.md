# Question: How do you reverse a linked list both iteratively and recursively? JavaScript Summary

The JavaScript code provided defines a function to create a linked list node, and two functions to reverse a linked list, one using an iterative approach and the other using a recursive approach. The `ListNode` function creates a new node with a value and a reference to the next node. The `reverseListIteratively` function uses a while loop to traverse the linked list, reversing the direction of the pointers at each node. It uses a temporary variable to hold the next node before changing the pointer direction. The `reverseListRecursively` function uses a base case to stop the recursion when it reaches the end of the list, then reverses the direction of the pointers. It uses a temporary variable to hold the reversed list. The code then creates a linked list with three nodes and tests both the iterative and recursive functions, outputting the results to the console.

---

# TypeScript Differences

The TypeScript version of the solution is more structured and object-oriented compared to the JavaScript version. Here are the main differences:

1. TypeScript uses classes and interfaces for better structure and type safety. In the TypeScript version, a `Node` class and a `LinkedList` class are defined. The `Node` class has properties `value` and `next`, and the `LinkedList` class has a `head` property and methods to manipulate the linked list. This makes the code more readable and maintainable.

2. TypeScript provides static typing. The properties and parameters of the classes and methods are typed, which can help prevent bugs and make the code easier to understand.

3. The `append` method in the TypeScript version is used to add new nodes to the linked list. This is more convenient than manually creating and linking nodes as in the JavaScript version.

4. The `print` method in the TypeScript version is used to print the linked list to the console. This is not present in the JavaScript version.

5. The `reverseIteratively` and `reverseRecursively` methods in the TypeScript version are methods of the `LinkedList` class and operate on the `head` property of the class. In the JavaScript version, these functions are standalone and take a `head` parameter.

6. The TypeScript version uses `null` checks (`!node` or `!node.next`) in the `reverseRecursively` method and in the `append` method, while the JavaScript version uses strict equality checks (`head === null` or `head.next === null`). Both approaches are used to handle the end of the list, but the TypeScript version is more concise.

Overall, the TypeScript version is more robust and easier to use due to its object-oriented design and type safety features.

---

# C++ Differences

The C++ version of the solution uses a similar approach to the JavaScript version, but there are some differences due to the language features and syntax.

1. Data Structure: In JavaScript, the linked list node is created using a function constructor `ListNode`, while in C++, a `struct` named `Node` is used to define the linked list node.

2. Memory Allocation: In JavaScript, memory allocation is handled automatically, but in C++, we need to manually allocate memory using the `new` keyword.

3. Null/None: In JavaScript, `null` is used to represent the absence of value or no object. In C++, `NULL` is used for the same purpose.

4. Iterative Reversal: Both versions use three pointers (prev, current, next) to reverse the linked list iteratively. The main difference is that in C++, the head of the list is updated at the end of the `reverseIterative` function, while in JavaScript, the new head (prev) is returned.

5. Recursive Reversal: Both versions use a similar recursive approach to reverse the linked list. The main difference is that in C++, the head of the list is updated in the `reverseRecursive` function when the base case is reached, while in JavaScript, the new head is returned.

6. Function Definitions: In JavaScript, functions are defined using the `function` keyword, while in C++, functions are defined without any keyword, but the return type must be specified.

7. Printing: In JavaScript, `console.log` is used to print the reversed list, while in C++, `std::cout` is used for printing.

8. Main Function: In C++, the `main` function is the entry point of the program, where the linked list is created, reversed, and printed. In JavaScript, there is no main function, and the code is executed sequentially from top to bottom.

---
