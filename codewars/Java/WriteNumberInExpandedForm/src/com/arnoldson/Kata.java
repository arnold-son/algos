package com.arnoldson;

public class Kata
{
    public static String expandedForm(int num)
    {
        String zeroes = "";
        String result = "";
        while (num > 0) {
            int extractedNumber = num % 10;
            num = num / 10;
            if (extractedNumber > 0) {
                String convertedNumber = Integer.toString(extractedNumber);
                convertedNumber = convertedNumber.concat(zeroes);
                result = convertedNumber.concat(result);
                if (num > 0) {
                    result = " + ".concat(result);
                }
            }
            zeroes = zeroes.concat("0");
        }
        return result;
    }
}
