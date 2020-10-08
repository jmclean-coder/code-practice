/*
 * Complete the 'vanity' function below.
 *
 * The function is expected to return a STRING_ARRAY.
 * The function accepts following parameters:
 *  1. STRING_ARRAY codes
 *  2. STRING_ARRAY numbers
 */

//Each letter maps to a digit on phone pad
/*
2 : abc
3 : def
4 : ghi
5 : jkl 
6 : mno 
7 : pqrs
8 : tuv
9 : wxyz
*/


//Process: Write a few test cases that I want to test againsts
//Be aware of test cases I find as I go on, and add new ones as I find them.

//Can you solve the problem?
//Can you think about the problem in it's completeness

//String manipulation: Hash Tables and Edge Case Gotchas
//Push myself: look at how Hashes can be used

const map = {
  "A": "2",
  "B": "2",
  "C": "2",
  "D": "3",
  "E": "3",
  "F": "3",
  "G": "4",
  "H": "4",
  "I": "4",
  "J": "5",
  "K": "5",
  "L": "5",
  "M": "6",
  "N": "6",
  "O": "6",
  "P": "7",
  "Q": "7",
  "R": "7",
  "S": "7",
  "T": "8",
  "U": "8",
  "V": "8",
  "W": "9",
  "X": "9",
  "Y": "9",
  "Z": "9",
};

const codes = ["3", "TWLO", "CODE", "BODE", "HTCH", "5"];

const numbers = [
  "+17474824380",
  "+14157088956",
  "+919810155555",
  "+15109926333",
  "+1415123456",
  "+14157088956",
  "+14157089567",
];

// function buildStr(char){
//     let newStr = ''

// }

function vanity(codes, numbers) {
  let results = [];
  let temp = []
  let finalResult = []
  //iterate to over codes
  //check to see if the code is a number or if the string length is 1, if either are true don't use that input
  //iterate over string and build new string of numbers based on lookup from map

  codes.forEach((code) => {
    let newString = ""
    if (code.length > 1 && parseInt(code) !== NaN) {
      for (let i = 0; i < code.length; i++) {

      newString += map[code[i]]

     if(newString.length == code.length){
       results.push(newString)
      }
    }
  } else {
    return null;
  }
  console.log(results)
});

//build a hashmap of number values that are possible for each vanity code
//sort by number of fewest possible matches 

for (const numCode of results){
  console.log(numCode)
finalResult.push(numbers.filter(number => number.includes(numCode)))
}

console.log(finalResult)


finalResult.sort( (a, b) => a.length - b.length)

console.log(finalResult)
  //return sorted array of unique phone numbers that contain the substring
}

vanity(codes, numbers);
