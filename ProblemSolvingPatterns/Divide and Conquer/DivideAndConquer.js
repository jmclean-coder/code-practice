/* 

Divide and Conquer

This pattern involves dividing a data set into smaller 
chunks and then repeating a process with a subset of data.
This pattern can tremendously decrease time complexity

Given a sorted array of integers, write a function called search, 
that accepts a value and returns the index where the value passed to 
the function is located. If the value is not found, return -1

search([1,2,3,4,5,6],4) // 3
search([1,2,3,4,5,6],6) // 5
search([1,2,3,4,5,6],11) // -1

*/

// Linear Search Time COmplexity O(N)
function searchNaieve(arr, val){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === val){
            return i
        }
    }
    return -1
}

console.log(searchNaieve([1,2,3,4,5,6],4)) // 3
console.log(searchNaieve([1,2,3,4,5,6],6)) // 5
console.log(searchNaieve([1,2,3,4,5,6],11) )// -1


//Binary Search! Divide and Conqueur Log(N)

function searchBinary(array, val){
    let min = 0
    let max = arr.length - 1

    while (min <= max){
        let middle = Math.floor((min + max) / 2)
        let currentElement = array[middle]

        if( array[middle] < val){
            max = middle + 1
        }
        else if (array[middle] > val){
            max = middle - 1
        }
        else {
            return middle;
        }
    }
    return -1
}