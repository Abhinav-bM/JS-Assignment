// Write a program to find the sum of all the even or odd numbers below a given number.

function sumOfEvenOdd (limit){
    let sum = 0;

    for (let i = 1; i < limit; i++ ){
        if (i % 2 === 0 || i % 2 === 1){
            sum = sum + i;
        }
    }

    return sum;
}

console.log(sumOfEvenOdd(6));