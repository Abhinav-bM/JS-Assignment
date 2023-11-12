// Write a program to find the sum of all prime numbers up to a given limit.

function primeCheck(num) {
    
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function sumOfPrimes(limit) {
    let sum = 0;
    for (let i = 2; i <= limit; i++) {
        if (primeCheck(i)) {
            sum += i;
        }
    }
    return sum;
}

console.log(sumOfPrimes(5));