let currentInput = '';  // Holds the current input in the display

// Function to append numbers and operators to the display
function appendToDisplay(value) {
    currentInput += value;  // Add the clicked button value to the input
    document.getElementById('display').value = currentInput;
}

// Function to clear the display
function clearDisplay() {
    currentInput = '';  // Reset the current input
    document.getElementById('display').value = currentInput;
}

// Function to calculate the result of the input expression
function calculate() {
    try {
        // Use the eval function to evaluate the mathematical expression
        currentInput = eval(currentInput).toString();
        document.getElementById('display').value = currentInput;
    } catch (error) {
        document.getElementById('display').value = 'Error';  // If there's an error in the calculation
    }
}
