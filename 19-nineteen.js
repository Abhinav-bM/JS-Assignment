// Write a program to find the sum of the digits of a given number

function sumOfDigits (num) { 
    let numStr = num.toString(); 
    let sum = 0; 
  
    for (let digit of numStr) { 
        sum = sum + parseInt(digit); 
    } 
  
    return sum; 
} 