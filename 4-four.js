// Write a function to calculate the sum of all even numbers between 1 and n.


function sumOfEvenNumbers(n) {
    let sum = 0;
    for (let i = 2; i <= n; i += 2) {
      sum = sum + i;
    }
    return sum;
  }

console.log(sumOfEvenNumbers(5));