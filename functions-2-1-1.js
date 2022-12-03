/* 
1. Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. Do some googling to figure this out if you forget how conditionals work.
*/

maxOfTwoNumbers = (num1, num2) => {
  if(num1>num2){
    console.log(num1)
  } else {
    console.log(num2)
  }
};

maxOfTwoNumbers(1, 120);

/*
2. Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.
*/
maxOfThree = (num1, num2, num3) => {
  if(num1 > num2 && num1 > num3){
    console.log(num1)
  } else if (num2 > num1 && num2 > num3){
    console.log(num2)
  } else {
    console.log(num3)
  }
};

maxOfThree(8, 7, 3)

/*
3. Write a function isCharacterAVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
*/

isCharacterAVowel = () => {
}

/*
4. Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.
*/

sumArray = (someArray) => {
  let sum = 0
  
  for(let i = 0; i < someArray.length; i++){
    sum += someArray[i]
  }

  return console.log(sum)
};

sumArray([1, 2, 3, 4]);


multiplyArray = (anotherArray) => {
let product = 1

for(let i = 0; i < anotherArray.length; i++){
  product *= anotherArray[i]
}

return console.log(product)
};

multiplyArray([1, 2, 3, 4]);

/*
5.Write a function that returns the number of arguments passed to the function when called.
*/

numOfArgs = (...theArgs) => {
console.log(theArgs.length)
}

numOfArgs(1, 2, 3, 7)

/*
6. Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
*/

reverseString = (yourString) => {
  console.log(yourString.split('').reverse().join(''))
};

reverseString("jag testar");

/*
7. Write a function findLongestWord that takes an array of words and returns the length of the longest one.
*/
findLongestWord = (arrayWithWords) => {
  let longest = arrayWithWords[0];
  for(let i = 1; i < arrayWithWords.length; i++){
    if(arrayWithWords[i].length > longest.length) longest = arrayWithWords[i];
  }
  console.log(longest)
};

findLongestWord(["word", "words", "wordsmith"])

/*
8. Write a function filterLongWords that takes an array of words and a number i and returns the array of words that are longer than i characters long.
*/

filterLongWords = (arr, i) => {
  console.log(arr.filter((word) => word.length > i))
};

filterLongWords(["meeps", "beeps", "Bopeeps"], 5)
