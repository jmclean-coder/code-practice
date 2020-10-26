/*
Implement a function called areThereDuplicates which accepts a variable number of arguments, 
and checks whether there are any duplicates among the arguments passed in.
*/

/*

Set objects are collections of values. 
You can iterate through the elements of a set in insertion order. 
A value in the Set may only occur once; it is unique in the Set's collection.

When creating a Set, uniqueness of values will be checked
so if the size of the set is inequal to arguments.length, there are duplicates, returning true 

*/

function areThereDuplicates() {
    return new Set(arguments).size !== arguments.length;
  }