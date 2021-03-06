const number1 = 103;
const number2 = 72;
const number3 = 189;

// Write a function called getMax to get the maximum value
const getMax = (a,b,c) => {
  var max = a;
  if (b > max) {
    max = b;
  } else if (c > max) {
    max = c;
  }
  return max;
}

// Print "The maximum value is __"
result = getMax(number1, number2, number3);
console.log(`The maximum value is ${result}`);