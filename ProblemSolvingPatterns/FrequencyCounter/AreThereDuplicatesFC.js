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
  console.log(arguments)
  for (let index in arguments) {
    // val is the index
    console.log(index);
    frequencyCounter[arguments[index]] =
      (frequencyCounter[arguments[index]] || 0) + 1;
  }

  console.log(frequencyCounter);

  for (let key in frequencyCounter) {
    if (frequencyCounter[key] > 1) {
      return true;
    }
  }
  return false;
}

// function areThereDuplicates() {
//   //edge cases
//   if (arguments.length === 0) {
//     return null;
//   }
//   if (arguments.length === 1) {
//     return false;
//   }
//   // Make a counter object to track frequency of argument occurence
//   let counter = {};
//   // iterate over all arguments, for each argument:
//   // if the argument doesn't exist as a key in the counter, create
//   // that argument's key at set it's value to 0 OR increment it by 1
//   for (let i = 0; i < arguments.length; i++) {
//     // console.log(arguments[i]);
//     if (counter[arguments[i]] === undefined) {
//       counter[arguments[i]] = 1;
//     } else {
//       counter[arguments[i]] = counter[arguments[i]] + 1;
//     }
//   }
//   // iterate over the counter object, for each key:
//   // if the key's value is greater than 1
//   // return true

//   let keys = Object.keys(counter)
//   for (let i = 0; i < keys.length; i++){
//     if (counter[keys[i]] > 1) {
//       return true;
//     }
//   }
//   //otherwise:
//   //return false
//   return false
// }

console.log(areThereDuplicates(1, 2, 3, 4, 4)); // true
console.log(areThereDuplicates("a", "b", "c", "d", "d")); // true
console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates()); // null
