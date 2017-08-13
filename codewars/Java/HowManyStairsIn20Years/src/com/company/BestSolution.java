package com.company;

import java.util.Arrays;

public class BestSolution
{
    public static long stairsIn20(int[][] stairs)
    {
        return 20 * Arrays.stream(stairs).flatMapToInt(arr -> Arrays.stream(arr)).sum();
    }
}