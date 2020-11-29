Problems encountered in recursion

1. No base case
2. Base case wrong
   1. Results in 'Maximum call stack size exceeded'
3. Return the wrong thing, or forgetting to return at all

```
function factorialRecursive(num){
    if (num === 1) return 1
  return num * factorialRecursive(num)
}

factorialRecursive(4)
```
this just calls with the same input. 
These will usually result in the "Maximum call stack exceeded error" also known as a "Stack Overflow"
