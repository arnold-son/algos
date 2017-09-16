package com.arnoldson;

import java.util.LinkedList;

public class Main {
/*
Detect a cycle in a linked list. Note that the head pointer may be 'null' if the list is empty.

A Node is defined as:
    class Node {
        int data;
        Node next;
    }
*/
    static class Node {
        int data;
        Node next;
        Node(int data) {
            this.data = data;
        }
    }
    static boolean hasCycle(Node head) {
        if (head == null) {return false;}
        LinkedList<Node> visited = new LinkedList<Node>();
        Node runner = head;
        while (runner.next != null) {
            visited.add(runner);
            if (visited.contains(runner.next)) {
                return true;
            }
            runner = runner.next;
        }
        return false;
    }
    public static void main(String[] args) {
	// write your code here
        Node head1 = new Node(1);
        head1.next = null;
        Node head2 = new Node(1);
        head2.next = new Node(2);
        head2.next.next = new Node(3);
        head2.next.next.next = head2.next;

        System.out.println(hasCycle(head1));
        System.out.println(hasCycle(head2));
    }
}
