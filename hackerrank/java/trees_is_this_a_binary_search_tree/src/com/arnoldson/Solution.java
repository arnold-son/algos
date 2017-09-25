package com.arnoldson;

public class Solution {
    static class Node {
        int data;
        Node left;
        Node right;
    }

    boolean checkBST(Node root) {
        return helper(root, Integer.MIN_VALUE, Integer.MAX_VALUE);
    }
    boolean helper(Node node, Integer min, Integer max) {
        if (node.data <= min || node.data >= max) {
            return false;
        }
        boolean isLeftValid = node.left == null || helper(node.left, min, node.data);
        boolean isRightValid = node.right == null || helper(node.right, node.data, max);
        return isLeftValid && isRightValid;
    }

    public static void main(String[] args) {
	// write your code here
    }
}
