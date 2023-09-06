

/*
This function first removes all non-alphanumeric characters from the string and converts it to lowercase. 
Then it checks if the string is equal to its reverse 
by splitting it into an array of characters, 
reversing the array, and joining it back into a string.
*/

// Ignorant solution
function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    str = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
    // Check if the string is equal to its reverse
    return str === str.split('').reverse().join('');
  }
  
// Example Usage
console.log(isPalindrome('racecar')); // true
console.log(isPalindrome('hello')); // false


// Optimized

/*

This function first removes all non-alphanumeric characters from the string and converts it to lowercase. 
Then it checks if the string is empty or has only one character, since an empty or single-character string is always a palindrome. 
Finally, it uses a loop to check if the first and last characters are equal by comparing each character in the first half of the string with its 
corresponding character in the second half of the string (counting from the end of the string). 
If any characters don't match, the function returns false. 
If all checks pass, the string is a palindrome and the function returns true.

*/
function isPalindrome(str) {
// Remove non-alphanumeric characters and convert to lowercase
str = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

// Check if the string is empty or has only one character
if (str.length < 2) {
    return true;
}

// Check if the first and last characters are equal
for (let i = 0; i < Math.floor(str.length / 2); i++) {
    if (str[i] !== str[str.length - i - 1]) {
    return false;
    }
}

// If all checks pass, the string is a palindrome
return true;
}
  
// Example usage
console.log(isPalindrome('racecar')); // true
console.log(isPalindrome('hello')); // false


// Optimized

/* 
This function first removes all non-alphanumeric characters from each string and converts them to lowercase. 
Then it checks if the strings have the same length, since they must be the same length to be palindromes of each other. 
Finally, it uses a loop to check if the first and last characters are equal by comparing each character in the first 
string with its corresponding character in the second string (counting from the end of the second string). 
If any characters don't match, the function returns false. 
If all checks pass, the strings are palindromes of each other and the function returns true.


*/
function isPalindromeTwo(str1, str2) {
// Remove non-alphanumeric characters and convert to lowercase
str1 = str1.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
str2 = str2.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

// Check if the strings have the same length
if (str1.length !== str2.length) {
    return false;
}

// Check if the first and last characters are equal
for (let i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[str2.length - i - 1]) {
    return false;
    }
}

// If all checks pass, the strings are palindromes of each other
return true;
}


console.log(isPalindrome('racecar', 'racECar')); // true
console.log(isPalindrome('hello', 'world')); // false


// Array of Strings

/* 
there's a helper function isPalindrome that checks if a single string is a palindrome. 
The isPalindromeArray function takes an array of strings as input. 
It iterates over each string in the array and calls the isPalindrome function to determine if it's a palindrome. 
The function returns an array of boolean values indicating whether each string is a palindrome or not.
*/

// Helper function to check if a string is a palindrome
function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    str = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
    // Check if the string is empty or has only one character
    if (str.length < 2) {
        return true;
    }
    
    // Check if the first and last characters are equal
    for (let i = 0; i < Math.floor(str.length / 2); i++) {
        if (str[i] !== str[str.length - i - 1]) {
        return false;
        }
    }
    
    // If all checks pass, the string is a palindrome
    return true;
}

function isPalindromeArray(arr) {
    // Check if each string in the array is a palindrome
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      result.push(isPalindrome(arr[i]));
    }
    
    return result;
  }
  
  // Example usage
  const strings = ['racecar', 'hello', 'madam', 'world'];
  console.log(isPalindromeArray(strings)); // [true, false, true, false]