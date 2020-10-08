/* An Example
 Write a function that calculates the sum of all numbers
 from 1 up to and including some number n
*/

//Time Complexity examples.

function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

/*
1 Assignment for total
1
 Assignment for i
n comparisions
there are n operations that the computer has to perform
n additions
n assignments in total
n additions 
n assignments for iterator variable

5n + 2 - But this doesn't matter. we care about the big picture
*/
console.log(addUpTo(3));
// 1 + 2 + 3 = 6
// console.log(addUpTo(6))
// 1 + 2 + 3 + 4 + 5 + 6 = 21
// console.log(addUpTo(9))

console.log(addUpTo(100));

console.time("Add Up To V1 - Naieve");
addUpTo(100);
console.timeEnd("Add Up To V1 - Naieve");

function addUpToo(n) {
  return (n * (n + 1)) / 2;
}
/* 
1 multiplication
1 addition
1 division

there are a constant number of operations
this is faster because there are only three simple operations
*/

console.log(addUpToo(100));

console.time("Add Up To V2");
addUpToo(100);
console.timeEnd("Add Up To V2");

function countUpAndDown(n) {
  console.log("Going Up!");
  for (var i = 0; i < n; i++) {
    console.log(i);
  }

  console.log("At the top!\nGoing Down...");
  for (var j = n - 1; j >= 0; j--) {
    console.log(j);
  }
  console.log("At the Bottom, Bye!");
}

console.time("Count Up And Down");
countUpAndDown(100);
console.timeEnd("Count Up And Down");

function printAllPairs(n) {
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
}
console.time("Print All Pairs");
printAllPairs(100);
console.timeEnd("Print All Pairs");

//Space complexity examples

function sum(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}


function double(arr) {
    let newArr = []
    for (let i = 0; i < array.length; i++) {
        newArr.push(2 * arr[i])
    }
    return newArr
}
