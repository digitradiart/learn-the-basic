// How to Write switch Statements (1)
// Let's look at how to write switch statements!
// As in the example on the left, switch(conditional value) { code } enables you to create switch statements.
// On the right is an example of defining a color constant and running different code depending on the value of color. 

// How to Write switch Statements (2)
// Codes can be divided by adding case to the switch statement.
// In the example on the right, the word "Stop!" is printed when the color constant is "red".
// We will explain break later.

// How to Write switch Statements (3)
// In switch statements, case is added for every logical branch. In the right-hand example, "yellow" is assigned to the second case value and "Slow down!" is printed.

// Important Points About switch Statements
// Also, break is extremely important for switch statements. break is a command to end cases in switch statements. If there is no break, the code of the next case from the case that matches will be called as well. Be careful not to forget break when using switch statements

const rank = 2;

switch (rank) {
  case 1:
    console.log("You won a gold medal!");
    break;

  // Add a case for when rank is 2
  case 2:
    console.log("You won a silver medal!");
    break;
  // Add a case for when rank is 3
  case 3:
    console.log("You won a bronze medal!");
    break;
}