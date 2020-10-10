
/*
1. UNDERSTAND THE PROBLEM- SIMPLE EXAMPLE
==================================
Write a function which takes two numbers and returns their sum.
==================================

    1. Can I restate the problem in my own words?
        Write a function that adds two numbers together.

    2. What are the inputs that got into the problem
        Integers?
        Floats?
        Use a string for big numbers?
    

    3. What are the outputs that should come from the solution to the problem
        int? float? string?

    4. Can the outputs be determined from the inputs? Do I have enough info to solve the problem?
        What happens if an input is left off?


    5. How should I label the important pieces of data that are a part of the problem?
        Inputs
        Outputs
        function sum(a, n)
        return sum (output)

===========================================================================================

2. Create concrete examples 
==================================
Write a function which takes in a string and 
return counts of each character in the string
==================================


    1. Start with simple examples. Try for two or three. Write them down

        charCount("aaaa"); //=> {a:4}

        What if the output looked like {a:4, b:0, c:0} ?
        Are we expecting this kind of output?
            
        If so,then the key has already been created and we just 
        need to increment it, performing one less operation

        charCount("hello"); //=> {h:1, e:1, l:2, o:1}

    2. Progress to more complex examples. write them down

    What in the input is is:
    "my favorite number is 287346"
    "Hello hi"

        Account for spaces?
        Numbers in the string?
        Symbols?
        Uppercase vs. lowercase?

    3. Explore Example with Empty Input
            
        What if:
        charCount()
        charCount("")

    4. Explore examples with Invalid Inputs
    
        Similar to empty inputs

===========================================================================================

3. Break it Down

    1. Explicity write out the steps I needed to take. Think an outline.

    Forces me to stay focused and highlight areas that I may be fuzzy in
    
    2.Make the function

    Start simple
        function charCount(str) {
            //Do stuff
            //describe return value in completeness, based on the expected parameters that you verified.
        }

        function charCount(str) {
            // Make Object to return at end
            // Loop over string
                //Look at each character(char)
                // if char is a number/letter AND in our object, add one to count
                // if char is a number/letter AND NOT in our object, add it to object and set value to 1
                // if char is something else, don't do anything.

            // Return object at end

            //describe return value in completeness, based on the expected parameters that you verified.
        }

4. Solve -or- Simplify

         Can I solve the problem?
         If I don't feel great about it I can start writing code and come back to the hard part.
         Often times simplifying the problem will give me insight on the part i'm stuck on.

         Find the core difficulty in what i'm trying to do

         Temporarily ignore that difficult part

            Alphanumeric filter
         
         Write a simplified solution

            see below

         Incorporate that difficulty back in.

            Options: Char Codes, Array of characters (not ideal), or Regexp *preferred*

         function charCount(str) {
            // Make Object to return at end
            var result = {}
            
            // Loop over string, Look at each character(char)
            for(var i = 0; i < str.length; i++){
                var char = str[i].toLowercase() - could also lowercase the entire string first

                wrap below if statements in check for alphanumeric.

                // if char is a number/letter AND in our object, add one to count
                if(result[char] > 0) {
                    result[char]++
                } 
                // if char is a number/letter AND NOT in our object, add it to object and set value to 1
                else {
                    result[char] = 1;
                }
            }
                // if char is something else, don't do anything.

            // Return object at end
            //describe return value in completeness, based on the expected parameters that you verified.
            
            return result

        }



*/

const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
const randomChars = "X2YmX9almO mzWnw6AZj5 4CuLZ4OBrr ftd6mWowSe Nyyo1rHJwX TTEjea2adv JTvAtp53kA 9jaFsv1f3d Jg239i9CHj rqBLhJ0Nt1 fIdrGAvAYz uBgyrVVwma 51CFLlqCtF r2I4r7lLdh EmVKjZqSsL zS7zwvIlmK Zy2mRyqNKw wWX1Ox50xI 9puXH4bFIi G4U1LwhDoM RjkruzF74o eAK45UhQfZ S56GDiKXUq Z4K2tHEZJo fVL9FOaaTU 3n6wImf5wk hYoM9zCblJ PsnKVIQ3gn KkyrZuldDo Kpkwhho1xD"


//Implementation 1: Naieve Time: O(n) Space: O(n)

function charCountSlow(str) {
    let obj = {}
    let lowerCased = str.toLowerCase() 
    for (let char of lowerCased) {
        if (/[a-z0-9]/.test(char)) {
            obj[char] = ++obj[char] || 1
        }
   }
   return obj
}

//Implementation 2
function charCountFast(str) {
    let obj = {}
    for (let char of str) {
        if (isAlphaNumeric(char)) {
            char = char.toLowerCase()
            obj[char] = ++obj[char] || 1
        }
   }
   return obj
}

function isAlphaNumeric(char) {
    var code = char.charCodeAt(0)
    if (!(code > 47 && code < 58) &&       //numeric 0-9
        !(code > 64 && code < 91) &&       //upper alpha
        !(code > 96 && code < 123)) {     //lower alpha
        return false
    }
return true 
}

console.time('Fast 1')
console.log(charCountFast(loremIpsum))
console.timeEnd('Fast 1')

console.time('Fast 2')
console.log(charCountFast(randomChars))
console.timeEnd('Fast 2')

console.time('Slow 1')
console.log(charCountSlow(loremIpsum))
console.timeEnd('Slow 1')

console.time('Slow 2')
console.log(charCountSlow(randomChars))
console.timeEnd('Slow 2')





