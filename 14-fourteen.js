// A program to print the Fibonacci series

function printFibonacciSeries(limit) {
    let fibonacciSeries = [0, 1];
    // let stringfib = '';

    for (let i = 2; i < limit; i++) {
    
        let nextNumber = fibonacciSeries[i - 1] + fibonacciSeries[i - 2];
        fibonacciSeries.push(nextNumber);

        // stringfib = fibonacciSeries.toString();
    }

    return fibonacciSeries;
}

console.log(printFibonacciSeries(5));