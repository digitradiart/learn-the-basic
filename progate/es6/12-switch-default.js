// switch Statements - default

// As you learned earlier, when the value of the switch condition matches the value for a certain case, that part of the code runs. However, when a value does not match any of the conditions, the default case will be called. Default is similar to else used for if-statements.


// switch statements - default
// Taking advantage of this aspect of switch statements, you can use them to simplify a complicated flow control that would require many branches using if and else if statements.

const rank = 5;

switch (rank) {
  case 1:
    console.log("You won a gold medal!");
    break;
  case 2:
    console.log("You won a silver medal!");
    break;
  case 3:
    console.log("You won a bronze medal!");
    break;
  // Add a default case
  default:
    console.log("Better luck next time");
    break;
}