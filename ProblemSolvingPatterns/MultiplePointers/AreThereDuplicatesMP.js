/*
Implement a function called areThereDuplicates which accepts a variable number of arguments, 
and checks whether there are any duplicates among the arguments passed in.
*/




function areThereDuplicates(...args){
    //edge cases
    if (args.length === 0){
        return null
    }
    if (args.length === 1){
        return false
    }
  
      console.log(args)
      args.sort((a,b) => a - b);
      let start = 0
      let next = 1
  
      while(next < args.length){
          if (args[start] === args[next]){
              return true
          }
          start++
          next++
      }
      return false
      
  }

areThereDuplicates(1, 2, 3, 4, 4); // true
areThereDuplicates("a", "b", "c", "d", "d"); // true
areThereDuplicates(1, 2, 3); // false
areThereDuplicates(); // null
  
  