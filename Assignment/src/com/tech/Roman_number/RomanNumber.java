package com.tech.Roman_number;

import java.util.Scanner;

//B. Enter a Roman Number as input and convert it to an integer. (ex IX = 9)

public class RomanNumber {

	// Method to convert Roman numeral to integer
	public static int romanToInt(String s) {
		int total = 0;
		int prevValue = 0;

		// Iterate through the Roman numeral string from right to left
		for (int i = s.length() - 1; i >= 0; i--) {
			char currentChar = s.charAt(i);
			int currentValue = romanCharToInt(currentChar);

			// If current value is less than previous value, subtract it, otherwise add it
			if (currentValue < prevValue) {
				total -= currentValue;
			} else {
				total += currentValue;
			}

			prevValue = currentValue; // Update previous value
		}

		return total;
	}

	// Helper method to map Roman numeral characters to integers
	public static int romanCharToInt(char c) {
		switch (c) {
		case 'I':
			return 1;
		case 'V':
			return 5;
		case 'X':
			return 10;
		case 'L':
			return 50;
		case 'C':
			return 100;
		case 'D':
			return 500;
		case 'M':
			return 1000;
		default:
			return 0; // Invalid character (for error handling)
		}
	}

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);

		// Get user input for Roman numeral
		System.out.print("Enter a Roman numeral: ");
		String roman = scanner.nextLine().toUpperCase(); // Convert to uppercase for consistency

		// Convert Roman numeral to integer
		int integerValue = romanToInt(roman);

		// Output the result
		System.out.println("Roman numeral " + roman + " is equal to " + integerValue);

		scanner.close();
	}

}
