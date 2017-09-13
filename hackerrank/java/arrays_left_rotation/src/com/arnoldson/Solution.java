package com.arnoldson;

import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;

public class Solution {
    /* @param intArray int[] - array of integers
    @param num int - number of times to rotate
    @param direction boolean - rotates left if true, right if false
     */
    static int[] rotate(int[] intArray, int num, boolean direction) {
        // return if no rotations are needed
        if (num < 1) {
            return intArray;
        }
        // array returns to original state at multiples of its length, so it only needs to rotate num % intArray.length
        num %= intArray.length;
        // rotating left x times is equal to rotating length - x times to the right; decide to flip rotation if shorter:
        if (num > intArray.length - num) {
            num = intArray.length - num;
            direction = !direction;
        }
        // rotating left if direction is true:
        if (direction == true) {
            int tmp = intArray[0];
            for (int i = 0; i < intArray.length; i++) {
                if (i == intArray.length - 1) {
                    intArray[i] = tmp;
                } else {
                    intArray[i] = intArray[i + 1];
                }
            }
            // rotating right:
        } else {
            int tmp = intArray[intArray.length - 1];
            for (int i = intArray.length - 1; i >= 0; i--) {
                if (i == 0) {
                    intArray[i] = tmp;
                } else {
                    intArray[i] = intArray[i - 1];
                }
            }
        }
        num--;
        return rotate(intArray, num, direction);
    }

    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int n = in.nextInt();
        int k = in.nextInt();
        int a[] = new int[n];
        for(int a_i=0; a_i < n; a_i++){
            a[a_i] = in.nextInt();
        }
        rotate(a, k, true);
        for (int i = 0; i < a.length; i++) {
            System.out.print(a[i] + " ");
        }
    }
}