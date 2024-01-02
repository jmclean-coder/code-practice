# Frequency Counter

This pattern uses objects or sets to construct an object to collect values and frequences of of occurence for each value.
It can often be used to avoid the need for nested loops or O(n^2) operations with arrays and strings

example:

Write a function called same, which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of the values must be the same.

same([1, 2, 3], [4, 1, 9]) // true
same([1, 2, 3], [1, 9]) // false
same([1, 2, 1], [4, 4,1]) // false (must be same frequency)


Naieve solution

```javascript
// Time Complexity - N ^2
function same(arr1, arr2){
    // if the arrays aren't the same length, they can't have the same frequency
    if(arr1.length !== arr2.length){
        return false;
    }
    for(let i = 0; i < arr1.length; i++){
        let correctIndex = arr2.indexOf(arr1[i] ** 2)
        if(correctIndex === -1) {
            return false;
        }
        console.log(arr2);
        // remove each found square from the second array until all sqaures are found, OR find a way to remember the found values
        arr2.splice(correctIndex,1)
    }
    return true;
}

same([1,2,3,2], [9,1,4,4])
```
