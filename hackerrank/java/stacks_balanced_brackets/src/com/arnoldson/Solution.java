package com.arnoldson;

import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;

public class Solution {

    public static boolean isBalanced(String expression) {
        if (expression.length() == 0 || expression.length() % 2 == 1) return false;
        Stack<Character> bracketsNeeded = new Stack<>();
        for (char c:
             expression.toCharArray()) {
            switch (c) {
                case '(':
                    bracketsNeeded.push(')');
                    break;
                case '{':
                    bracketsNeeded.push('}');
                    break;
                case '[':
                    bracketsNeeded.push(']');
                    break;
                default:
                    if (bracketsNeeded.empty() || bracketsNeeded.pop() != c) return false;
            }
        }
//        for (int i = 0; i < expression.length(); i++) {
//            char currentChar = expression.charAt(i);
//            switch (currentChar) {
//                case '(':
//                    bracketsNeeded.push(')');
//                    break;
//                case '{':
//                    bracketsNeeded.push('}');
//                    break;
//                case '[':
//                    bracketsNeeded.push(']');
//                    break;
//                default:
//                    if (bracketsNeeded.empty() || bracketsNeeded.pop() != currentChar) return false;
//            }
//        }
        return bracketsNeeded.empty();
    }

    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int t = in.nextInt();
        for (int a0 = 0; a0 < t; a0++) {
            String expression = in.next();
            System.out.println( (isBalanced(expression)) ? "YES" : "NO" );
        }
    }
}