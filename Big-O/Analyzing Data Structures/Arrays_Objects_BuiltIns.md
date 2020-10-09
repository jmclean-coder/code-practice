# Big O Analysis of Arrays, Objects, and Built In Methods in Javascript

## Objectives

- Understand how Arrays work through the lens of Big O
- Explain why adding elements to the beginning of an array is costly
- Compare and Contrast the runtime for arrays and objects, as well as built in methods

<br>
  
## The Big O of Objects

<br>

Unordered, key, value pairs

What they are good for:

- When order doesn't matter (unsorted)
- When I need fast access, insertion, and removal of data
  
  - Insertion - O(1)
  - Deletion/Removal - O(1)
  - Searching - O(n) linear time
  - Access - O(1)

Searching is O(n) when we are trying to find 
out if a <em>value</em> is on the right side of the colon by checking <em>each key property</em>

    let instructor = {
        firstName: "Joshua",
        isInstructor: true,
        favoriteNumbers: [1, 2, 3, 4]
    }

We'd have to check each property to search for the true value if we didn't know the property name for retrieval

---

<br>

Built In Methods on Objects

- Object.keys - O(n)
- Object.values - O(n)
- Object.entries - O(n)
  -  As the number of items grows, we have have to visit each property to perform the operations above.

- hasOwnProperty - O(1
  - Constant because we pass it a known key, returns true or false.

---

<br>

## Big O of Arrays

Arrays are ordered lists

    let names = ["Michael", "Melissa", "Joshua"]

    let values = [true, {}, [], 2, "awesome"]

What they are good for:

- When I need order
- When I need fast access
  - Insertion and Removal depends on where we are doing it

- Insertion 
  - Adding to the end of an array is O(1)
  - Adding to the beginning of an array is O(n) because we have to re-index every element in that array
- Removal 
  - Removing from the end is O(1)
  - Removing from the end of an array is O(n) because we have to re-index every element in that array

---

Best to avoid adding or removing from the beginning or middle if I can, unless I absolutely need to enforce order/doing so has value

- adding or removing to the beginnning of an empty array is constant time

- Searching - O(n)
- Access - O(1)

## Built in Methods

In Javascript: pop and push are always faster than shift and unshift.

- push - O(1)
- pop - O(1)
- shift - O(n) 
- unshift - O(n)

- concat - O(n)
  - technically O(n + m), but O(n) is fine.
- slice - O(n)
  - How many elements are we copying?
- splice - O(n)
  - Shifting and reindexing so O(n)
- sort - O(n * log n)
- Iterators like forEach/map/filter/reduce - O(n)





