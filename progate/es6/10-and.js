// And
// Let's learn how to combine multiple conditions. First, we'll learn &&.
// Condition 1 && Condition 2 means "Condition 1 and Condition 2" and if all the conditions are all true, the whole expression is true. The "greater than 10 and less than 30" can't be written as 10 < x < 30. In this case, use &&!

// Or
// Next we will learn a symbol meaning "or". Or is expressed as ||.
// "Condition 1 || Condition 2" means "Condition 1 or Condition 2".
// In this case, among multiple conditions, if at least one is true, the whole expression becomes true.

// Examples of Combinations
// Let us see an example of if statements using "and".
// In the example on the left, both number >= 10 and number < 100 are true, so the function content is called.

const age = 24;

// Add an if statement with the specified conditions
if(age >= 20 && age <30) {
  console.log("I am in my 20s");
}