// Arrow Functions (1)

// As shown in the example on the right, it's also possible to define a function with () => instead of function().
// This is an easier way of defining a function, which is a new feature of ES6. Functions defined this way are called arrow functions.

// Arrow Functions (2)

// Arrow functions don't require any other changes to the definition besides replacing function with () =>. There is also no difference when you call functions defined this way.
// So, from this exercise on, let's use arrow functions.

// Assign an arrow function to the greet constant
const greet = () => {
    console.log("Hello!");
}
  
// Call the greet function
greet();