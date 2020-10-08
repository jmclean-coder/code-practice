# Big O Analysis of Arrays, Objects, and Built In Methods in Javascript

## Objectives

- Understand how Arrays work through the lens of Big O
- Explain why adding elements to the beginning of an array is costly
- Compare and Contrast the runtime for arrays and objects, as well as built in methods

<br>
  
## The Big O of Objects

<br>

Unordered, key, value pairs

WHat they are good for:

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



