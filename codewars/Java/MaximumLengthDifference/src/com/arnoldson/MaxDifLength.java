package com.arnoldson;

public class MaxDifLength {

    public static int mxdiflg(String[] a1, String[] a2) {
        if (a1.length < 1 || a2.length < 1) return -1;
        int min1 = a1[0].length();
        int max1 = a1[0].length();
        int min2 = a2[0].length();
        int max2 = a2[0].length();
        for (int i = 1; i < a1.length; i++) {
            if (min1 > a1[i].length()) min1 = a1[i].length();
            if (max1 < a1[i].length()) max1 = a1[i].length();
        }
        for (int i = 1; i < a2.length; i++) {
            if (min1 > a2[i].length()) min2 = a2[i].length();
            if (max2 < a2[i].length()) max2 = a2[i].length();
        }
        int MaxDif = max1 - min2 > max2 - min1 ? max1 - min2 : max2 - min1;
        return MaxDif;
    }
}
