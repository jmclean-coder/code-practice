The idea of recusion is to take a whole problem, and then to do a procedure on smaller pieces of that problem, over and over again

Are any numbers in this list: (3142 5798 6550 5914) odd?
Iterative: Loop over list and use modulo to deterine if any number devides evenly by 2

Recursive:
Pass the list to a function that calls itself with a single element of the list, 
determining if it is odd or not, and terminating on a specified condtion: The Base case
(3142 5798 6550 5914)

(5798 6550 5914)

 (6550 5914)

 (5914)

 ()

 Objectives: 

 - define recursion and how it can be used
 - understand the two essential components of a recursive function
 - Visualize the call stack to better understand and debug recursive functions
 - Use helper method recursion and pure recursion to solve problems

Why use recursion?

Recursion: A process (or function) that calls itself.

It's everywhere
- JSON.parse, JSON.stringify is often, but not always, written recursively
- DOM Traversal algorithms (a DOM tree), document.getElementById/querySelector
- Object traversal
- more complex data structures tree, graphs
- often cleaner than iterative
  
The Call Stack
In all programming languages, there is a built in data structure 
that manages what happens when functions are invoked
That data structure is called the CALL STACK - which is in fact, a stack.

When a function is invoked, it's placed (pushed) on top of the call stack. Think a stack of plates. You put on top, and remove on top
When JS sees the return keyword, or a function ends, it is removed(popped) from the call stack, as the function resolve in order

Why do we need to know about the call stack?
When writing recursive functions, we are calling the same function repeatedly, adding to the call stack repeatedly.

My first recursive function: 
Game plan: Invoke the same function, recursively, until I reach the base case: the end of the line.

```
// Iterative Version
function countDown(num){
    for(var i = num; i > 0; i--){
        console.log(i);
    }
    console.log("All done!")
}
```
```
// Recursive Version
function countDown(num){
    if(num <= 0) { //base case/end of line, usually at the top
        console.log("All done!");
        return; // we have to return here to exit the function
    }
    console.log(num);
    num--;
    countDown(num); // recursive function call, that takes in a changed/different input
}
countDown(3)
```

Another Example
```
function sumRange(num){
   if(num === 1) return 1; 
   return num + sumRange(num-1);
}

sumRange(4)
```
The base case usually always involve and condition that returns something
