package com.arnoldson;

import java.util.Scanner;

public class Solution {
    static void swap(int[] intArray, int a, int b) {
        int temp = intArray[a];
        intArray[a] = intArray[b];
        intArray[b] = temp;
    }
    static int bubbleSort(int[] intArray) {
        int numberOfSwaps = 0;
        boolean isSorted = false;
        while (!isSorted) {
            isSorted = true;
            for (int i = 0; i < intArray.length - 1; i++) {
                if (intArray[i] > intArray[i+1]) {
                    swap(intArray, i, i+1);
                    isSorted = false;
                    numberOfSwaps++;
                }
            }
        }
        return numberOfSwaps;
    }
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int n = in.nextInt();
        int[] intArray = new int[n];
        for (int i = 0; i < n; i++) {
            intArray[i] = in.nextInt();
        }
        System.out.println("Array is sorted in " + bubbleSort(intArray) + " swaps.");
        System.out.println("First Element: " + intArray[0]);
        System.out.println("Last Element: " + intArray[n-1]);
    }
}
