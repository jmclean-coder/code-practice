/* Decisions to make:
1. Question I am trying to solve.
2. Type Hash Function (affect performance)
3. Initial Size Of Table (affects performance)
*/



//charCodeAt gives the UTF-16 code unit value representation of the character at the given index
console.log("tim".charCodeAt(2));



//Hashing Function
//iterate over string to sum characters as their UTF-16 representation integer

function hashStringToInt(string, tableSize) {
  //picking odd prime number to produce fewer than 7 collisions and spread out hash.
  let hash = 37;
  for (let i = 0; i < string.length; i++) {
    hash = (13 * hash * string.charCodeAt(i)) % tableSize;
    debugger;
  }
  return hash;
}

class HashTable {
  //want array buckets to be a prime number
  table = new Array(149);
  numItems = 0;

  resize = () => {
    const newTable = new Array(this.table.length * 2);
    this.table.forEach((item) => {
      if (item) {
        item.forEach(([key, value]) => {
          const index = hashStringToInt(key, newTable.length);
          if (newTable[index]) {
            newTable[index].push([key, value]);
          } else {
            newTable[index] = [[key, value]];
          }
        });
      }
    });
    this.table = newTable;
  };

  //Loadfactor must be
  setItem = (key, value) => {
    const loadFactor = this.numItems / this.table.length;
    if (loadFactor > 0.8) {
      this.resize();
    }
    const index = hashStringToInt(key, this.table.length);

    /* if there is something at this index,
        push the key value pair into this bucket, 
        else if it's an empty index, 
        set the key/value pair to this index
        */
       //check to see if the value exists in array before pushing
    if (this.table[index] !== undefined && !this.table[index].includes([key, value])){
          this.table[index].push([key, value]);
          this.numItems++; 
    } else {
      this.table[index] = [[key, value]];
      this.numItems++; 
    }
  };

  /*
  1. Check to see if the hash key exists first before adding it
  2. 
  */

  getItem = (key) => {
    const index = hashStringToInt(key, this.table.length);

    if (!this.table[index]) {
      return null;
    }
    //worst case 0(n)
    return this.table[index].find((x) => x[0] === key)[1];
  };

  showDistribution() {
    for (const key in this.table) {
      if (this.table[key] !== undefined) {
        console.log(key, ":", this.table[key]);
      }
    }
  }
}

const myTable = new HashTable();

/* test 1
SET: 0.221ms ​​​​​

GET: 0.1ms ​​​​​
*/

console.time("SET");
myTable.setItem("partner", "Johnna");
myTable.setItem("self", "Joshua");
myTable.setItem("sister", "Jaylynn");
myTable.setItem("mother", "Jennifer");
myTable.setItem("fosterSister", "Isa");
myTable.setItem("fosterFather", "Paul");
myTable.setItem("fosterMother", "Rebecca");
myTable.setItem("puppy", "Bechet");
myTable.setItem("kitty", "Bonnie");
myTable.setItem("newPuppy", "Blue");
console.timeEnd("SET");

console.time("GET");
myTable.getItem("puppy");
myTable.getItem("sister");
myTable.getItem("partner");
myTable.getItem("mother");
console.timeEnd("GET");

console.log(myTable.getItem("puppy"));
console.log(myTable.getItem("sister"));
console.log(myTable.getItem("partner"));

console.log(myTable.getItem("mother"));
myTable.showDistribution();


// myTable.setItem("firstName", "bob");
// console.log(myTable.table.length)

// myTable.setItem("lastName", "tim");
// console.log(myTable.table.length)

// myTable.setItem("age", 5);
// console.log(myTable.table.length)

// myTable.setItem("dob", "1/2/3");
// console.log(myTable.table.length)

// console.log(myTable.table)
// console.log(myTable.getItem("firstName"));
// console.log(myTable.getItem("lastName"));
// console.log(myTable.getItem("age"));
// console.log(myTable.getItem("dob"));

// console.time("SET")
// myTable.setItem("firstName", "Joshua")
// myTable.setItem("lastName", "Mclean")
// console.timeEnd("SET")

// console.time("GET")
// myTable.getItem("firstName");
// myTable.getItem("lastName")
// console.timeEnd("GET")

// console.log(myTable.getItem("firstName"));
// console.log(myTable.getItem("lastName"))

