// Basic JavaScript: Manipulate Arrays With push()
// An easy way to append data to the end of an array is via the push() function.
// .push() takes one or more parameters and "pushes" them onto the end of the array.

var arr1 = [1,2,3];
arr1.push(4);
// arr1 is now [1,2,3,4]
console.log(arr1);

var arr2 = ["Stimpson", "J", "cat"];
arr2.push(["happy", "joy"]);
// arr2 now equals ["Stimpson", "J", "cat", ["happy", "joy"]]
console.log(arr2);

// Setup
var myArray = [["John", 23], ["cat", 2]];

// Only change code below this line
myArray.push(['dog', 3]);
console.log(myArray);