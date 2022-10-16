```cpp
#include <iostream>

struct Node {
    int data;
    Node* next;
};

Node* head = NULL;

void insert(int data, int n) {
    Node* temp1 = new Node();
    temp1->data = data;
    temp1->next = NULL;
    if (n == 1) {
        temp1->next = head;
        head = temp1;
        return;
    }
    Node* temp2 = head;
    for (int i = 0; i < n - 2; i++) {
        temp2 = temp2->next;
    }
    temp1->next = temp2->next;
    temp2->next = temp1;
}

void print() {
    Node* temp = head;
    while (temp != NULL) {
        std::cout << temp->data << " ";
        temp = temp->next;
    }
    std::cout << "\n";
}

void reverseIterative() {
    Node *current, *prev, *next;
    current = head;
    prev = NULL;
    while (current != NULL) {
        next = current->next;
        current->next = prev;
        prev = current;
        current = next;
    }
    head = prev;
}

Node* reverseRecursive(Node* p) {
    if (p->next == NULL) {
        head = p;
        return p;
    }
    Node* q = reverseRecursive(p->next);
    q->next = p;
    p->next = NULL;
    return p;
}

int main() {
    insert(5, 1);
    insert(4, 2);
    insert(3, 3);
    insert(2, 4);
    insert(1, 5);
    std::cout << "Original List: ";
    print();
    reverseIterative();
    std::cout << "List after iterative reversal: ";
    print();
    reverseRecursive(head);
    std::cout << "List after recursive reversal: ";
    print();
    return 0;
}
```