// Write a program to find the sum of all the even or odd numbers below a given number.

function sumOfEvenOdd (limit, type = 'even'){
    let sum = 0;

    for (let i = 1; i < limit; i++ ){
        if (type === 'even' && i % 2 === 0){
            sum = sum + i;
        }

        else if(type === 'odd' && i % 2 !== 0){
            sum += i;
        }
    }

    return sum;
}

console.log(sumOfEvenOdd(6, 'odd'));