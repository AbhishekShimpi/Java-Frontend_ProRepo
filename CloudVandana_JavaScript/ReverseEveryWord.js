//A. Take a sentence as an input and reverse every word in that sentence.

function reverseWords(sentence) {
    // Split the sentence into words based on spaces
    let words = splitIntoWords(sentence);
    
    // Reverse each word manually
    for (let i = 0; i < words.length; i++) {
        words[i] = reverseWord(words[i]);
    }
    
    // Join the words back into a sentence
    return words.join(' ');
}

// Function to manually split the sentence into words
function splitIntoWords(sentence) {
    let words = [];
    let word = '';
    
    // Traverse through the sentence character by character
    for (let i = 0; i < sentence.length; i++) {
        let char = sentence[i];
        
        // If the character is a space, we finish the current word and push it to the array
        if (char === ' ') {
            if (word.length > 0) {
                words.push(word);
                word = '';
            }
        } else {
            word += char;  // Append the character to the current word
        }
    }
    
    // Push the last word if there is one
    if (word.length > 0) {
        words.push(word);
    }
    
    return words;
}

// Function to reverse a single word manually
function reverseWord(word) {
    let reversedWord = '';
    
    // Traverse the word from the end to the start
    for (let i = word.length - 1; i >= 0; i--) {
        reversedWord += word[i];  // Append the character in reverse order
    }
    
    return reversedWord;
}

// Test the function
let sentence = "my name is Abhishek";
let result = reverseWords(sentence);
console.log(result);  // Output: "ym eman si kehsihbA"
