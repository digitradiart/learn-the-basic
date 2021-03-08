/*
// Adding Methods
// Child Class Methods
Methods can be added to classes created using inheritance in the same way as normal classes. Below, you can see a getHumanAge method that converts a dog's age to human years.

// Return Values in Methods
In methods, return values can be used just like in functions.
Below, the return value of the getHumanAge method is assigned to the humanAge constant.

// Accessing Child Class Methods
Methods that are only defined in a child class cannot be called from the parent class. As you can see below, it will cause an error when you try to call the getHumanAge method with an instance of the Animal class.
*/

class Animal {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    
    greet() {
      console.log("Hello");
    }
    
    info() {
      this.greet();
      console.log(`My name is ${this.name}`);
      console.log(`I'm ${this.age} years old`);
    }
  }
  
  class Dog extends Animal {
    // Add the getHumanAge method
    getHumanAge() {
      return this.age*7;
    }
  }
  
  const dog = new Dog("Leo", 4);
  dog.info();
  
  // Call the dog instance's getHumanAge method
  const humanAge = dog.getHumanAge();
  
  // Output 「I am __ years old in human years」
  console.log(`I am ${humanAge} years old in human years`);