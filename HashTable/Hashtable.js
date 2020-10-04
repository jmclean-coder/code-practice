/* Decisions to make:
1. Type Hash Function (affect performance)
2. Initial Size Of Table (affects performance)
*/

//charCodeAt gives the UTF-16 code unit value representation of the character at the given index
console.log('tim'.charCodeAt(2))


function hashStringToInt(string, tableSize){
    //picking odd prime number to produce fewer than 7 collisions and spread out hash.
    let hash = 17;
    for (let i = 0; i < string.length; i++){
        hash = (13 * hash * string.charCodeAt(i))  % tableSize
    }
    return hash
}

class HashTable {

    table = new Array(3)
    numItems = 0

    // loadFactor = this.numItems / this.table.length

    resize = () => {
        const newTable = new Array(this.table.length * 2)

        this.table.forEach(item => {
            if (item){
                item.forEach(([key, value]) => {
                    const index = hashStringToInt(key, newTable.length)
                    if (newTable[index]){
                        newTable[index].push([key, value])
                    } else {
                        newTable[index] = [[key,value]]
                    }
                })
            }
        })
        this.table = newTable
    }

    setItem = (key, value) => {
        this.numItems++ //change to only increment if the key to save isn't already found.
        const loadFactor = this.numItems / this.table.length
        if (loadFactor > .8){
            //resize
            this.resize()
        }

        const index = hashStringToInt(key, this.table.length)
        if (this.table[index]){
            this.table[index].push([key, value])
        } else {
            this.table[index] = [[key,value]]
        }
    };

    getItem = key => {
        const index = hashStringToInt(key, this.table.length)

        if (!this.table[index]){
            return null
        }
        //worst case 0(n)
        return this.table[index].find(x => x[0] === key)[1]
    };

    showDistribution() {
        for (const key in this.table){
            if (this.table[key] !== undefined){
                console.log(key, ':', this.table[key])
            }
        }
    }
}

const myTable = new HashTable();
myTable.setItem("firstName", "bob");
console.log(myTable.table.length)

myTable.setItem("lastName", "tim");
console.log(myTable.table.length)

myTable.setItem("age", 5);
console.log(myTable.table.length)

myTable.setItem("dob", "1/2/3");
console.log(myTable.table.length)

console.log(myTable.table)
console.log(myTable.getItem("firstName"));
console.log(myTable.getItem("lastName"));
console.log(myTable.getItem("age"));
console.log(myTable.getItem("dob"));

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


myTable.showDistribution()



// class HashTable {
//     constructor() {
//         this.table = new Array(137)
//         this.values = []
//     }

//     //Define Hashing function that allows a string to be converted to a number, 
//     //which is then used as the index for the hash table
//     hash(string) {
//         //37 is an odd prime, produces less than 7 collisions per case
//         const H = 37
//         let total = 0

//         //iterate to sum the ASCII value of each character of the string, 
//         for (let i = 0; i < string.length; i++){
//             total += H * total + string.charCodeAt(i)
//         }

//         total %= this.table.length

//         if (total < 1){
//             this.table.length - 1
//         }
//         return parseInt(total)
        
//     }

//     showDistro() {
//         for (const key in this.table){
//             if (this.table[key] !== undefined){
//                 console.log(key, ':', this.table[key])
//             }
//         }
//     }

//     put(data){
//         const position = this.hash(data)
//         this.table[position] = data
//     }

//     get(key){
//         return this.table[this.hash(key)]
//     }
// }
// /* Test: 2:
// */

// let table2

// /*Test 1:
// SET: 0.109ms
// GET: 0.028ms
// */

// // let table = new HashTable()
// // let hashedName = table.hash("Joshua")
// // console.time("SET")
// // table.put("Johnna")
// // table.put("Joshua")
// // table.put("Jaylynn")
// // table.put("Jennifer")
// // table.put("Isa")
// // table.put("Paul")
// // table.put("Rebecca")
// // table.put("Bechet")
// // table.put("Bonnie")
// // table.put("Blue")
// // console.timeEnd("SET")

// // console.time("GET")
// // table.get("Blue")
// // console.timeEnd("GET")


// // table.showDistro()

// // console.log(table, hashedName)


