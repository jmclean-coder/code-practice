This is the same function from the HelpMethod design pattern, this time without helper methods

1. the array get's created each time, and we only look at the first element.
2. use conditions to check for empty or invalid input, and to determine odd/even
3. set newArr to equal the value of newArr, concatenated with the return value of the recursive function
4. 
```
function collectOddValues(arr){
    let newArr = [];
    
    if(arr.length === 0) {
        return newArr;
    }
        
    if(arr[0] % 2 !== 0){
        newArr.push(arr[0]);
    }
        
    newArr = newArr.concat(collectOddValues(arr.slice(1)));
    return newArr;
}

collectOddValues([1,2,3,4,5])
```


Explanation
everytime the function is called, it starts with an empty array

we check if the length is zero, and we check if the *first* element
is odd. 
if so, we push that onto our result array
when then set the value of newArr to the current newArr concatenated with
the result of calling the recursive function with all elements but the 
first

call stack
```
collectOddValues([1,2,3,4,5])
    [1].concat(collectOddValues(arr.slice(1))) => [2,3,4,5]
        [].concat(collectOddValues(arr.slice(1))) => [3,4,5]
            [3].concat(collectOddValues(arr.slice(1))) => [4,5]
                [].concat(collectOddValues(arr.slice(1))) => [5]
                    [5].concat(collectOddValues(arr.slice(1))) => []
                     return value at this point is []
```
Each one of these concat calls is waiting on the one below 
it to resolve and will concatenate the values into a single array
the values will concatenate from the bottom up as each function is resolved


[1].concat([3]) => [1,3]
[1,3].concat([5]) => [1,3,5]

Pure Recursion tips:

- for arrays, use slice, the spread operator, and concat to make copies of arrays
  - Avoids mutating the array
- Strings are immutable, so methods like slice, substr, and substring are used to make copies of strings
- With objects, use Object.assign or the spread operator to make copies of objects
  


      