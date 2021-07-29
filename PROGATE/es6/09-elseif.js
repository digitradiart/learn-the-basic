// Adding Conditions
// Let's look at ways to add more conditions to if and else statements. For example, we will learn how to add control flow to include the condition that is not "larger than 10" but "larger than 5".

// Writing else if Statements
// As in the example below, by adding an else if (condition) between if and else, you will be able to add more control flow.
// Let's look at the next slide for a more detailed explanation.

// else if codes
// Let's see how to use else if in some actual code.
// As in the example on the left, the content of the function else if will run because the second conditional statement is true. This is printed in the console as we can see on the right.

const age = 17;

// When age is 10 or more but less than 18, output:
// "I am under 18 but over 9 years old"
if (age >= 18) {
  console.log("I am 18 or older");
} else if (age >= 10) {
  console.log("I am under 18 but over 9 years old");
} else {
  console.log("I am under 10 years old");
}