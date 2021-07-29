/*
Changing Values for All Instances
By adding to the constructor, new instances will be given initial values when they are created. However, the code below will give all instances the exact same values, "Leo" and "3", when they are created. Let's learn how to change values for each instance freely from the next slide!

Constructor Arguments (1)
Constructors can receive arguments like the functions that you learned about in Study III. By writing the argument name within the parentheses () after constructor, the argument can be used within the process of the constructor.

Constructor Arguments (2)
When values are passed to the constructor as arguments, the values are added within the parentheses () of new className().
In the example below, the string value "Leo" is passed as an argument and can be accessed as name within the constructor.
*/

class Animal {
    // Add the arguments 「name」and「age」
    constructor(name, age) {
      // Replace the string value "Leo" with the value of the name argument
      this.name = name;
      
      // Replace the  value 「3」 with the value of the age argument
      this.age = age;
    }
  }
  
  // Pass the arguments 「"Mocha"」 「8」
  const animal = new Animal("Mocha", 8);
  
  console.log(`Name: ${animal.name}`);
  console.log(`Age: ${animal.age}`);  