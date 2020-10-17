/*
Frequency Counter

This pattern uses objects or sets to collect values/frequencies of values. 
Usually o(n)

Great for:
Collect value and frequencies
Comparing multiple pieces of data or inputs
Contained in?
Anagram of ?

This can often avoid the need for nested loops or 
o(n^₂) operations with arrays or strings.

*/

//Example

/* 
Write a function called same, which accepts two arrays.
The function should return true if every value in array1 
has corresponding squares in array2. 
The frequency of values must be the same

Restate: Write a function that takes in two arrays and returns true if 
the second array has the same frequency of corresponding squares, and false otherwise.

Inputs: Two arrays of numbers: arr1 & arr2
Outputs: True if arr2 has the same frequency of squares of arr1
false if the frequency isnt the same
false if not numbers
false if not the squares




*/
//my 1st implematation O(n)


// function same(arr1, arr2) {
//   //make objects to store frequency of arr1 numbers
//   let values = {};
//   let squares = {};
//   //if two array have different lengths, we're done
//   if (arr1.length !== arr2.length) {
//     return false;
//   }

//   for (let i = 0; i < arr1.length; i++) {
//     let val = arr1[i];

//     if (!values[val]) {
//       values[val] = { value: val, freq: 1 };
//     } else {
//       values[val].freq++;
//     }
//   }
//   for (let i = 0; i < arr2.length; i++) {
//     let val = arr2[i];
//     console.log(val);

//     if (!squares[val]) {
//       squares[val] = { value: val, freq: 1 };
//     } else {
//       squares[val].freq++;
//     }
//   }

//   console.log(values);
//   console.log(squares);

//   for (const property in squares) {
//     let data = squares[property];
//     let root = Math.sqrt(data.value);
//     if (root === values[root].value && values[root].freq === data.freq) {
//       return true;
//     } else {
//       return false;
//     }
//     //for each value, check:
//     // -square root of the key is equal to the other key AND the frequency count is the same
//     // return true
//     //else, return false
//   }
// }

//Refactored
// O(n)
function sameThree(arr1, arr2){
      //if two array have different lengths, we're done
    if(arr1.length !== arr2.length){
        return false;
    }

    let frequencyCounter1 = {}
    let frequencyCounter2 = {}

    for(let val of arr1){
        //if frequencyCounter value exists increment it OR set it to 0
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }

    for(let val of arr2){
        //if frequencyCounter2 value exists increment it OR set it to 0
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1        
    }
    console.log(frequencyCounter1)
    console.log(frequencyCounter2)
    for(let key in frequencyCounter1){
        // if FC1 key^2 is not in FC2(squares), return false
        if(!(key ** 2 in frequencyCounter2)){
            return false
        }
        // if frequency values are not equal, return false
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
            return false
        }
    }
    return true
}




// O(n^₂) - Naieve
// function sameTwo(arr1, arr2){
//     //if two array have different lengths, we're done
//     if(arr1.length !== arr2.length){
//         return false;
//     }
//     /*
//     loop over 1st array
//     created correctindex to
//     call indexOf on arr2 passing in the square of the current value of arr1 to
//     "look at my squares array, find the index of the squared current value of arr1"

//     ================
//     The indexOf() method returns the first index at which a given
//     element can be found in the array, or -1 if it is not present.
//     ================

//     if correctindex is -1, the value isn't present, making the compairson false
    
//     otherwise splice to remove values from arr2 to shrink it as we fid matches
//     */
//     for(let i = 0; i < arr1.length; i++){
//         let correctIndex = arr2.indexOf(arr1[i] ** 2)
//         if(correctIndex === -1) {
//             return false;
//         }
//         arr2.splice(correctIndex,1)
//     }
//     return true
// }



// console.log(same([1, 2, 3], [4, 1, 9])); // true
// console.log(same([1, 2, 3], [1, 9])); // false
// console.log(same([1, 2, 1], [4, 4, 1])); // false (must be same frequency)


// console.log(sameTwo([1, 2, 3], [4, 1, 9])); // true
// console.log(sameTwo([1, 2, 3], [1, 9])); // false
// console.log(sameTwo([1, 2, 1], [4, 4, 1])); // false (must be same frequency)



console.log(sameThree([1, 2, 3], [4, 1, 9])); // true
console.log(sameThree([1, 2, 3], [1, 9])); // false
console.log(sameThree([1, 2, 1], [4, 4, 1])); // false



