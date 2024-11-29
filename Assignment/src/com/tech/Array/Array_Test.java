package com.tech.Array;

import java.util.Random;

//A. Create an array with the values (1, 2, 3, 4, 5, 6, 7) and shuffle it.

public class Array_Test {

	// Method to shuffle the array
	public static void shuffleArray(int[] array) {
		Random rand = new Random(); // Create a Random object for generating random numbers
		int n = array.length;

		// Implementing Fisher-Yates shuffle algorithm manually
		for (int i = n - 1; i > 0; i--) {
			// Generate a random index between 0 and i
			int j = rand.nextInt(i + 1);

			// Swap elements at indices i and j
			int temp = array[i];
			array[i] = array[j];
			array[j] = temp;
		}

	}

	public static void main(String[] args) {
		// Creating an array with values 1 to 7
		int[] array = { 1, 2, 3, 4, 5, 6, 7 };

		// Display the original array
		System.out.println("Original Array:");
		for (int num : array) {
			System.out.print(num + " ");
		}

		// Shuffle the array
		shuffleArray(array);

		// Display the shuffled array
		System.out.println("\nShuffled Array:");
		for (int num : array) {
			System.out.print(num + " ");
		}
	}

}
