//Given first node of a singly linked list, create a recursive function that
//returns number of nodes in that list. Assume list contains no loops and is
//short enough that you will not 'blow your stack'.

function rListLength(node,length)
{
    if(length === undefined) {
        length = 1;
    } else {
        length++;
    }
    if(node.next !== null) {
        return rListLength(node.next,length)
    } else {
        return length;
    }
}
