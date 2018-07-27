package com.structo.task2;

import java.util.NoSuchElementException;
import java.util.Scanner;

/**
 * Maximum chain length calculator!
 *
 */
public class ChainLengthCalculator {

    public static void main( String[] args ) {
        int i = 100; //Initializing i and j with default values
        int j = 200;
        Scanner scanner = null;
        
        System.out.println( "Chain Length Calculator" );
        System.out.println("Please enter the range of integers i and j:");
        
        try {
            scanner = new Scanner(System.in);
            i = scanner.nextInt();
            j = scanner.nextInt();
        } catch (NoSuchElementException | IllegalStateException ex) {
            System.out.println("Exception occurred " + ex);
            System.out.println("Taking default values for i and j");
        } finally {
            scanner.close();
        }
        
        int maxSoFar = 0;
        
        for(int x = i; x <= j; x++) {
            int chainLength = calculateChainLength(x, 0);
            if(chainLength > maxSoFar) {
                maxSoFar = chainLength;
            }
        }
        System.out.println("************** The maximum chain length for the given range is **************");
        System.out.println(maxSoFar);
        
    }
    
    private static int calculateChainLength(int n, int count) {
        count++;
        if (n != 1 || n == 0) {
            if (n % 2 != 0) {
                n = 3 * n + 1;
            } else {
                n = n / 2;
            }
            count = calculateChainLength(n, count);
        }
        return count;
    }

}
