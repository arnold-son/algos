package com.company;
import java.util.stream.*;

public class BestSolution {
    public static int findShort(String s) {
        return Stream.of(s.split(" "))
                .mapToInt(String::length)
                .min()
                .getAsInt();
    }
}