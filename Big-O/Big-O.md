# Objectives - Big O Notation

- Motivate the need for something like Big O Notation
- Describe what Big O Notation is
- Simplify Big O Expressions
- Define "time complexity" and "space complexity"
- Evaluate the time complexity and space complexity of
  different algorithms using Big O Notation

- Describe what a logarithm is

---
<br>


## Why do we need Big O?

For every algorithm there may be multiple different solutions and approaches. Big O is a way of comparing and analyzing code to build a system that helps us determine the "best" solution given the problem

### Example: "Write a function that accepts a string input and returns a reversed copy"

There are many ways to solve this with arrays, string manipulation, and/or JS methods

Things to note:

- It's important to have a precise vocabulary to describe code
- Useful for discussing pro/cons between different location
- When code slows or crashes, Big O can help us find out where
- It comes up in interviews!
- Big O uses generalized labels to describe code
  <br>

### What constitutes a good solution?

- Runs Faster?
- Less memory intensive?
- More readable?

Ultimately the first two are the most important, and the third is a good thing to strive for.

<br>

## Time Complexity - How long code takes to run

## BIG IDEA: As N grows, how does this reflect the runtime?

<br>

### The Problem with Time as a Measurement to Compare Algorithms

- Different machines record different times, making time an unreliable measurement
- The same machine will record different times as well
- If your algorithm is fast, speed measurements may not be precise enough to capture how fast an algorithm is running
- What if we are comparing algorithms that take a long time to run?

We count the number of simple operations a computer has to perform. That is constant across machines running the same function.

<br>


We say that an algorithm is O(f(n)) if the number of simple operations the computer has to do is eventually less than a constant times f(n), as n increases.

- Linear (f(n) = n)
  - as n scales/grows the runtime scales as well
- Quadratic (f(n)= n^2)
  - as n grows, the runtime scales exponentially
- Constant
  - as n grows, there is no impact on the runtime, simplified to 1

"As we look a the graph and add data, how does it change?"
[Performance Mapper of test Algortihms](https://rithmschool.github.io/function-timer-demo/)

Task:

1. What are the runtimes of the remaining functions?
   1. Which did you get correct?
   2. What were the correct runtimes? and why?
2. Write all this stuff down.

<br>


    function addUpToo(n){
      return n * (n + 1) / 2;
    }

- Always 3 operations: O(1) - Constant time
  - As n grows, there is no change in the runtime.

<br>

    function addUpTo(n){
      let total = 0
      for (let i = 1; i <= n; i++){
          total += i;
      }
      return total
    }

- Numbe rof operationsis eventually bounded by a multiple of n: O(n)
  - as n grows, the runtime grows

<br>

    function countUpAndDown(n) {
      console.log("Going Up!")

      for (var i; i < n; i++) {
          console.log(i)
      }

      console.log("At the top!\nGoing Down...")

      for (var j = n - 1; j >= 0; j--){
          console.log(j)
      }
      
      console.log("At the Bottom, Bye!")
    }

- The two seperate loops doesn't matter, it's still O(n)

<br>

    function printAllPairs(n) {
      for (var i = 0; i < n; i++){
        for (var j = 0; j < n; j++) {
            console.log( i, j)
        }
      }
    }

- 1st loop: O(n)
- 2nd loop: also O(n)
  - this loop is nested within the first so it's big O is O(n^2)

  <br>

      printAllPairs(2)
      //=>  0 0
            0 1
            1 0
            1 1


<br>

## Space Complexity

## BIG IDEA: "How much additional memory do we need to allocate in order to run the code inside the algorithm?"

A note on Aux Space Complexity:
- As n grows the size of the input itself will grow, but that is assumed
- We can use Big O to describe the algorithm space complexity too
- We care more about the repercussions that the input the scaling has INSIDE the algorithm
  
Rules of Thumb:

- Most primitives (Booleans, numbers, undefined, null) are constant space
- Strings require O(n) space: 50 charactert string require 50 times the space as a single character
- Reference types like arrays and objects take up O(n) space: an array of length 2 is twice the space than an array of length 1

### Examples:

      function sum(arr) {
      let total = 0;
      for (let i = 0; i < arr.length; i++) {
        total += arr[i];
      }
      return total;
    }

- We have one number saved to a variable: total
- We have another number saved to the variable: i
- this is O(1) space, we have constant space, we are only making these new items once

<br>

    function double(arr) {
        let newArr = []
        for (let i = 0; i < array.length; i++) {
            newArr.push(2 * arr[i])
        }
        return newArr
    }

- We have a new array that is saved to the variable Arr
- However inside the loop the space that is taken up in memory is directly proportionate to the size of the inputs
- this is O(n)


<br>

# Simplyfying Big O Expressions

<br>

          function addUpTo(n){
      let total = 0
      for (let i = 1; i <= n; i++){
          total += i;
      }
      return total
    }

    /*
    1 Assignment for total
    1 Assignment for i
    n comparisions
    n additions
    n assignments in total
    n additions
    n assignments for iterator variable
    */

- Drop those Constants

  - In the above we have 5n + 2 - But this doesn't matter. we care about the big picture, the operations that take longests and the are n numerous
  - O(2n) => O(n)
  - O(200) => O(1)
  - O(13n^2) => O(n^2) - Think no matter the constant, the chart will look similar.

- Smaller terms too
  - O(100n + 50) => O(n)
  - O(n^2 +5n + 8) => O(n^2) - Again, the greater expression wins out

1. Arithmatic Operations are constant
2. Variable Assignmewnt is constant
3. Accessing elements in an array(by index or object(by key) is constant
4. In a loop, the complexity is the length of the loop \* the complexity of whatever happens in the loop

<br>

# Logarithms

<br>

The commmon complexities are O(n), O(1), and O(n^2)
There are less common but still frequent algorithms that can be something like O(log n)

## What's a log?

A log is the INVERSE of exponentiation

log₂(8) = 3

"What power of two will equal 8? 
2 * 2 * 2 = 8 

2³ = 8

- Binary: Log₂(n) = y

- Base 10: log₁₀(n) = y

- Log e: logₑ(n) = y

We need to have a base for logarithms

<br>

## Logarithms in Big O

<br>
The binary logarithm of a number roughly measure the number of times you can divide that number by 2 <strong>before you get a value that's less than or equal to one.</strong>

8 / 2 = 4
  / 2 = 2
  / 2 = 1

count the divisions we get 3 so binary log(8) = 3

25 / 2 = 12.5
   / 2 = 6.25
   / 2 = 3.125
   / 2 = 1.5625
   / 2 = 0.78125

   An odd number doesn't cleanly divide with a binary log so we can see that binary log(25) is somewhere between 4 and 5 divisons

   log(25) ≈ 4.64

Note: In the case of Big O notation we drop the base and write log as a shorthand

- log₂ === log

Logarithmic time complexity is great!

- O(log n) way better when compared to O(n) and slightly better than O(1)

- O(n log n) is less favorable, but more favorable than o(n²)

Where this applies:

- Some searching algorithms have logarithmic time complexity
- Efficient searching algorithms invole logarithms
- Recursion sometimes involves logarithmic space coimplexity.

Summary 
- To analyze the performance of an algorithm, use Big O Notation
- Big O Notation can give us a high level understanding of the time or space complexiity of an algorithm
- Big O Notation doesn't care about precision, only the general trends (Linear, quadratic, constant)
- The time or space complexity (measured with Big O) only depends on the algorithm not the machine that is running it
- Big O Notation should practiced regularly
  
















