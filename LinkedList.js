class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}


const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');
const e = new Node(1);
const f = new Node(2);
const g = new Node(3);
const h = new Node(4);

a.next = b;
b.next = c;
c.next = d;
// d.next = e; // to make them two seperate linked lists so I can test zipperlists
e.next = f;
f.next = g;
g.next = h;


const printLinkedListIterative = (head) => {
    let current = head;
    while(current != null){
        console.log(current.val);
        current = current.next;
    }
}

const printLinkedListRecursive = (head) => {
    if(head == null) return;
    console.log(head.val);
    printLinkedListRecursive(head.next);
}

const addLinkedListValuesToArray = (head) => {
    const values = [];
    let current = head;
    while(current != null){
        values.push(current.val);
        current = current.next;
    }
    return values;
}

const addLinkedListValuesToArrayRecursive = (head) => {
    const values = [];
    fillValues(head, values);  // run the recursion in a diff fn so you don't create multiple arrays and make the big O to be O(n^2)
    return values;
}

const fillValues = (head, values) => {
    if(head == null) return; 
    values.push(head.val);
    fillValues(head.next, values);
}

const sumValuesInLinkedList = (head) => {
    let sum = 0;
    let current  = head;
    while(current != null){
        sum += current.val;
        current = current.next;
    }
    return sum;
}

const sumValuesInLinkedListRecursive = (head) => {
    if(head == null) return 0; 
    return head.val + sumValuesInLinkedListRecursive(head.next);
}

const findValueInLinkedList = (head, target) => {
    let current = head;
    while(current != null){
        if(current.val == target) return true;
        current = current.next;
    }
    return false;
}

const findValueInLinkedListRecursive = (head, target) => {
    if(head == null) return false; 
    if(head.val == target) return true;
    return findValueInLinkedListRecursive(head.next, target);
}

const getValueAtNodeIndex = (head, index) => {
    let current = head;
    let count = 0;
    while(current != null){
        if(count == index) return current.val;
        count++;  // +=1
        current = current.next;
    }   
    return null;  // for when specified index is more than available nodes
}

const getValueAtNodeIndexRecursive = (head, index) => {
    // so the first value(head) would receive the current index we looking for
    // so as we go to the next head, we reduce the index

    if(head == null) return null;  // the index they entered is more than the nodes available is taken care of with this
    if(index == 0) return head.val  // found the node
    return getValueAtNodeIndexRecursive(head.next, index -1);   
}

const reverseLinkedList = (head) => {  // null -> A -> B -> C -> D -> null
    let prev = null;
    let current = head;
    while(current != null){
        const next = current.next;
        current.next = prev;
        prev = current; 
        current = next;
    }
    return prev;  // new head of the reversed LinkedList
}

const reverseLinkedListRecursive = (head, prev = null) => {
    if (head == null) return prev;
    const next = head.next;
    head.next = prev;
    return reverseLinkedListRecursive(next, head);
}

const zipperLists = (head1, head2) => {
    // create a new linked list from two linked lists by interchangeably adding nodes from each list

    let tail = head1;
    let current1 = head1;
    let current2 = head2;
    let count = 0;

    while(current1 != null && current2 != null){
        if(count % 2 == 0){  // if even count, add from 2nd list, coz we starting from first node in first list
            tail.next = current2;
            current2 = current2.next
        }else{   // if odd, add from first list
            tail.next = current1;
            current1 = current1.next
        }
        tail = tail.next;
        count++;
    }
    if(current1 != null) tail.next = current1;
    if(current2 != null) tail.next = current2;

    return head1;
}

const zipperListsRecursive = (head1, head2) => {
    if(head1 == null && head2 == null) return null;
    if(head1 == null) return head2;
    if(head2 == null) return head1;

    const next1 = head1.next;
    const next2 = head2.next;
    head1.next = head2;
    head2.next = zipperListsRecursive(next1, next2);

    return head1;
}


// printLinkedListIterative(a);
// printLinkedListRecursive(a);
// console.log(addLinkedListValuesToArray(a));
// console.log(addLinkedListValuesToArrayRecursive(a));
// console.log(sumValuesInLinkedList(e));
// console.log(sumValuesInLinkedListRecursive(e));
// console.log(findValueInLinkedListRecursive(e, 3));
// console.log(getValueAtNodeIndexRecursive(e, 3));
// console.log(reverseLinkedList(e));
console.log(zipperLists(a, e));
// console.log(zipperListsRecursive(a, e));