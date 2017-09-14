package com.arnoldson;

import java.util.HashMap;
import java.util.Scanner;

public class Solution {
    public static HashMap<String, Integer> charMap(String str) {
        HashMap<String, Integer> charMap = new HashMap<String, Integer>();
        for (int i = 0; i < str.length(); i++) {
            String character = Character.toString(str.charAt(i));
            if (charMap.putIfAbsent(character, 1) != null) {
                Integer oldValue = charMap.get(character);
                charMap.put(character, oldValue + 1);
            }
        }
        return charMap;
    }

    public static int numberNeeded(String first, String second) {
        HashMap<String, Integer> charMap1 = charMap(first);
        HashMap<String, Integer> charMap2 = charMap(second);
        int num = 0;
        charMap2.forEach((k,v) -> {
            if (charMap1.putIfAbsent(k, v) != null) {
                Integer oldVal1 = charMap1.get(k);
                Integer oldVal2 = charMap2.get(k);
                Integer absDif = Math.abs(oldVal1 - oldVal2);
                charMap1.put(k, absDif);
            }
        });
        for (Integer val:
             charMap1.values()) {
            num += val;
        }
        return num;
    }

    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        String a = in.next();
        String b = in.next();
        System.out.println(numberNeeded(a, b));
    }
}
