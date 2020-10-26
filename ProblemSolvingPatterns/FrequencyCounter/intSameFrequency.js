/* 

write a function called sameFrequency. Given two positive integers, 
find out if the two number shave the same freqency of digits.

Time: O(N)

sameFrequency(182, 281) // true
sameFrequency(34, 14) // false
sameFrequency(1001, 1010) // true
sameFrequency(22, 222) // false 

*/



//1st Implementation

function sameFrequency(int1, int2){
    // make counters
     let frequencyCounter1 = {}
     let frequencyCounter2 = {}
     // convert number to arrat of digits
     let arr1 = (int1 + '').split('').map(char => Number(char))
     let arr2 = (int2 + '').split('').map(char => Number(char))
     
         if (arr1.length < arr2.length){
            return false
        }
     //loop over both arrays to count the frequency
     
     for (let val of arr1){
         frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
     }
     
      for (let val of arr2){
         frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
     }
     
      console.log(frequencyCounter1)
      console.log(frequencyCounter2)
      
      for (let key in frequencyCounter1){
          if(frequencyCounter1[key] !== frequencyCounter2[key]){
              return false
          }
      }
      return true
    }



sameFrequency(182, 281) // true
sameFrequency(34, 14) // false
sameFrequency(1001, 1010) // true
sameFrequency(22, 222) // false 