var middleNode = function(head) {
    let slow = head
    let fast = head

    while(fast && fast.next){   // while fast != null && fast.next !== null
        
        // check that fast.next not null coz for case of 2 middle nodes, we pick 2nd node

        fast = fast.next.next
        slow = slow.next

        return slow
    }
}