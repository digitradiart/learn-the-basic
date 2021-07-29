// Functions with Multiple Arguments
// Functions can receive multiple arguments. You can pass multiple arguments by writing them together in the parentheses and separating them with commas ,. In the function definition in the example below (left), the parameters are written as parameter1, parameter2, .... 

// Using Multiple Arguments
// Just like when you define multiple parameters, use commas ,to separate multiple arguments when you call a function.
// The arguments must be in the same order as the parameters because the function definition is used for the function call.

// Add the parameters number1 and number2 to the function 
const add = (number1, number2) => {
    // Print the sum of number1 and number2
    console.log(number1 + number2);
  };
  
  // Call the function with 5 and 7 as arguments
  add(5,7);