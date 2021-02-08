// Getting Elements that Do Not Exist
// You have already learned how to use arrays and objects.
// Here, let's see what happens when we try to access elements with an index number that does not exist in an array or when we specify properties that don't exist in an object.

// undefined
// As shown below, when you try to get elements with an index number that does not exist in the array, or when you try to get elements with a property that an object does not have, undefined is printed.

const characters = [
    {name: "Ken the Ninja", age: 14},
    {name: "Master Wooly", age: 100},
    {name: "Ben the Baby Ninja", age: 5},
    // Add an element here
    {name: "Birdie"}
  ];
  
  for (let i = 0; i < characters.length; i++) {
    console.log("--------------------");
    
    const character = characters[i];
    
    console.log(`My name is ${character.name}`);
    console.log(`I am ${character.age} years old`);
  } 

//   undefined and if Statements

//   Let's use undefined in some conditional statements (if and else).
//   We will have a flow of control for when the value of characters.age is equal to undefined or not.

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