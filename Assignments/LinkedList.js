// Problem 1:
// Question : Reverse linked list
// Problem statement : Reverse a singly linked list
// Input Description:
// -head: The head of a singly linked list
//output Description: 
// -The head of the reversed linked list.

// solution:
class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function reverseLinkedList(head) {
    let prev = null;
    let current = head;
    let next = null;

    while (current !== null) {
        // Store the next node
        next = current.next;
// Reverse current nodes pointer
        current.next = prev;
       // Move pointers one position forward
        prev = current;
        current = next;
    }

    // At the end of the loop prev will be the new head
    return prev;
}



console.log(reverseLinkedList(head);)
