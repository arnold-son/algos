package com.arnoldson;

import java.util.HashMap;
import java.util.Scanner;

public class Solution {
    static class Node {
        HashMap<Character, Node> children;
        boolean isWord;
        int count;
        Node() {
            this.children = new HashMap<>();
            this.isWord = false;
            this.count = 0;
        }
        void add(String name) {
            if (name.length() == 0) return;
            count++;
            children.putIfAbsent(name.charAt(0), new Node());
            Node child = children.get(name.charAt(0));
            if (name.length() == 1) {
                child.isWord = true;
                child.count++;
            }
            child.add(name.substring(1));
        }
        int find(String partial) {
            if (partial.length() == 0) return count;
            Node next = children.get(partial.charAt(0));
            if (next == null) {
                return 0;
            } else {
                return next.find(partial.substring(1));
            }
        }
    }
    static class Trie {
        Node root;
        Trie() {
            this.root = new Node();
        }
        void add(String name) {
            root.add(name);
        }
        int find(String partial) {
            return root.find(partial);
        }
    }
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int n = in.nextInt();
        Trie contacts = new Trie();
        for(int a0 = 0; a0 < n; a0++){
            String op = in.next();
            String contact = in.next();
            if (op.equals("add")) {
                contacts.add(contact);
            } else if (op.equals("find")) {
                System.out.println(contacts.find(contact));
            }
        }
    }
}
