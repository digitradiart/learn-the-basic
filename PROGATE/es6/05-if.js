// When if statements are used, the conditional branching, "when X do Y", is enabled. Write the condition behind the if and write the code for when the condition is valid inside the { } brackets.
// Get an idea of how to write if statements with the examples below.

// Let us look at the code in practice.
// First, on the left is an example of a conditional statement. The condition number > 10 means "the value of the number constant is greater than 10." As 12 is assigned to the number constant, this condition applies, and the code runs.

// When writing if statements, be sure to indent. Properly indented code is easier to read. The indentation in the example below makes it clear where the if statement begins. Though it's easier to indent with the tab key, you can use the space bar as well.

const level = 12;

// Add an if statement with the condition: level > 10
if(level > 10) {
  console.log('Your level is higher than 10');
}