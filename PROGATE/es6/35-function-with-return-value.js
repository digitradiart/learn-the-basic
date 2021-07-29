// What are Return Values?
// Next, we'll learn about using the results of a function at the place where it was called. The resulting value after a function is called as a return value. Most functions are used to send a return value back to where it was called. Below, the add function receives 3 and 7 and the return value 10 is returned.

// Functions with Return Values
// You can return a value by putting a return statement in a function by writing return value;. This will allow the function to return the output as a return value.

// Using Return Values
// If a function has a return value, the function call will be replaced by the return value after the function finishes running.
// As shown below, you can also assign a function call to a constant.

const half = (number) => {
    // Return the value of the number variable divided by 2
    return number/2;
  };
  
  // Define the result constant
  const result = half(130);
  
  // Print the message "Half of 130 is ____"
  console.log(`Half of 130 is ${result}`);