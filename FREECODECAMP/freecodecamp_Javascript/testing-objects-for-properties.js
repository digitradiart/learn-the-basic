function checkObj(obj, checkProp) {
  // Only change code below this line
  if (obj.hasOwnProperty(checkProp) == true) {
    return obj[checkProp];
  } else {
    return "Not Found";
  }
}

checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "gift");