/*
Implement a function called areThereDuplicates which accepts a variable number of arguments, 
and checks whether there are any duplicates among the arguments passed in.
*/

function areThereDuplicates() {
  console.log(arguments);
  //edge cases
  if (arguments.length === 0) {
    return null;
  }
  if (arguments.length === 1) {
    return false;
  }

  let frequencyCounter = {};
  for (let val in arguments) {
    console.log(val);
    frequencyCounter[arguments[val]] =
      (frequencyCounter[arguments[val]] || 0) + 1;
  }

  console.log(frequencyCounter);

  for (let key in frequencyCounter) {
    if (frequencyCounter[key] > 1) {
      return true;
    }
  }
  return false;
}

areThereDuplicates(1, 2, 3, 4, 4); // true
areThereDuplicates("a", "b", "c", "d", "d"); // true
areThereDuplicates(1, 2, 3); // false
areThereDuplicates(); // null
