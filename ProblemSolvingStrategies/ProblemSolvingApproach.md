# Problem Solving

## Objectives
- Learn the steps and strategies to practicing problem solving skills
  - Understand the problem
  - Explore Concrete Examples
  - Break It Down
  - Solve/Simplify
  - Look Back and Refactor

## Process

<br>

### 1. Understand the problem

<br>

It's really import to make sure I understand the problem or tasks BEFORE I set out to begin solving. It's very easy to feel anxious and rush to begin solving because that feels like progress. Taking a step back and understanding the problem can lead to hints or "aha!" moments.

- Can I restate the problem in my own words?
  - If interviewing, how does my interviewer react to my restatement?
  
- What are the inputs that go into the problem?
  
- What are the outputs that should come from the solution to the problem?
  - what does it look like?
  
- Can the outputs be determined from the input?
  - Do I have enough information from the input to solve the problem?


- How should I label the important pieces of data that are a part of the problem
- 
  - How Does the abov ehelp me determine what's important?
  
<br>


    /*
    THE PROCESS - SIMPLE EXAMPLE
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
    */




### 2. Explore Concrete Examples

<br>

Coming up with examples can help you understand the problem better.
Examples also provide sanity checks that eventual solution will work.

- User Stories
- Unit Tests

Steps:

1. Start with simple examples. Try for two or three. Write them down
2. Progress to more complex examples. write them down
3. Explore Example with Empty Input
4. Explore examples with Invalid Inputs

<br>

    Write a function which takes in a string and 
    return counts of each character in the string

    1. Start with simple examples. Try for two or three. Write them down

        charCount("aaaa"); //=> {a:4}

        What if the output looked like {a:4, b:0, c:0} ?
        Are we expecting this kind of output?
            
        If so,then the key has already been created and we just 
        need to increment it, performing one less operation

        charCount("hello"); //=> {h:1, e:1, l:2, o:1}

    2. Progress to more complex examples. write them down

    What if the input is:

        "my favorite number is 287346"
        "Hello hi"

        Account for spaces?
        Numbers in the string?
        Symbols?
        Uppercase vs. lowercase?

    3. Explore Examples with Empty Inputs
              
        Ask what if?:

        charCount()
        charCount("")

    4. Explore examples with Invalid Inputs

        Similar to empty inputs

    

<br>

### 3. Break It Down

<br>

1. Explicity write out the steps I needed to take. Think an outline.
2. Make the function
3. Write notes/pseudocode for each main step
4. Replace those notes with the actual code

<br>


    1. Explicity write out the steps I needed to take. Think an outline.

    Forces me to stay focused and highlight areas that I may be fuzzy in
    
    2.Make the function

    Start simple, write notes/pseudocode:

        function charCount(str) {
            //Do stuff
            
            //describe return value in completeness
            //based on the expected parameters that you verified.
        }

    Then, go deeper:

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

<br>

### 4. Solve/Simplify

<br>

1. Find the core difficulty in what i'm trying to do
2. Temporarily ignore that difficult part        
3. Write a simplified solution
4. Incorporate that difficulty back in.

<br>

Ask: At this point, can I solve the problem?

If I don't feel great about it I can start writing code and come back to the hard parts.

Often times simplifying the problem will give me insight on the part i'm stuck on.

    Find the core difficulty in what i'm trying to do

    Temporarily ignore that difficult part

       - Alphanumeric filter
         
    Write a simplified solution

       - see below

    Incorporate that difficulty back in.

       - Options: Char Codes, Array of characters (not ideal), or Regexp *preferred*
  
  ---

    function charCount(str) {
            // Make Object to return at end
            var result = {}
            
            // Loop over string, Look at each character(char)

            for(var i = 0; i < str.length; i++){
                var char = str[i].toLowercase() - 
                
                // could also lowercase the entire string first outside of loop.

            //wrap below if statements in check for 
            //alphanumeric only.

            // if char is a number/letter AND 
            // in our object, add one to count

                if(result[char] > 0) {
                    result[char]++
                } 

            // if char is a number/letter AND NOT 
            // in our object, add it to object and set value to 1

                else {
                    result[char] = 1;
                }
            }
                // in alphanumeric check: else char is something else, don't do anything. 


            // Return object at end
            
            return result
    }

<br>

### 5. Look Back and Refactor

Congratulate yourself for solving, but i'm not done!
In most cases, you get something done and write code that may be scrappy but works.

It best to look back and reflect on the code line by line:

ASK OUT LOUD:

- Can I check the results?

- Can I derive the result differently?
  - <em>Now that I have solved the problem, what other things could I have done?</em>
- Can I understand it at a glance?
  - <em>How legible is it?</em>
- Can I use the result or method for other problems?
  - <em>What similarities does my solution have to other problems?</em>
- Can I improve the performance of my solution
  - <em>Time and Space Complexity, finding bottlenecks</em>
- Can I think of other ways to refactor?
  - <em>style guides, spacing consistent, etc.</em>
- How have other solved this solution?
  - <em>Can find ideas or different approaches in other people's work/other languages?
  </em>

---
    Refactored v1.
    function charCount(str) {
        let obj = {}
        let lowerCased = str.toLowerCase() 
        for (let char of lowerCased) {
            if (/[a-z0-9]/.test(char)) {
                obj[char] = ++obj[char] || 1
            }
       }
       return obj
    }

    NOTES I COULD SAY OUT LOUD: If I use a regexp, acknowledge that the performance of regexp varies with the complexity of the probelm

    ALTERNATE SOLUTION TO REGEXP: 
    charCodeAt()

     function charCount(str) {
        let obj = {}
        for (let char of lowerCased) {
            if (isAplhaNumeric(char)) {
                char = char.toLowerCase()
                obj[char] = ++obj[char] || 1
            }
       }
       return obj
    }

    function isAlphaNumeric(char){
        var code = char.charCodeAt(0)
        if (!(code > 47 && code < 58)  && //numeric 0-9
            !(code > 64 && code <91) &&       //upper alpha
            !(code > 96 && code < 123)) {     //lower alpha
            return false
        }
    return true
        
    }






