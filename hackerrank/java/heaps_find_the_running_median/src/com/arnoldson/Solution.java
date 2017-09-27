package com.arnoldson;

import java.util.*;
        import java.util.Comparator;
        import java.util.PriorityQueue;
        import java.util.Queue;

public class Solution {

    static class Bin {
        private Queue<Integer> lowerHalfMaxHeap = new PriorityQueue<>(Comparator.reverseOrder());
        private Queue<Integer> higherHalfMinHeap = new PriorityQueue<>();

        private void add(int number) {
            Queue<Integer> target = lowerHalfMaxHeap.size() == higherHalfMinHeap.size()
                    ? lowerHalfMaxHeap : higherHalfMinHeap;
            target.add(number);
            sortHeaps();
        }
        private void sortHeaps() {
            if (!lowerHalfMaxHeap.isEmpty() && !higherHalfMinHeap.isEmpty()
                    && lowerHalfMaxHeap.peek() > higherHalfMinHeap.peek()) {
                int temp = lowerHalfMaxHeap.poll();
                lowerHalfMaxHeap.add(higherHalfMinHeap.poll());
                higherHalfMinHeap.add(temp);
            }
        }
        public double reportMedian() {
            return lowerHalfMaxHeap.size() == higherHalfMinHeap.size()
                    ? (lowerHalfMaxHeap.peek() + higherHalfMinHeap.peek()) / 2.0 : lowerHalfMaxHeap.peek();
        }
    }

    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int n = in.nextInt();
        Bin data = new Bin();
        for(int a_i=0; a_i < n; a_i++){
            data.add(in.nextInt());
            System.out.println(data.reportMedian());
        }
    }
}
