package com.company;

public class Kata {
    public static int findShort(String s) {
        String[] split = s.split(" ");
        int shortest = split[0].length();
        for (String word:
             split) {
            if (word.length() < shortest) shortest = word.length();
        }
        return shortest;
    }
}