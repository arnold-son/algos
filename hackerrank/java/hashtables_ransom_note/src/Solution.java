import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class Solution {
    static boolean canCreateRansom(String[] magazine, String[] ransom) {
        Map<String, Integer> magazineWords = new HashMap<String, Integer>();
        for (String word:
             magazine) {
            Integer oldValue = magazineWords.putIfAbsent(word, 1);
            if (oldValue != null) {
                magazineWords.put(word, oldValue + 1);
            }
        }
        for (String word:
             ransom) {
            Integer wordsAvailable = magazineWords.get(word);
            if (wordsAvailable == null) {
                return false;
            } else if (wordsAvailable == 1) {
                magazineWords.remove(word);
            } else {
                magazineWords.put(word, wordsAvailable - 1);
            }
        }
        return true;
    }

    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int m = in.nextInt();
        int n = in.nextInt();
        String magazine[] = new String[m];
        for(int magazine_i=0; magazine_i < m; magazine_i++){
            magazine[magazine_i] = in.next();
        }
        String ransom[] = new String[n];
        for(int ransom_i=0; ransom_i < n; ransom_i++) {
            ransom[ransom_i] = in.next();
        }
        if (canCreateRansom(magazine, ransom)) {
            System.out.println("Yes");
        } else {
            System.out.println("No");
        }
    }
}
