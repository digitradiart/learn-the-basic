/*
// Creating the Dog Class
We have created an Animal class that handles data for animals. Now, let's create a Dog class specifically for handling data for dogs. When the class you will create is the same kind as an existing class, inheritance can be very useful!

// What is Inheritance?
Inheritance is a way to create a new class based on an existing class.
For example, when the Dog class inherits from the Animal class, the Dog class will also have all of the methods defined in the Animal class.

// How to Use Inheritance
When creating a class using inheritance, use extends. To make the Dog class inherit from the Animal class, write class Dog extends Animal as shown below. Also, the class used as the base is called the parent class (here, the Animal class) while the new class is called the child class (the Dog class) 
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
  
  // Define the Dog class to inherit from the Animal class
  class Dog extends Animal {
    
  }
  
  
  const animal = new Animal("Leo", 3);
  animal.info();