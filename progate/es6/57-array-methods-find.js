/*
// find
The find method gets the first value from the array that matches the given conditional expression. Below, the first value that is bigger than 3, in this case 5, is assigned to foundNumber, and then printed in the console. Let's see more about this in the next slides.

// How to Use find (1)
Below is an example of using the find method. For each element of the numbers array, the value is assigned to the number argument then the code is repeated. The code { return condition } returns the first value that matches the condition. find stops as soon as a match is found and returns only that value.

// How to Use find (2)
You can also use the find method with arrays of objects. As shown below, an object property can be used in the condition. In this case, find returns the entire object that contains the matching property.
*/

const numbers = [1, 3, 5, 7, 9];

// Find the multiples of 3 from the numbers array by using the find method, and assign them to the foundNumber constant
const foundNumber = numbers.find((number) => {
  return number * 3;
});

// Print foundNumber
console.log(foundNumber);

const characters = [
  {id: 1, name: "Ken the Ninja", age: 6},
  {id: 2, name: "Ben the Baby Ninja", age: 2},
  {id: 3, name: "Master Wooly", age: 100},
  {id: 4, name: "Birdie", age: 21}
];

// Find the object which id is 3 from the characters constant, and assign it to the foundCharacter constant
const foundCharacter = characters.find((character) => {
  return character.id === 3;
});

// Print foundCharacter
console.log(foundCharacter);