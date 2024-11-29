//B. Perform sorting of an array in descending order.

// Function to perform sorting in descending order using Bubble Sort
function bubbleSortDescending(arr) {
    let n = arr.length;

    // Traverse through all elements in the array
    for (let i = 0; i < n - 1; i++) {
        // Last i elements are already sorted
        for (let j = 0; j < n - i - 1; j++) {
            // If the current element is smaller than the next one, swap them
            if (arr[j] < arr[j + 1]) {
                // Swap elements at index j and j+1
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

// Test the function
let array = [5, 3, 8, 1, 2, 7];
console.log("Original Array: ", array);
let sortedArray = bubbleSortDescending(array);
console.log("Sorted Array in Descending Order: ", sortedArray);
