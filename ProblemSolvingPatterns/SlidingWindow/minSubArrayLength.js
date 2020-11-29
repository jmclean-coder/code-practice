/* Write a function called minSubArrayLen which accepts two parameters 
- an array of positive integers and a positive integer.

This function should return the MINIMAL LENGTH of a CONTIGUOUS SUBARRAY 
of which the SUM is >= the INTEGER PASSED TO THE FUNCTION. 
If there isn't one, return zero instead.

My Words: This function needs to target the SMALLEST SUBARRAY of values that,
when each value is added together, the SUM is equal to the number that is passed in
if there is any single value greater than the number passed in, RETURN 1
if no subarrays are found, RETURN 0 <--- solve this first and the rest will come.


*/

/*

function minSubArrayLen(array, num){
steps:

store arr.length
make a new empty array

make two pointers to control window and window size
make a variable to control how big the window is.
start a sum variable at the first element of the array
make a tempSum variable, set it equal to sum at first

handle case where no subarrays are found

loop while counter is is empty (length === 0)
if i is at the first index and the size of the window is the entire array 
(j has reached the end and no sub array found)
return 0

Handle the case of a window length 1 AND  
single number greater than or equal to target num 

handle resizing of window IF i OR j move beyond arr. length (no values found)
increment scale
start i at zero again (window open)

start j at i + scale (window close + window size)

else

    IF i and j arent the same
        IF i is greater than 0
        sum = (sum - arr[i - 1]) + arr[j]

    IF sum is greater than or equal to num
    push i and j onto counter
    return j - i ) + 1

increment i
increment j

end loop

}


*/

function minSubArrayLen(array, num) {
  let length = array.length;
  let counter = [];

  let i = 0;
  let j = 0;
  let windowSize = 0;
  let sum = array[0];
  let tempSum = sum;

  while (counter.length === 0) {
    //length - 1 is the last element in the array
    if (i === 0 && j === length - 1) {
      return 0;
    }

    // case of a window length 1 AND single number greater than or equal to target num 

    if (i === j && array[i] >= num) {
      counter.push(i, j);
      //number subtracted by itself and return 1 to indicate a single number passed
      return j - i + 1;
    }

    if (i > length - 1 || j > length - 1) {
      windowSize++;
      i = 0;
      j = i + windowSize;

      //initial sum each time window is changed
      sum = tempSum + array[j];
      tempSum = sum;
    } else {
      if (i !== j) {
        if (i > 0) {
          sum = sum - array[i - 1] + array[j];
        }

        if (sum >= num) {
          counter.push(i, j);
          return j - i + 1;
        }
      }
      i++
      j++
    }
  }
}


// this solution accounts for if all n elements of the array sum to be the target, and is actually o(n)
function minSubArrayLen (arr, num) {
    if (arr.length < 2) return null
   
    let left = 0
    let right = 0
    let minLen = 0
    let tempLen
    let tempSum = arr[left]
   
    while (right < arr.length) {
      if (tempSum < num) {
        right++
        if (arr[right]) tempSum += arr[right]
      } else {
        tempLen = right - left + 1
        minLen = minLen ? Math.min(minLen, tempLen) : tempLen
        if (minLen === 1) return 1
        tempSum -= arr[left]
        left++
      }
    }
    return minLen
  }
console.log(
    minSubArrayLen([2,3,1,2,4,3], 7), // 2
    minSubArrayLen([2,1,6,5,4], 9), // 2
    minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52), // 1
    minSubArrayLen([1,4,16,22,5,7,8,9,10], 39), // 3
    minSubArrayLen([1,4,16,22,5,7,8,9,10], 55), // 5
    minSubArrayLen([4,3,3,8,1,2,3], 11), // 2
    minSubArrayLen([1,4,16,22,5,7,8,9,10], 95), // 0
    minSubArrayLen([1,1,1,1,1], 5) // ?? WIP  
)
