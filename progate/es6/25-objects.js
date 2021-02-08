// Objects as Arrays Elements
// From here, let us look at arrays which have objects as elements.
// Array elements not only can be strings and integers, but can also be objects.
// Due to this characteristic, arrays like in the left figure can be created.
// Here, to prevent the code from becoming too long, elements are frequently started as new lines.

// Getting Objects in Arrays
// Do you remember that index numbers are given to every element in an array? In arrays like the one shown below, the array values are objects. To access these objects, use arrayName[indexNumber].

// Getting Object Values within Arrays
// Also, arrayName[indexNumber].propertyName can be used to get property values of objects stored in an array.
// This might look a little complicated, but it's just a combination of what you have already learned! Try reviewing any parts of the lesson that you didn't understand well by reviewing the slides.

const characters = [
    {name: "Ken the Ninja", age: 14},
    {name: "Master Wooly", age: 100},
    {name: "Ben the Baby Ninja", age: 5},
  ];
  
  // Complete the for loop
  for (let i = 0; i < characters.length ; i++) {
    console.log("--------------------");
    
    // Define the character constant
    const character = characters[i];
    
    // Print "My name is ____"
    console.log(`My name is ${character.name}`);
    
    // Print "I am ____ years old"
    console.log(`I am ${character.age} years old`);
  }



// Arrays in Objects (2)
// Arrays & Iteration
// Let's review arrays with objects as elements and iteration by writing code to solve some problems! We'll print the profile (name & age) of each character as shown below.