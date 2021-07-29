/*
Constants Inside Functions
Arguments of a function and constants defined within a function can only be used within that function. In the example below, the name constant can only be used within the introduce function because it is defined inside the function. If you try to use the name constant outside of the function, it will cause an error.

If a constant is defined outside of a function, it can be used both inside and outside of it. In the example below, the name constant is defined outside of the introduce function, so it can be used inside and outside of the function.


-----------------
Scope of Constants
Each constant has a part of a program where it can be accessed, and we call this the scope of a constant.


*/

// Define the name constant
const name = "Ken the Ninja";

const introduce = (name) => {
  // Print "I am ____" in the console
  console.log(`I am ${name}`);
  
};

// Call the introduce function
introduce("Master Wooly");

// Print the value of the name constant
console.log(name);