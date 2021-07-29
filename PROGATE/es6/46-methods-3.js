/* 
Using Methods within Methods
It is also possible to call methods within other methods.
As in the example below, other methods in the same class can be used by writing this.methodName() within the method.
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
      // Call the greet method
      this.greet();
      console.log(`My name is ${this.name}`);
      console.log(`I'm ${this.age} years old`);
    }
  }
  
  const animal = new Animal("Leo", 3);
  // Remove the line below
  // animal.greet();
  
  animal.info();