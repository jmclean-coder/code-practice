/* Multiple Pointers

Creating pointers or values that correspond to an index or position and 
move towards the beginning, end, or middle based on a certain condition

VERY efficient for solving problems with minimal space complexity.

Example:

Write a function called sumZero which accepts a sorted array of integers. 
The function should find the first pair where the sum is 0. Return an array that 
includes both values that sum to zero or undefined if a pair does not exist


*/

//Naive = Time: O(N^2) Space: O(1)

function sumZero(sortedArray) {
  for (let i = 0; i < sortedArray.length; i++) {
    for (let j = i + 1; j < sortedArray.length; j++) {
      if (sortedArray[i] + sortedArray[j] === 0) {
        return [sortedArray[i], sortedArray[j]];
      }
    }
  }
}

//Refactored
// Time: O(N)
// Space: O(1)
function sumZeroTwo(sortedArray) {
    let left = 0
    let right = sortedArray.length -1 

    while (left < right){
        let sum = sortedArray[left] + sortedArray[right]
        if (sum === 0){
            return [sortedArray[left], sortedArray[right]]
        } else if (sum > 0){
            right--
        } else {
            left++
        }
    }
    
}

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3])); // [-3,3]
console.log(sumZero([-2, 0, 1, 3])); // undefined
console.log(sumZero([1, 2, 3])); // undefined



console.log(sumZeroTwo([-3, -2, -1, 0, 1, 2, 3])); // [-3,3]
console.log(sumZeroTwo([-2, 0, 1, 3])); // undefined
console.log(sumZeroTwo([1, 2, 3])); // undefined

