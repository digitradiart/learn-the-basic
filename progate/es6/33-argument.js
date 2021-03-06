// What are Arguments?
// Data values passed to functions are called arguments.
// You can use these values inside the function by passing the value when you call the function.

// Defining Function with Arguments
// Let's define a function that can receive arguments.
// The values passed when you call a function are called arguments, but the variables written in the definition are called parameters.
// As shown below, arguments can be passed to a function by writing the name of the parameter in parentheses, like this (parameter) =>.

// Calling Functions with Arguments
// To call a function and pass arguments, write functionName(arguments). Functions accept the designated value and the value will be assigned to arguments. In the image on the right, "Ken the Ninja" value is assigned to name parameter when calling introduce function.

// Using Argument Values Inside Functions
// You can use arguments within functions just like constants and variables.
// Check how functions accept arguments with the image below.

// Add the name parameter to the function
const greet = (name) => {
    // Print the message "Hello, ____"
    console.log(`Hello, ${name}`);
};
  
// Call the greet function with "Master Wooly" as the argument
greet("Master Wooly");