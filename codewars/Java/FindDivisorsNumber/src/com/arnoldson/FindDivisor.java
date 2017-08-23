package com.arnoldson;

public class FindDivisor {

    public long numberOfDivisors(int n) {
        // TODO please write your code below this comment
        if (n == 0) return 0;
        if (n == 1) return 1;
        long count = 2;
        for (int i = 2; i < n; i++) {
            if (n % i == 0) count++;
        }
        return count;
    }

}