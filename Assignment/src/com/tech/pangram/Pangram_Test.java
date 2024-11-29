package com.tech.pangram;

import java.util.Scanner;

//C. Check if the input is pangram or not. (Pangram is a sentence that contains all the alphabet from a-z)

public class Pangram_Test {

	// Method to check if the sentence is a pangram
	public static boolean isPangram(String sentence) {
		// Convert the sentence to lowercase
		sentence = sentence.toLowerCase();

		// Create an array to track the occurrence of each letter (a-z)
		boolean[] alphabetTracker = new boolean[26];
		int uniqueLettersCount = 0;

		// Traverse through the sentence and mark the letters
		for (int i = 0; i < sentence.length(); i++) {
			char c = sentence.charAt(i);

			// Only consider alphabetic characters (a-z)
			if (c >= 'a' && c <= 'z') {
				int index = c - 'a'; // Calculate the index for the letter
				if (!alphabetTracker[index]) {
					alphabetTracker[index] = true; // Mark the letter as found
					uniqueLettersCount++; // Increment unique letter count
				}
			}
		}

		// If all 26 letters have been found, it's a pangram
		return uniqueLettersCount == 26;
	}

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);

		// Get input sentence from user
		System.out.print("Enter a sentence to check for Pangram: ");
		String sentence = scanner.nextLine();

		// Check if the sentence is a pangram
		if (isPangram(sentence)) {
			System.out.println("The sentence is a Pangram.");
		} else {
			System.out.println("The sentence is not a Pangram.");
		}

		scanner.close();
	}

}
