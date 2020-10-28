/* 
Write a function called isSubsequence which takes in two strings and checks whether 
the characters in the FIRST string form a subsequence of the characters in the second string.

In other words, the function should check whether the characters in the first string appear 
somewhere in the second string, without their order changing

My words: Write a function that takes in two strings and checks the characters of the first string
against the characters of the second string 

*/

/* Immutable
function isSubsequence(str1, str2){
 steps:
 handle cases where either string is empty
 handle case where the first string is longer than the second 

 create pointers, set equal to zero, 
 the first pointer doubles as our bean counter of corrent intances

 loop over str2

 if str1 at pointer 1 === str2 at pointer 2
 increment p1

 if p1 === the length of str1 
 return true

 increment p2 outside of conditional, but inside loop
 
 return false at end o

 }
 */
// For Iterative (first try)
// function isSubsequence(str1, str2){
//     if (str1 === '' || str2 === '') return false
//     if (str1.length > str2.length) return false

//     let p1 = 0
//     let p2 = 0

//     for (let i = 0; i < str2.length; i++){
//         if(str1[p1] === str2[p2]) p1++
//         if (p1 === str1.length) return true
//         p2++
//     }
//     return false
// }



//refactored
// function isSubsequence(str1, str2){
//     if (!str1) return true 
//     if (str1.length > str2.length) return false

//     let p1 = 0
//     let p2 = 0

//     while(p2 < str2.length){
//         if(str1[p1] === str2[p2]) p1++
//         if (p1 === str1.length) return true
//         p2++
//     }
//     return false
// }

//ES2015 Refactored
function isSubsequence(str1, str2){
    if (!str1) return true 
    if (str1.length > str2.length) return false

    let p1 = 0
    let p2 = 0

   for (let c of str2){
        if(str1[p1] === c) p1++
        if (p1 === str1.length) return true
        p2++
    }
    return false
}



isSubsequence('hello', 'hello world') // true
isSubsequence('sing', 'sting') // true
isSubsequence('abc', 'abracadabra') //  true
isSubsequence('abc', 'acbarr') // false
isSubsequence('xyz', 'kjaxhajyibrfkza') // true

console.log(
isSubsequence('hello', 'hello world'),
isSubsequence('sing', 'sting'),
isSubsequence('abc', 'abracadabra'),
isSubsequence('abc', 'acbarr'),
isSubsequence('xyz', 'kjaxhajyibrfkza')
)