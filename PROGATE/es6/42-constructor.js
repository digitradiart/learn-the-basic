/*
So far, in this lesson, you have learned how to create instances based on a blueprint (class). However, since we have not added any content to the class, it is still a blank blueprint. Next, we'll add content to the blueprint.

What are Constructors?
Classes often have a special method called a constructor. The constructor is used to give initial values to new instances. To add a constructor to a class, write constructor() { } inside the {} brackets of the class as shown below.


Code Inside Constructors
As shown below, instructions and other code can also be written inside constructors. The code written there will be called when the instance is created. The important thing to remember is that it will be called for every instance. As new Animal() is written twice in the figure below, the content within the constructor will be called for each.
*/

class Animal {
    // Add a constructor
    constructor() {
      console.log("Created a new instance");
    }
  }
  
  const animal = new Animal();