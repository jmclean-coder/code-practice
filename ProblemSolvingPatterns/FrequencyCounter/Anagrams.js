/*

Given two strings, write a function to determine if the second string is an anagram 
of the first. 
An anagram is a word, phrase, or name formed by rearranging the letters of another, 
such as cinema, formed from iceman.

Restate: Write a function that compares two strings to see if they 
contain the SAME frequency of the SAME characters, regardless of order



*/

function validAnagram(str1, str2){
    //if the string's lengths are different, return false
    if (str1.length !== str2.length){
        return false
    }
    //Make freqeuncy counters objects for both strings
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    //loop over first str and add new keys OR increment value
    for (let char of str1){
        frequencyCounter1[char] = (frequencyCounter1[char]|| 0 ) + 1
    }
    // repeat for second string
    for (let char of str2){
        frequencyCounter2[char] = (frequencyCounter2[char]|| 0 ) + 1
    }

    console.log(frequencyCounter1)
    console.log(frequencyCounter2)

    //loop over 1st frequency counter
    for (let key in frequencyCounter1){
        //check if key in one counter is present in the other
        if (!(key in frequencyCounter2)){
            return false
        }
        //check to see if frequency values for each key in counter 1 === frequency values of the SAME key in counter 2
        if (frequencyCounter1[key] !== frequencyCounter2[key]){
            return false
        }

    }
return true
}

//Other solution
function validAnagramTwo(first, second) {
    if (first.length !== second.length) {
      return false;
    }
  
    const lookup = {};
  
    for (let i = 0; i < first.length; i++) {
      let letter = first[i];
      // if letter exists, increment, otherwise set to 1
      lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }
    console.log(lookup)
  
    for (let i = 0; i < second.length; i++) {
      let letter = second[i];
      // can't find letter or letter is zero then it's not an anagram
      if (!lookup[letter]) {
        return false;
      } else {
        lookup[letter] -= 1;
      }
    }
  
    return true;
  }
  // decrement count to zero as we encounter them in the string, 
  // if we cencounter 0, it's falsy, returning false in lookup
  // {a: 0, n: 0, g: 0, r: 0, m: 0,s:1}
validAnagram('anagrams', 'nagaramm')


console.log(validAnagram('', '')) // true
console.log(validAnagram('aaz', 'zza')) // false
console.log(validAnagram('anagram', 'nagaram')) // true
console.log(validAnagram('anagrams', 'nagaramm')) // true
console.log(validAnagram("rat","car")) // false 
console.log(validAnagram('awesome', 'awesom')) // false
console.log(validAnagram('qwerty', 'qeywrt')) // true
console.log(validAnagram('texttwisttime', 'timetwisttext')) // true
console.log(validAnagram('dogcat', 'dog cat')) // false
console.log(validAnagram('kitty paw', 'kitty wap')) // true
