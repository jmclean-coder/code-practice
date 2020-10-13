/*

Implement a function called countUniqueValues, which accepts a sorted array, 
and counts the unique values in the array. 
There can be negative numbers in the array, but it will always be sorted.

Restate:

Write a function that counts values, but only the first time they appear in the array
return the count

inputs:
 an array of sorted numbers, 
can be negative numbers, 
can be single element or empty array

outputs: the number of unique values

*/

function countUniqueValuesWithMultiplePointersImmutable(sortedArray) {
  // if the array length is 0, then it's empty and we're done

  if (!sortedArray.length){
    return 0
  }

  //make pointers, moving from either end
  let left = 0
  let right = sortedArray.length - 1
  //make storage of unique values, 
  //start are 1 because the first element will be unique
  let uniqueValues = 1

  //while left is less than right, loop
  while (left < right) {
    //if the left value is equal to the right value, break from loop
    if (sortedArray[left] === sortedArray[right]){
      break
    }
    //if the left is less than the array length minus one, 
    //we know we are comparing values on the left pointer side of array
    // else we are comparing values on the right side pointer of array
    // is left always less than or equal to array length minus 1
    if (left <= sortedArray.length - right){
      if (sortedArray[left] !== sortedArray[left + 1]){
        uniqueValues++
      }
      left++
    } else {
      if (sortedArray[right] !== sortedArray[right - 1]){
        uniqueValues++
      }
      right--
    }
  }
  return uniqueValues
}

  /* Breakdown:

     [1, 2, 3, 4, 5, 6] ind 0-5, length 6
     right is length of the array - 1 => 5

     continue iterating while left is less than right 
                               >>>       |       <<<

     At the first iteration: left is 0 and right is 5
     the lines below evaluate as 0 is less than or equal to (6 - 5) = 1 => true
     Since true, we stay within this first block, the pointer going from left to right
     compare if the left pointer is not equal to the left pointer + 1 (the element next door)
     if true, increment uniqueValues

     At the second iteration: left is 1 and right is 5
     the lines below evaluate as: 1 is less than or equal to (6 - 5) = 1 => true
     Since true, we stay within this first block, the pointer going from left to right
     compare if the left pointer is not equal to the left pointer + 1 (the element next door to the right)
     if true, increment uniqueValues
     increment right after 

     At the third iteration: left is 2 and right is 5
     the lines below evaluate as: 2 is less than or equal to (6 - 5) = 1 => false
     Since false, we go to the else which handles the pointer going right to left
     compare if the right pointer is not equal to the right pointer - 1( the element next door to the left)
     if true increment uniqueValues\
     increment left after

     
     return the final count of unique values
    */

console.log(countUniqueValuesWithMultiplePointersImmutable([1, 1, 1, 1, 1, 2])); // 2
console.log(countUniqueValuesWithMultiplePointersImmutable([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
console.log(countUniqueValuesWithMultiplePointersImmutable([])); // 0
console.log(countUniqueValuesWithMultiplePointersImmutable([-2, -1, -1, 0, 1])); // 4

//Mutable Solution

function countUniqueValuesWithMultiplePointersMutable(sortedArray){
  //if sorted array length is 0(falsy) or 1 return those numbers

  if(!sortedArray.length){
    return 0
  }
  if(sortedArray === 1){
    return 1
  }
  //make pointers
  let pointer1 = 0
  let pointer2 = 1
  //while fast pointer is less than array length
  while (pointer2 < sortedArray.length){
    //if the the value of the array at p1 does not equal the value of the array at p2
    if(sortedArray[pointer1] !== sortedArray[pointer2]){
      // move p1 forward
      pointer1++
      // set the value of the array at p1 to the value of the array at p2
      sortedArray[pointer1] = sortedArray[pointer2]
    }
    // increment p2 outside of check
    pointer2++
  }
  return pointer1 + 1
}


/* explanation:

*/

console.log(countUniqueValuesWithMultiplePointersMutable([1, 1, 1, 1, 1, 2])); // 2
console.log(countUniqueValuesWithMultiplePointersMutable([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
console.log(countUniqueValuesWithMultiplePointersMutable([])); // 0
console.log(countUniqueValuesWithMultiplePointersMutable([-2, -1, -1, 0, 1])); // 4


// 3. Using frequency counter

function countUniqueValuesWithFrequencyCounter(sortedArr) {
  const frequencyCounter = sortedArr.reduce((accum, current) => {
      accum[current] = accum[current] + 1 || 1;
      return accum;
  }, {});
  return Object.keys(frequencyCounter).length;
}

console.log(countUniqueValuesWithFrequencyCounter([1, 1, 1, 1, 1, 2])); // 2
console.log(countUniqueValuesWithFrequencyCounter([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
console.log(countUniqueValuesWithFrequencyCounter([])); // 0
console.log(countUniqueValuesWithFrequencyCounter([-2, -1, -1, 0, 1])); // 4

