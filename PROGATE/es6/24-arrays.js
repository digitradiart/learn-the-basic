// What is Iteration?
// Next, let's think about how to print numbers from 1 to 100!
// Like on the previous page, it's possible to just write the same code 100 times, but that would be too tedious. In this case, it's convenient to use something called iteration. Let's look at how this works on the next slide. 

// The while Loop
// One way to do iteration is to use while loops.
// They are written as shown in the example below. "While the condition is true", the content inside the {} brackets is repeated. You do not need to put a semicolon at the end of a while loop.

// Using while Loops (1)
// Let's look at while loops with the example of printing numbers from 1 to 100. First, we will write the content that will be repeated inside the { } (curly brackets). Here, we want to repeat the code outlined in green, so we will put it inside a while loop as shown on the right.

// Using while Loops (2)
// Next, let us add a condition to specify until when to repeat.
// Here, we want to repeat the content until number is less than or equal to 100, so we will write the conditional expression as shown on the left.
// First, the condition will be checked. If it's true, the code inside the {} will run and then the condition is checked once again.

// Important Notes on while Loops
// You must be careful when using while loops because the condition must eventually be false in order to stop the code from repeating.
// As shown on the left, the code to update number is missing, which causes the code to run endlessly (this is called an infinite loop).

// The for Loop
// There is another way to do iteration: for loops. While they basically accomplish the same thing, for loops can be written in a simpler form than while loops.
// Let's look at this in detail in the following slides.

// In for loops, the variable definition, the conditional expression, and the variable update are all written in the parentheses and separated by semicolons. The example on the left is a while loop and on the right is a for loop. Note the underlined parts as you compare them.

// Shorthand Operators
// The code number += 1 can be shortened to number++ for convenience. Also, when subtracting (decrementing), number -= 1 can be written as number--. The code to write while loops and for loops can be shortened as shown here, so try to remember them!

// Applying Iteration
// Lastly, let's try an advanced exercise using for loops.
// This time, we will still print numbers from 1 to 100. However, when the number is a multiple of 3, we'll print "Multiple of 3".

// Handling Multiple Values
// Let us learn about handling multiple values.
// For example, when there are names of different fruits as values, making something like a "fruit list" would be more convenient than defining them as separate variables.

// What Are Arrays?
// When you want to manage multiple values as a group, arrays are very useful. Arrays are created like [value1, value2, value3]. Each value in the array is called an element.
// When using arrays, groups of multiple strings or integers can be written together as shown on the right.

// Assigning Arrays
// Since arrays are also values, they can be assigned to constants or variables. In this case, the name of the constant that the array will be assigned to is often plural form (fruits, names, etc).
// When you print with console.log(variableName) as shown on the left, the array will be printed in the console.

// Index numbers
// Every array element has an index number. It's important to remember that index numbers start from 0.

// Getting Array Elements
// Let's learn how to get array elements using index numbers.
// Using array[indexNumber], will enable you to get array elements.
// For example, to get "apple" from the example below, you can write fruits[0] (0 is the index number of "apple").

// Updating Array Elements
// As in the example on the left, assigning a value to an array element will update the element.

// Iterating with Arrays
// There are times when iteration is used with arrays.
// Here, let us use a for loop to get each of the array elements.

// Arrays and for Loops
// When thefruits array has 3 elements, the code in the left example is required in order to print all the elements.
// In the example on the right, it has been re-written using a for loop. In this way, all the values within the array will be easily printed. Note that the variable value starts at 0.

// The length property
// To get the number of elements in the array you can write array.length as shown below. Also, with length, you can replace the condition of the for loop from the exercise to the condition in the example on the right. This is commonly used when working with arrays in loops.

const characters = [
    {name: "Ken the Ninja", age: 14},
    {name: "Master White", age: 1000}
  ];
  
  // Print the 1st element of the characters array
  console.log(characters[0]);
  
  
  // Print value of the name property of the character array's 2nd element
  console.log(characters[1].name);