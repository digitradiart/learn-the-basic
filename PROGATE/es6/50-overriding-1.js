/*
// Overriding (1)
// Methods of the Same Name
We have already learned that child classes can use both methods in the parent class and child class.
But, what happens when a method with the same name as a method in the Animal class (parent class) is declared in the Dog class (child class)?
Which method is called?


// Override
When a method that has the same name as a method in the parent class is defined in the child class, the child class method is used.
Since the child class method overrides the parent class method, this is called overriding.

// Overriding the info Method
Here, let's print the human age of a dog using the info method of the Dog class. With the getHumanAge method that you declared in the page before, rewrite it as shown below.

// Parent and Child Methods
Using the figure below as reference, confirm which methods can be used in the Dog class (child class).
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
    // Add the info method
    info() {
      this.greet();
      console.log(`My name is ${this.name}`);
      console.log(`I'm ${this.age} years old`);
      
      const humanAge = this.getHumanAge();
      console.log(`I am ${humanAge} years old in human years`);
    }
    
    getHumanAge() {
      return this.age * 7;
    }
  }
  const dog = new Dog("Leo", 4);
  dog.info();