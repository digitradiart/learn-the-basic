// When the Condition is not Met
// There are times when you need to call different code when the if statement's condition is false. For example, as shown below, you need to call different code to print "It is less than or equal to 10" when the value of number is not greater than 10.

// else Statement Structure
// As in the example below, by combining else with an if statement,
// you will be able to make a flow of control, such as "when X do Y_, if not do Z". When the if statement condition is false, the code in the else clause will run.

// Writing Code in else Statement
// Let us look at an actual code example that uses else.
// On the left, the result depends on whether or not the value the number constant is greater than 10 using only if statements.
// On the right is an example of how to do the same thing with just one conditional expression using an else statement.

const age = 17;

// When the condition is not met, output "I am under 18 years old"
if (age >= 18) {
  console.log("I am 18 or older");
} else {
  console.log("I am under 18 years old");
}