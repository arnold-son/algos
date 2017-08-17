package com.company;

public class Solution {
    public static int rowSumOddNumbers(int n) {
        int positionOfLastNumber = (n + 1) * n / 2;
        int lastNumber = positionOfLastNumber * 2 - 1;
        int firstNumber = lastNumber - (2 * (n - 1));
        return (firstNumber + lastNumber) * n / 2;
    }
}