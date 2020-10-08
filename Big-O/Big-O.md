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

KEY TAKEAWAY: As N grows, how does this reflect the runtime?

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

