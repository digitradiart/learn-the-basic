// Return Value Types
// Just like arguments, you can use different value types for return values.
// For example, a boolean (true or false) value will be returned if you use a conditional statement like the conditions used in if statements.

// Ending a Function with Return
// Let's learn about return statements in more detail.
// You can also use return to exit a function. However, it's important to note that the code after return will not run.

const check = (number) => {
    // Check whether or not number is a multiple of 3 and return the result
    return number%3 === 0;
  };
  
  // Call the check function in the condition of the if statement
  if (check(123)) {
    console.log("Multiple of 3");
  } else {
    console.log("Not a multiple of 3");
  }