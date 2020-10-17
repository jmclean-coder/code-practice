/*
Sliding Window

This pattern involves creating a window which can either be an array or number from one position to another
Depending on a certain condition, the window either increases or closes (and a new window is created)

Very useful for keeping track of a subset of data in an array/string etc.

Examples

Write a function that finds the longest string of unique characters'
"hellothere" 

Write a function called maxSubarraySum which accepts an array of integers and a number called n. 
The function should calculate the maximum sum of n consecutive elements in the array.

maxSubarraySum([1,2,5,2,8,1,5],2) // 10
maxSubarraySum([1,2,5,2,8,1,5],4) // 17
maxSubarraySum([4,2,1,6],1) // 6
maxSubarraySum([4,2,1,6,2],4) // 13
maxSubarraySum([],4) // null

*/

//Naieve Solution
// Time Complexity O(N^2)
// this solution isn't great because if the array was big, say a million element and the number n were are comparing is 1000 or more,
// the nested loop wouldn't be so good

function maxSubArraySumNaieve(arr, num) {
    //if num is greater than lenght of array
  if (num > arr.length) {
    return null;
  }
  //account for negative numbers by starting here instead of 0
  var max = -Infinity;
  //beware the off by one error here
  // if the array length is 7 ans the numbe n is 2
  // 7 - 2
  // 5 + 1 = 6
  // this restricts the loop to the last element of the array
  for (let i = 0; i < arr.length - num + 1; i++) {
    temp = 0;
    //inner nested loop to look ahead num elements and sum them together
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }
    //if temp is greater than max, update max, 
    // keep checking until loop is finished, max sum will bne returned
    if (temp > max) {
      max = temp;
    }
    console.log(temp, max)
  }
  return max;
}

console.log(maxSubArraySumNaieve([1, 2, 5, 2, 8, 1, 5], 2)); // 10
console.log(maxSubArraySumNaieve([1, 2, 5, 2, 8, 1, 5], 4)); // 17
console.log(maxSubArraySumNaieve([4, 2, 1, 6], 1)); // 6
console.log(maxSubArraySumNaieve([4, 2, 1, 6, 2], 4)); // 13
console.log(maxSubArraySumNaieve([], 4)); // null


//Refactor

// Time Complexity  O(n)
function maxSubArraySumRefactored(arr, num){
    let maxSum = 0
    let tempSum = 0

    if (arr.length < num) return null
    //create first sum, by creating the first sum of num elements
    for(let i = 0; i < num; i++){
        maxSum += arr[i]
    }
    tempSum = maxSum

    for(let i = num; i < arr.length; i++){
        //instead of recalculating everything, subtract the first number, then add the next number, sliding the summing window up one index
        tempSum = tempSum - arr[i - num] + arr[i]
        //update maxSum by comparing the previous value of maxSum to the current value of tempSum if tempSUm is bigger, max sum updates
        maxSum = Math.max(maxSum, tempSum)    
    }
    return maxSum
}



console.log(maxSubArraySumRefactored([1, 2, 5, 2, 8, 1, 5], 2)); // 10
console.log(maxSubArraySumRefactored([1, 2, 5, 2, 8, 1, 5], 4)); // 17
console.log(maxSubArraySumRefactored([4, 2, 1, 6], 1)); // 6
console.log(maxSubArraySumRefactored([4, 2, 1, 6, 2], 4)); // 13
console.log(maxSubArraySumRefactored([], 4)); // null