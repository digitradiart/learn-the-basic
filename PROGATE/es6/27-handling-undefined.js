// Avoiding undefined
// In the last exercise, when a value that does not exist was printed, as shown in the example below, "undefined years old" was printed.
// Instead, let's make it so that "My age is a secret!" is printed.

// undefined and if Statements
// Let's use undefined in some conditional statements (if and else).
// We will have a flow of control for when the value of characters.age is equal to undefined or not.

const characters = [
    {name: "Ken the Ninja", age: 14},
    {name: "Master Wooly", age: 100},
    {name: "Ben the Baby Ninja", age: 5},
    {name: "Birdie"}
  ];
  
  for (let i = 0; i < characters.length; i++) {
    console.log("--------------------");
    
    const character = characters[i];
    
    console.log(`My name is ${character.name}`);
    
    // Add an if statement below
    if(character.age === undefined) {
      console.log("My age is a secret!");
    } else {
      console.log(`I am ${character.age} years old`);
    }
  }