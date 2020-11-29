Helper methord recursion involves using a helper method inside 
a function recursively to process data, usually in making a list or
collecting values

```
function collectOddValues(arr){
    let result = []

    function helper(helperInput){
    if (helperInput.length === 0) return // base case

    if (helperInput[0] % 2 !== 0){
        result.push(helperInput[0])
    }
    
    // calling the helper recursively with all but the first element
    helper(helperInput.slice(1)) 

    }

    helper(arr)
    return result
}

collectOddValues([1,2,3,4,5,6,7,8,9,10,11,12,13])
//=> [1,3,5,7,9,11,13]
```