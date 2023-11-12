// Write a program to find the sum of all the multiples of 3 or 5 below a given number.

function sumOfThreeOrFive (limit){

    let sum = 0;

    for (let i = 1; i < limit; i++){
        if (i % 3 === 0 || i % 5 === 0){
            sum = sum + i;
        }
    }
    return sum;
}

console.log(sumOfThreeOrFive(15));