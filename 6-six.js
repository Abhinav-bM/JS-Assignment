// Write a function to find the second largest number in a array

const myArray = [10,30,22,1,4,7,80,25];

function secondLargest(arr){
    const sorted = arr.sort((a,b) => b-a);
    return sorted[1];
}

console.log(secondLargest(myArray));