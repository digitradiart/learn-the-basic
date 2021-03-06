// Using Nested Objects
// Objects can be used instead of strings and integers as values in an object. In the example below, an object is used as the value for the favorite property in the character object.

const cafe = {
    name: "Progate Cafe",
    businessHours: {
      // Assign the provided object to businessHours
      opening: "10:00(AM)",
      closing: "8:00(PM)"
    },
  };
  
  // Print "Name: ____"
  console.log(`Name: ${cafe.name}`);
  
  // Print "Hours: From ____ to ____
  console.log( `Hours: From ${cafe.businessHours.opening} to ${cafe.businessHours.closing}`);