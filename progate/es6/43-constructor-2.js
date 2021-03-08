/*
Adding Properties & Values
In the constructor, let's add information related to the created instance. To add properties and values in the constructor, write this.property = value.


Instances and Properties
As explained at the beginning, instances are objects. So by writing instance.property, values added within the constructor can be used outside the class.
*/

class Animal {
    constructor() {
      // Assign the string value 「Leo」 to the name property
      this.name = "Leo";
      // Assign the value 「3」 to the age property
      this.age = 3;
    }
  }
  
  const animal = new Animal();
  
  // Output 「Name: ____」
  console.log(`Name: ${animal.name}`);
  
  // Output 「Age: __」
  console.log(`Age: ${animal.age}`);