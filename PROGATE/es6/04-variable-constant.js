// Variables
// From here on, we will learn about variables.
// You can think of variables as "boxes" that contain data values (strings, integers, etc). Let's see this in more detail in the next slide. 

// Declaring Variables
// To declare a variable, just write let variableName = value.
// The = symbol in programming does not mean "equal". It means assign the what's on the right side to the left side. let is a declaration that "we will define a variable", the variable name is written after this keyword and then the value is assigned. 

// How to Use Variables
// Variables are easy to use. As you can see below, when the variable name is assigned the value, "John", console.log(name) will print John. You can use variables just like you would use the values inside them.

// Variables and Strings
// As you might have noticed, you don't need to put variables in quotes. When a variable name is put in quotes, like console.log("name");, name will be interpreted as a string instead of a variable. Because of this, it will just be printed as name.

// Declare the name variable with the string value "Ken the Ninja"
let name = "Ken the Ninja";

// Output the value of the name variable
console.log(name);

// Characteristics of Variables

// Variables can be used in the exact same way as strings and integers that we have learned so far.
// The value assigned to a variable can be combined with other strings or used in calculations with other integers.
// Declare the length variable
let length = 5;

// Output the value of the length variable
console.log(length);

// Use the length variable to output the circle's area
console.log(length * length * 3);


// Updating Variables
// When using variables, you will be able to change the value that you assigned. When you assign a new value to a variable that you already assigned a value to, the new value will overwrite the old one.
// As opposed to when you define the variable, you do not need to use let. Writing variableName=value will change the value.

// How Variables are Updated
// Look at the imagery of updating the variable in the bottom figure.
// Codes will be called in order from the top, so the variable value will be updated with the value assigned later on.

let name = "Ken the Ninja";
console.log(name);

// Update the name variable with the value "Birdie"
name = "Birdie";

// Output the value of the name variable
console.log(name);

// Updating a Variable Using its Current Value
// How can we add 3 to the value of the number variable that is already declared?
// As shown below, you can do this by assigning number + 3 to the number variable. This way, the result of the calculation will be assigned to the variable on the left.
// There are shorthand forms for code like number = number + 10. These are used frequently, so try to remember the examples below!
let number = 7;
console.log(number);

// Add 3 to the value of the number variable
number = number + 3;

console.log(number);

// Divide the value of the number variable by 2
number = number / 2;

console.log(number);


// What are Constants?
// Constants are similar to variables.
// Instead of let, these are defined using the keyword const.
// See more about the differences between them in the next slide.

// The Difference Between Constants & Variables
// As you can see in the example on the left, variables can be updated. However, constants cannot be updated. When you try to update the value of a constant, as shown on the right, it will cause an error.

// Benefits of Using Constants
// The benefit of constants is that you cannot change the value afterwards. This may seem inconvenient at first sight. However, this prevents unwanted updates and makes your code safer. The more code you write, the more you will see how beneficial this can be. From here on, we will mostly use constants instead of variables in this lesson.

// Declare the language constant
const language = "French";

// Output the value of the language constant
console.log(language);

// Use the language constant to output "I can speak ____"
console.log("I can speak " + language);


// Template Literals
// Up until now, we have used the plus (+) symbol to combine strings and constants. In ES6, there is another way to connect these by using a new feature called template literals. With template literals, you can embed constants (variables) inside a string, as shown below.
// Let's look at the next slide for more information. 

// How to Write Template Literals
// As you can see in the example on the left, you can embed constants and variables in strings by writing ${someConstant}. When doing this, you must put the entire string in backticks (`). It is also possible to embed multiple variables and constants as shown in the example on the right.


// Typing Backticks (Web Only)
// The figure below illustrates how to type backticks on the keyboard.
// This character may be in a different location depending on the kind of computer you are using.

const name = "Ken the Ninja";
const age = 14;

// Output the string "My name is ____"
console.log(`My name is ${name}`);

// Output the string "Today I am ____ years old"
console.log(`Today I am ${age} years old`);