// arrayManipulation.js

// Task 1: Function to process the array
function processArray(arr) {
  return arr.map((x) => (x % 2 === 0 ? x ** 2 : x * 3));
}

// Task 2: Function to format strings based on processed numbers
function formatArrayStrings(strings, numbers) {
  return strings.map((str, index) => {
    return numbers[index] % 2 === 0 ? str.toUpperCase() : str.toLowerCase();
  });
}

// Exporting the functions for use in other files
module.exports = {
  processArray,
  formatArrayStrings,
};

