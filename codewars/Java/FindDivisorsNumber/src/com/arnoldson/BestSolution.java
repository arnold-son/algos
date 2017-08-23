package com.arnoldson;

import java.util.stream.IntStream;

public class BestSolution {
    public long numberOfDivisors(int n) {
        return IntStream.range(1, n+1).filter(i -> n%i==0).count();
    }
}
