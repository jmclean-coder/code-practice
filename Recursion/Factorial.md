Calculating "!" factorials

4! = 4 * 3 * 2 * 1 = 24

```
function factorialIterative(num){
    let total = 1
    for (let i = num; i > 1; i--){
        total *= i
    }
    return total
}

factorialIterative(4)
```

Recursively

```
function factorialRecursive(num){
    if (num === 1) return 1
  return num * factorialRecursive(num-1)
}

factorialRecursive(4)
```

