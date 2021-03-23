/*
// The filter Method
To get all values that match a certain condition, use the filter method. It creates and returns a new array with all of the matching values. The example below shows how to get all values from the numbers array that are "greater than 3".

// How to Use filter (1)
In the example, a value from the numbers array is assigned to the number argument. Next, the value is checked with the condition "number greater than 3" inside the filter method. Then, the values that matched are assigned to the filteredNumber constant as an array.

// How to Use filter (2)
You can also use the filter method for arrays containing objects, just like find method. In the example below, an object property is used in the condition. In this case, the objects themselves are collected whenever the condition is true.
*/

const numbers = [1, 2, 3, 4];

// Get all even numbers from numbers with the filter method, and assign them to the evenNumbers constant
const evenNumbers = numbers.filter((number) => { return number % 2 === 0;
});

// Print the value of evenNumbers
console.log(evenNumbers);


const characters = [
  {id: 1, name:"Ken the Ninja", age: 14},
  {id: 2, name:"Ben the Baby Ninja", age: 5},
  {id: 3, name:"Master Wooly", age: 100}
];

// Get characters younger than 20, and assign them to the underTwenty constant
const underTwenty = characters.filter((character) => { return character.age < 20
});

// Print the value of underTwenty
console.log(underTwenty);