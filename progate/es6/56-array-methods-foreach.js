/*
// forEach
The forEach method is used to repeat the same code for every value in an array, one at a time. Below is an example of how to print each value in the numbers array in order. Let's see more about how this works in the next slides.

// How forEach works
The argument of the forEach method is an arrow function which we introduced in the ES6 Study III. Each array value is assigned to the argument of the arrow function, one at a time, in order, and the code in the arrow function gets applied to each value. Note: many of the methods you'll learn in this lesson are used with an arrow function.

// How to Use forEach
Below is an example of how to use the forEach method.
Each value in the numbers array is assigned to the number argument in the arrow function one-by-one. Then, the code inside the arrow function (console.log(number)) will be repeated for each value.

// Callback functions
Functions that are written as an arguments in another function call are also called callback functions. We will be using callback functions a lot in this course, so be sure to remember them!

// Multi-line Callback Functions
When a callback function is put in an argument like in the forEach method, the code can become too long. In this case, it's better to write your code as shown below. Using multiple lines after { will make the code easier to read and understand.
*/
const characters = ["Ken the Ninja", "Ben the Baby Ninja", "Master Wooly", "Birdie"];

// Print all elements in the characters array by using the forEach method
characters.forEach((character)=>{ //multi-line callback function
  console.log(character);
});