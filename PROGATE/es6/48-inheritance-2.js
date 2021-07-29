/*
Inherited Methods
The Dog class inherits all the methods of the Animal class. Because of this, even though no methods are declared in the Dog class, it can use the info method that is defined in the Animal class.
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
  }
  
  // Assign the Dog class instance to the dog constant
  const dog = new Dog("Leo", 4);
  
  // Call the dog instance's info method
  dog.info();