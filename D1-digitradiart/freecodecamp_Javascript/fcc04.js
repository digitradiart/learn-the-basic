// Basic JavaScript: Manipulate Arrays With shift()

// pop() always removes the last element of an array. What if you want to remove the first?

// That's where .shift() comes in. It works just like .pop(), except it removes the first element instead of the last.

var ourArray = ["Stimpson", "J", ["cat"]];
var removedFromOurArray = ourArray.shift();
// removedFromOurArray now equals "Stimpson" and ourArray now equals ["J", ["cat"]].
console.log(removedFromOurArray);


// Basic JavaScript: Manipulate Arrays With unshift()

// Not only can you shift elements off of the beginning of an array, you can also unshift elements to the beginning of an array i.e. add elements in front of the array.

// .unshift() works exactly like .push(), but instead of adding the element at the end of the array, unshift() adds the element at the beginning of the array.


var ourArray2 = ["Stimpson", "J", "cat"];
var arr1 = ourArray2.shift(); // ourArray now equals ["J", "cat"]
console.log(arr1)

var arr2 = ourArray2.unshift("Happy");
// ourArray now equals ["Happy", "J", "cat"]
console.log(arr2);
