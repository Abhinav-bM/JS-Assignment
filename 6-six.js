// Write a function to find the second largest number in a array

const myArray = [10,30,22,1,4,7,80,25];

myArray.sort((a,b) => b-a);  // arrow-function

console.log(myArray); // descending order

console.log(myArray[1]); // second largest