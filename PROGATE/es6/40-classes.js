/*
Reviewing Objects
Before we learn about classes, let's review objects which were covered in JavaScript (ES6) Study Ⅱ. Objects are structures that allow you to manage data with pairs of properties and values.

Objects and Functions (1)
Object values can also be functions.
The way to write this is shown below. Also, to call a function, just write constantName.propertyName(). Note that you need () after the property name to indicate that the value is a function.

Let's look at an example!
Below on the left, an arrow function is used for the value corresponding to the greet property of the object. By writing user.greet(), you can call the function and print a message in the console.
*/


// Define the animal constant
const animal = {
    name: "Leo",
    age: 3,
    greet: () => {
      console.log("Hello");
    }
  };
  
  // Print the name property of the animal constant
  console.log(animal.name);
  
  // Call the animal's greet method property
  animal.greet();