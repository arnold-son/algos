package com.company;

class Solution {
    static int stray(int[] numbers) {
        int curr;
        int prev;
        int next;
        int stray = numbers[0];

        for (int i = 0; i < numbers.length; i++) {
            curr = numbers[i];
            prev = i < 1 ? numbers[numbers.length-1]:numbers[i-1];
            next = i > numbers.length-2 ? numbers[0]:numbers[i+1];
            if (curr != prev && curr != next) stray = numbers[i];
        }
        return stray;
    }
}