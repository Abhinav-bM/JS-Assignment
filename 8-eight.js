//  Write a function to calculate the sum of all numbers in a array

function calculateSum (array){
    let sum = 0;
    
    for (let i = 0; i < array.length; i++){
        sum = sum + array[i];
    }

    return sum;
}

const checkSum = [1,2,3,4,5,5,10];

console.log(calculateSum(checkSum));